import {render,screen} from "@testing-library/react";
import Login from "../Components/Login";

test("username input should be rendered",()=>{
    render(<Login />);
    const userInputEl =screen.getByPlaceholderText(/username/i)
    expect(userInputEl).toBeInTheDocument()
})

test("password input should be rendered",()=>{
    render(<Login />);
    const passwordInputEl =screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl).toBeInTheDocument()
})

test("button input should be rendered",()=>{
    render(<Login />);
    const buttonEl =screen.getByRole("button")
    expect(buttonEl).toBeInTheDocument()
})

test("username input should be empty",()=>{
    render(<Login />);
    const userInputEl =screen.getByPlaceholderText(/username/i)
    expect(userInputEl.value).toBe("")
})

test("password input should be empty",()=>{
    render(<Login />);
    const passwordInputEl =screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl.value).toBe("")
})

test("button input should be disable",()=>{
    render(<Login />);
    const buttonEl =screen.getByRole("button")
    expect(buttonEl).toBeDisabled()
})

test("error message should not be visible",()=>{
    render(<Login />);
    const errorEl =screen.getByTestId("error")
    expect(errorEl).not.toBeVisible()
})

test("username input should be change",()=>{
    render(<Login />);
    const userInputEl =screen.getByPlaceholderText(/username/i)
    expect(userInputEl).toBeInTheDocument()
})

test("password input should be change",()=>{
    render(<Login />);
    const passwordInputEl =screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl).toBeInTheDocument()
})


