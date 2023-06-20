
import React from 'react'
import { useRef } from 'react'

const Ref = () => {
    const t1 = useRef();
    const t2 = useRef();
    const styleer = ()=>{
     t2.current.style.borderColor = "red"
     t2.current.value = "hello"
     t2.current.style.backgroundColor  = "yellow"
    }
  return (
    <>
    <input ref={t1} type='textbox'name="1" onChange={styleer}></input>
    <input ref={t2}type='textbox' name="2" onChange={()=>{t2.current.style.borderColor ="green"}}></input>
    <br/>
<searchInput value="hello"></searchInput>
    <hr/>
    <button onClick={()=>{t1.current.focus()}}>Focus t1</button>
    <button onClick={()=>{t2.current.focus()}} >Focus t2</button>
    </>
  )
}

export default Ref

// use case 1
