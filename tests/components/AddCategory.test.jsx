import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas del componente AddCategory', () => { 
    test('Debe cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Saitama'}});

        expect(input.value).toBe('Saitama');
        //screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Saitama';

        //TODO: ???

        render(<AddCategory onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});

        fireEvent.submit(form);

        expect(input.value).toBe('');
     })
 })