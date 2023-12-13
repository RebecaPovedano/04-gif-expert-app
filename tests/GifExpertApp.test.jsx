import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp';

import { useFetchGifs } from '../src/hooks/useFetchGifs';

jest.mock('../src/hooks/useFetchGifs');

describe('Pruebas sobre el componente GifExpertApp', () => {
    const inputValue = 'Genshin Impact';

    const onSubmit = (value, input, form) => {
        fireEvent.input(input, { target: { value: value } });
        fireEvent.submit(form);
    }

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });

    test('Debería mostrar "Cargando..."', () => {
        render(<GifExpertApp />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
    });

    test('Debería mostrar una vez el titulo "Genshin Impact"', async () => {
        render(<GifExpertApp />);

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        onSubmit(inputValue, input, form);
        onSubmit(inputValue, input, form);

        expect(screen.getAllByText(inputValue).length).toBe(1);
    });

    test('Debería mostrar al menos 10 imagenes', () => {
        useFetchGifs.mockReturnValue({
            images: [
                {
                    id: Math.random(),
                    url: 'https://localhost/1.jpg',
                    title: '1'
                },
                {
                    id: Math.random(),
                    url: 'https://localhost/1.jpg',
                    title: '1'
                },
                {
                    id: Math.random(),
                    url: 'https://localhost/1.jpg',
                    title: '1'
                },
                {
                    id: Math.random(),
                    url: 'https://localhost/1.jpg',
                    title: '1'
                },
                {
                    id: Math.random(),
                    url: 'https://localhost/1.jpg',
                    title: '1'
                },
                {
                    id: Math.random(),
                    url: 'https://localhost/1.jpg',
                    title: '1'
                },
                {
                    id: Math.random(),
                    url: 'https://localhost/1.jpg',
                    title: '1'
                },
                {
                    id: Math.random(),
                    url: 'https://localhost/1.jpg',
                    title: '1'
                },                
                {
                    id: Math.random(),
                    url: 'https://localhost/1.jpg',
                    title: '1'
                },
                {
                    id: Math.random(),
                    url: 'https://localhost/1.jpg',
                    title: '1'
                },
            ],
            isLoading: false
        });

        render(<GifExpertApp />);
        
        expect(screen.getByText('One Punch').parentElement.querySelectorAll('.card').length).toBeGreaterThanOrEqual(10);
    });

})