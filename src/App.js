import Comp1 from "./Components/Comp1"
import { createContext } from "react";
import Ref from "./Components/Ref";
import Imperatives from "./Components/Imperatives";

const Name =  createContext();
function App() {
  return (
  <>
  {/* <Name.Provider value={"avnish"}>

    <Comp1/>
  </Name.Provider>
  <Ref/> */}
  <Imperatives/>
  </>
  );
}
export { Name };
export default App;
