//INTRODUCING OF TESTING



// import { render,screen } from "@testing-library/react";
// import  {Greet}  from "./greet";

// test('Greet renders correctly', () => {
// render(<Greet />)
// const textElement= screen.getByText(/hello/i)//(/hello/i) for multiple one //("Hello")for particular given ui
// expect(textElement).toBeInTheDocument();
// })

//Greet should render followed by by the hello and if the name is passed into the component.
//It should render hello followed by the name
//Test Driven Development
//TDD APROACH
// import {render,screen} from "@testing-library/react";
// import {Greet} from "./greet";

// test('Greet renders correctly', () => {
//      render(<Greet />)
//       const textElement= screen.getByText("Hello") 
//  expect(textElement).toBeInTheDocument();
// })

// test('Greet renders with a name', () => {
//     render(<Greet name="Vishwas" />)
//     const textElement= screen.getByText("Hello Vishwas")
// expect(textElement).toBeInTheDocument();
// })
