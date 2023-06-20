// import React,{useImperativeHandle, useRef, useState} from 'react'
// import Imperative2custominp from './Imperative2custominp'



// const Imperatives = () => {
//     const [value,setvalue] = useState("red")
//     const inputref = useRef(null);
//   return (
//     <>
//     <Imperative2custominp  ref={inputref} value={value}  onChange={(e)=> setvalue(e.target.value)}/>
//     <br/>
//     <button onClick={()=>{inputref.current.alerter()}}>focus</button>

//     </>
//   )
// }

// export default Imperatives

//! 2 
import React from 'react'
import Imperative2custominp from './Imperative2custominp'

const Imperatives = () => {
  return (
   <>
    <button  >open</button>
    <button  >focus Close </button>
    <button  >focus Confirm</button>
     <button  >focus Deny</button>
     <Imperative2custominp />
   </>
  )
}

export default Imperatives