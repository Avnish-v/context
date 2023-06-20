import React from 'react'
import {Name} from "../App"
import { useContext } from 'react'
const Comp3 = () => {
    const name = useContext(Name);
  return (
<>
<h1>hello my {name}</h1>

</>
  )
}

export default Comp3
