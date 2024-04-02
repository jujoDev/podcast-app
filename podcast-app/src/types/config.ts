export const API_URL = 'https://itunes.apple.com/';
export const CORS_URL = "https://api.allorigins.win/get?url=";


export interface Podcast {
    id: string;
    name: string;
    author: string;
    image: string;
    description: string;
}

export interface PodcastResponse {
    'im:name': { label: string },
    'im:image': [
        {
            label:
            string,
            attributes: { height: string }
        },
        {
            label:
            string,
            attributes: { height: string }
        },
        {
            label:
            string,
            attributes: { height: string }
        }
    ],
    summary: {
        label:
        string
    },
    'im:price': { label: string, attributes: { amount: string, currency: string } },
    'im:contentType': { attributes: { term: string, label: string } },
    rights: { label: string },
    title: { label: string },
    link: {
        attributes: {
            rel: string,
            type: string,
            href:
            string
        }
    },
    id: {
        label:
        string,
        attributes: { 'im:id': string }
    },
    'im:artist': {
        label: string,
        attributes: {
            href:
            string
        }
    },
    category: {
        attributes: {
            'im:id': string,
            term: string,
            scheme: string,
            label: string
        }
    },
    'im:releaseDate': {
        label: string,
        attributes: { label: string }
    }
}

export interface PodcastDetails {
    id: string;
    name: string;
    author: string;
    description: string;
    url: string;
    image: string;
}

export interface PodcastDetailsResponse {
    "wrapperType": string,
    "kind": string,
    "artistId": number,
    "collectionId": number,
    "trackId": number,
    "artistName": string,
    "collectionName": string,
    "trackName": string,
    "collectionCensoredName": string,
    "trackCensoredName": string,
    "artistViewUrl": string,
    "collectionViewUrl": string,
    "feedUrl": string,
    "trackViewUrl": string,
    "artworkUrl30": string,
    "artworkUrl60": string,
    "artworkUrl100": string,
    "collectionPrice": number,
    "trackPrice": number,
    "collectionHdPrice": number,
    "releaseDate": string,
    "collectionExplicitness": string,
    "trackExplicitness": string,
    "trackCount": number,
    "trackTimeMillis": number,
    "country": string,
    "currency": string,
    "primaryGenreName": string,
    "contentAdvisoryRating": string,
    "artworkUrl600": string,
    "genreIds": string[],
    "genres": string[]
}

export interface EpisodeDetails {
    description: string | null | undefined;
    duration: string | null | undefined;
    id: string | null | undefined;
    published: string | null | undefined;
    title: string | null | undefined;
    url: string | null | undefined;
}

