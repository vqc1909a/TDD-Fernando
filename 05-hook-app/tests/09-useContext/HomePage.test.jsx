import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('tests on HomePage component', () => { 

  const user = {
    id: 1,
    name: 'vqc1909a',
    email: 'vqc190a@gmail.com'
  }

  test('should show the component without user', () => { 
    //In one component that used useContext, we need to envolve the test component with the component provider of the context
    const { container } = render(
      <UserContext.Provider value={{user: undefined}}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.textContent).toBeFalsy();
    expect(preTag.textContent).toBe("");
    expect(container).toMatchSnapshot();
  })

  test('should show the component with user', () => { 
    //In one component that used useContext, we need to envolve the component to test with the component provider of the context
    render(
      <UserContext.Provider value={{user}}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.textContent).toContain(user.name);
    expect(preTag.textContent).toContain(user.id.toString());

  })
})