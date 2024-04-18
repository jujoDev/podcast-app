import { getDescription } from "./getDescription";

vi.mock('./getStorage.js', () => ({
    getStorage: vi.fn().mockReturnValue([{
        id: '12345',
        description: 'description'
    }])
}))

vi.mock('../../services', () => ({
    getAllPodcasts: vi.fn().mockReturnValue({
        id: '12345',
        description: 'description'
    })
}));

describe('getDescription', () => {
    const podcastIdMock = '12345';
    const podcastMock = {
        id: '12345',
        description: 'description'
    }

    test('returns podcast description', async () => {
        const result = await getDescription(podcastIdMock);
        expect(result).toBe(podcastMock.description);
    });
});