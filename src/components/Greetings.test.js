import {render,screen} from "@testing-library/react"
import Greetings from "./Greetings"

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
})
