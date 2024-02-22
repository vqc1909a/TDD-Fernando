import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';


describe('Pruebas en el <CounterApp />', () => {

       const initialValue = 100;

       test('should make to match to the snapshot', () => { 
            const {container} = render(<CounterApp value={initialValue} />)
            expect(container).toMatchSnapshot();
       })

       test('should show the initial value 100', () => { 
            render(<CounterApp value={initialValue} />)
            expect(screen.getByText(initialValue)).toBeTruthy();
            expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(String(initialValue));
       })

       test('should increment to the click the add button +1', () => { 
            render(<CounterApp value={initialValue} />)
            //fireEvent is a function that simulate the events of the DOM, in this case we simulate the click event
            fireEvent.click(screen.getByText('+1'));

            expect(screen.getByText(initialValue + 1)).toBeTruthy();
            expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(String(initialValue + 1));
       })

       test('should decrement to the click the rest button -1', () => { 
            render(<CounterApp value={initialValue} />)
            fireEvent.click(screen.getByText('-1'));
            // thanks to the screen.debug(), we can see the changes component (screen) by fireEvent in the moment 
            // screen.debug();

            expect(screen.getByText(initialValue - 1)).toBeTruthy();
            expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(String(initialValue - 1));
        })

        test('should reset to the initialValue to the click the reset button  ', () => { 
            render(<CounterApp value={initialValue} />);
            fireEvent.click(screen.getByText('-1'));
            fireEvent.click(screen.getByText('Reset'));
            //this getByRole('button', {name: 'btn-reset'}) make a reference to the button reset
            fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

            expect(screen.getByText(initialValue)).toBeTruthy();
            expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(String(initialValue));


         })

//     test('debe de incrementar con el botón +1', () => {
        
//         render( <CounterApp value={ initialValue } /> );
//         fireEvent.click( screen.getByText('+1') )
//         expect( screen.getByText('11') ).toBeTruthy();

//     });

//     test('debe de decrementar con el botón -1', () => {
        
//         render( <CounterApp value={ initialValue } /> );
//         fireEvent.click( screen.getByText('-1') );
//         expect( screen.getByText('9') ).toBeTruthy();

//     });

//     test('debe de funcionar el botón de reset', () => {
        
//         render( <CounterApp value={ 355 } /> );
//         fireEvent.click( screen.getByText('+1') );
//         fireEvent.click( screen.getByText('+1') );
//         fireEvent.click( screen.getByText('+1') );
//         // fireEvent.click( screen.getByText('Reset') );
//         fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

//         expect( screen.getByText( 355 ) ).toBeTruthy();

    });




// });