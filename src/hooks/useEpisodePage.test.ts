import { useEpisodePage } from "./useEpisodePage";
import { renderHook } from "@testing-library/react";

describe("useEpisodePage", () => {
    const podcastDescriptionMock = "description";
    const podcastDetailsCtxMock = {
        url: "example.example",
        title: "title",
        description: "description"
    };
    const selectedEpisodeMock = {
        description: "description",
        duration: "10:00:00",
        id: "123213",
        published: "01-01-2021",
        title: "Episode Title",
        url: "example.example"
    };

    vi.doMock("react", () => ({
        ...vi.importActual("react"),
        useContext: vi.fn().mockReturnValue({
            podcastDetailsCtx: podcastDetailsCtxMock,
            selectedEpisode: selectedEpisodeMock,
            setIsLoading: vi.fn(),
            podcastDescription: podcastDescriptionMock,
        }),
    }));

    describe("useEpisodePage", () => {

        test("returns isLoading, podcastDetailsCtx, selectedEpisode, setIsLoading, podcastDescription", () => {
            const { result } = renderHook(() => useEpisodePage());
            expect(result.current.isLoading).toBeDefined();
            expect(result.current.podcastDetailsCtx).toBeDefined();
            expect(result.current.selectedEpisode).toBeDefined();
            expect(result.current.setIsLoading).toBeDefined();
            expect(result.current.podcastDescription).toBeDefined();
        });
    });
});