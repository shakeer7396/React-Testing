
// //Example Test file in Dom Checking
// export const Greet = () => {
//     return (
//       <div>Hello</div>
//     )
//   }
  
type GreetProps={
  name?: string
}
export const Greet = (props: GreetProps) => {
      return (
        <div>Hello {props.name}</div>
      )
    }