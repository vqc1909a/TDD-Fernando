import { LoginPage } from "../../src/09-useContext/LoginPage"
import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
describe('tests on LoginPage component', () => { 

    const setUser = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('should show the component by default', () => { 
        const { container } = render(
        <UserContext.Provider value={{user: undefined, setUser}}>
            <LoginPage />
        </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre_login');
        expect(preTag.textContent).toBeFalsy();
        expect(preTag.textContent).toBe("");
        expect(container).toMatchSnapshot();
    })

    test('should call the function setUser when the trigger button click', () => {
        render(
        <UserContext.Provider value={{user: undefined, setUser}}>
            <LoginPage />
        </UserContext.Provider>
        )
        const buttonTag = screen.getByLabelText('button_login');
        fireEvent.click(buttonTag);
        expect(setUser).toHaveBeenCalled();
        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith({id: 123, name: 'Juan', email: 'juan@google.com'});
    })
})