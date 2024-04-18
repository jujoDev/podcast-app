import { render, screen } from "@testing-library/react";
import ContextProvider from "./ContextProvider";

describe("ContextProvider", () => {
    const dummyChildren = <div>dummy children</div>;
    const renderice = () => {
        render(<ContextProvider children={dummyChildren} />);
    };

    test("renders context provider", () => {
        renderice();
        expect(screen.getByText("dummy children")).toBeDefined();
    });
});