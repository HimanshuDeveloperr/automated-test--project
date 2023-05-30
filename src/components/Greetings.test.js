import {render,screen} from "@testing-library/react"
import Greetings from "./Greetings"
import userEvent from "@testing-library/user-event"

describe("Greetings Components",()=>{

    test("renders hello world as a text",()=>{
        //arrange things that u want to render
        render(<Greetings/>)
    
        // act 
        // nothing to execute eg:-functions etc...
    
        // assert
        const text=screen.getByText("Hello World!")
        expect(text).toBeInTheDocument()
    })

    test("render button is not clicked",()=>{
        render(<Greetings/>)

        const notClicked=screen.getByText("false",{exact:false})
        expect(notClicked).toBeInTheDocument()
    })

    test('renders button and checks if "true" is present', () => {
        render(<Greetings />);
    
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
        const element = screen.queryByText("true");
    
        expect(element).toBeInTheDocument();
      });

      test('renders button and checks if "false" is not present', () => {
        render(<Greetings />);
    
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
        const elementTwo = screen.queryByText("false");
    
        expect(elementTwo).toBeNull()
      });
})
