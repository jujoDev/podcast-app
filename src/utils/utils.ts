export const formatTime = (seconds: string | null | undefined): string => {
    if (!seconds) return '00:00:00';
    if (seconds.includes(':')) return seconds;

    const formatedSeconds = parseInt(seconds);
    const hours = Math.floor(formatedSeconds / 3600);
    const minutes = Math.floor((formatedSeconds % 3600) / 60);
    const remainingSeconds = formatedSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};