import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"



describe('Pruebas sobre el customHook de useFetchGifs', () => { 

    test('Debe regresar el estado inicial', () => { 

        const {result} = renderHook(() => 
            useFetchGifs('One Punch')
        );
        
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     });

     test('Debe de devolver un array de imagenes e isLoading en false', async() => { 
        const {result} = renderHook(() => 
         useFetchGifs('One Punch')
        );

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
    
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(images).toHaveLength(10);
        expect(isLoading).toBeFalsy();
      })
 })