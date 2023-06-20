// import React,{forwardRef, useImperativeHandle} from 'react'

// const Imperative2custominp = ({style , ...props},ref) => {
//   const handleRef =  useImperativeHandle(ref,()=>{ return {alerter : ()=>{alert(props.value)}}
//   } ,[props.value])
//   return (
//     <input 
// {...props}
//     style={{
//         background : "pink",
//         color : "black",
//         border:"none",
//         ...style
//     }}
//     >
    
    
//     </input>
//   )
// }

// export default forwardRef(Imperative2custominp)

// this will real work if we have one ref direclty to single component
// useimperative is use to make custom ref 

//! 2 

import React,{useImperativeHandle , forwardRef} from 'react'

const Imperative2custominp = ({style , ...props} , ref) => {
  const imperRef =  useImperativeHandle(ref, ()=>{return {}} ,  []);
  return (
   <>
   <input 
   ></input>   
   
   </>
  )
}

export default forwardRef(Imperative2custominp);