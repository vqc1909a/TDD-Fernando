import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext"
import { MemoryRouter } from "react-router-dom";

describe('Tests on MainPage component', () => { 
    test("should show the HomePage if we be in the '/' route", () => { 
        //We need MemoryRouter because this makes it ideal for scenarios where you need complete control over the history stack, like testing.
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        const linkTag = screen.getByRole("link", { name: /home/i });
        expect(linkTag.classList.contains("active")).toBeTruthy();
        expect(linkTag.classList[1]).toBe("active");
        expect(screen.getByText('HomePage')).toBeTruthy();
    })

    test("should show the LoginpPage if we be in the '/login' route", () => { 
        //We need MemoryRouter because this makes it ideal for scenarios where you need complete control over the history stack, like testing.
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        const linkTag = screen.getByRole("link", { name: /login/i });
        expect(linkTag.classList.contains("active")).toBeTruthy();
        expect(linkTag.classList[1]).toBe("active");
        expect(screen.getByText('LoginPage')).toBeTruthy();
    })
})