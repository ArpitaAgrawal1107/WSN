import React from 'react'
//FUNCTIONAL COMPONENT
function Greet() {
    return <h1>Arpita</h1>

}
//JSX
{/* const Greet = () =>
 {
  return(
  <div>
  <h1> Arpita</h1>
  </div>
  );
 //return React.createElement('div',{id : '1',className:'A'},React.createElement('h1',null,'Arpita Agrawal'))
 }
//DYNAMIC USING PROPS
} const Greet = props =>
 {
     console.log(props)
     return (<div> <h1> Hello {props.name}</h1>
     {props.children}
     </div>
     
        )
    }*/}
export default Greet 