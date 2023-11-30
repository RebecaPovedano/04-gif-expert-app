import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruedas del componente GifItem', () => { 


    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}  />);

        expect(container).toMatchSnapshot();
    });        

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render(<GifItem title={title} url={url}  />);

        screen.debug();

        const {src, alt} = screen.getByRole('img');

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        
        expect(src).toBe(url);
        expect(alt).toBe(title);
     });

     test('debe de mostrar el titulo en el componenten', () => {
        render(<GifItem title={title} url={url}  />);


        expect(screen.getByText(title)).toBeTruthy();
     });
    
 });