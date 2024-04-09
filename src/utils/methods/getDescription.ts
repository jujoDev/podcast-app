import { getAllPodcasts } from "../../services"
import { Podcast } from "../../types/config";
import { getStorage } from "./getStorage"

export const getDescription = async (podcastId: string) => {

    let podcasts: Podcast[] = getStorage('podcasts');
    if (!podcasts) {
        podcasts = await getAllPodcasts();
    }
    const podcast = podcasts.find((podcast) => podcast.id === podcastId);
    if (podcast) {
        return podcast.description;
    }
}