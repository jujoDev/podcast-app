export const getStorage = (item: string) => {
    const storedPodcastsData = localStorage.getItem(`${item}_data`);
    const storedTimestamp = localStorage.getItem(`${item}_timestamp`);
    if (storedPodcastsData && storedTimestamp) {
        const storedTime = new Date(storedTimestamp).getTime();
        const currentTime = new Date().getTime();
        const twentyFourHours = 24 * 60 * 60 * 1000;
        if (currentTime - storedTime > twentyFourHours) {
            localStorage.removeItem(`${item}_data`);
            localStorage.removeItem(`${item}_timestamp`);
            return null;
        } else {
            return JSON.parse(storedPodcastsData);
        }
    }
}