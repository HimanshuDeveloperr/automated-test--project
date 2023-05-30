import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Async from "./Async"



describe("Async components",()=>{

    test("async functionality test",async()=>{

        render(<Async/>)

        const items=await screen.findAllByRole("listitem")
        expect(items).not.toHaveLength(0)
    })
})