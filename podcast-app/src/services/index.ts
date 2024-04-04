import { API_URL, CORS_URL, type PodcastResponse, type Podcast, type PodcastDetails, type EpisodeDetails } from "../types/config";
import { formatTime } from "../utils/utils";

export const getAllPodcasts = async () => {
    let data;
    try {
        const response = await fetch(`${CORS_URL}${encodeURIComponent(`${API_URL}us/rss/toppodcasts/limit=100/genre=1310/json`)}`)

        data = await response.json();
    } catch (error) {
        console.error(error);
    }
    if (!data.feed) return [];
    const podcasts: Podcast[] = data.feed.entry.map((podcast: PodcastResponse) => {
        return {
            id: podcast.id.attributes["im:id"],
            name: podcast["im:name"].label,
            author: podcast["im:artist"].label,
            description: podcast.summary.label,
            image: podcast["im:image"][2].label
        }
    });
    return podcasts;
}

export const getPodcastDetails = async (podcastId: string) => {
    let data;
    try {
        const response = await fetch(`${CORS_URL}${encodeURIComponent(`${API_URL}lookup?id=${podcastId}`)}`)
        data = await response.json();
    } catch (error) {
        console.error(error);
    }
    if (!data.contents) return {
        id: "",
        name: "",
        author: "",
        description: "",
        url: "",
        image: "",
    };
    const podcastFound = JSON.parse(data.contents).results[0];
    const podcastDetails: PodcastDetails = {
        id: podcastFound.trackId,
        name: podcastFound.trackName,
        author: podcastFound.artistName,
        description: podcastFound.feedUrl,
        url: podcastFound.feedUrl,
        image: podcastFound.artworkUrl600
    };
    return podcastDetails;
}

export const getEpisodes = async (podcastUrl: string) => {
    let XMLdocument;
    try {
        const parser = new DOMParser();
        const response = await fetch(`${CORS_URL}${encodeURIComponent(`${podcastUrl}`)}`);
        const stringWithXML = await response.json();
        XMLdocument = await parser.parseFromString(stringWithXML.contents, "text/xml");
    } catch (error) {
        console.error(error);
    }
    if (!XMLdocument) return [];

    const items = XMLdocument.querySelectorAll("item");
    const episodes: EpisodeDetails[] = Array.from(items).map((item) => {
        const initialStringDate: string | null | undefined = item.querySelector("pubDate")?.textContent;
        let formatedDate: string = "Date not available";
        if (initialStringDate !== null && initialStringDate !== undefined) {
            const objectDate: Date = new Date(initialStringDate);
            formatedDate = `${objectDate.getDate()}/${objectDate.getMonth() + 1}/${objectDate.getFullYear()}`;
        }

        return {
            description: item.querySelector("description")?.textContent,
            duration: formatTime(item.querySelector("duration")?.textContent),
            id: item.querySelector("guid")?.textContent,
            published: formatedDate,
            title: item.querySelector("title")?.textContent,
            url: item.querySelector("enclosure")?.getAttribute("url"),

        }
    });
    return episodes
}

