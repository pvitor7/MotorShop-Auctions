import { render, screen } from '@testing-library/react';
import Button from './';

describe('Button component', () => {

    render(<Button name={'Teste'} />)
    
    test("Name on button", () => {
        expect(screen.getByText('Teste')).toBeInTheDocument();
    })
    
    test("Name not on button", () => {
        expect(screen.queryByText('Teste2')).not.toBeInTheDocument();
    })
  
})