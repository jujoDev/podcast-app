import { useEffect, useState } from "react";
import { getAllPodcasts } from "../../../services";
import { Podcast } from "../../../types/config";

export const HomePageLogic = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [podcasts, setPodcasts] = useState<Podcast[] | []>([]);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    useEffect(() => {
        (async () => {
            if (firstLoad) {
                setFirstLoad(false);
                setIsLoading(true);
                const podcasts = await getAllPodcasts();
                setPodcasts(podcasts)
                setIsLoading(false);
            }
        })();
    }, [firstLoad]);
    return { isLoading, podcasts }
}