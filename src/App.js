import React from "react";
import "./App.css"
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import {originals,action,comedy} from "./urls/urls"

function App() {
  return(
    <div>
    <NavBar/>
    <Banner/>
    <Rowpost title='Netflix Originals' url={originals}/>
    <Rowpost title='Action' isSmall url={action}/>
    <Rowpost title='Comedy' isSmall url={comedy}/>
    </div>
  )
}
export default App;
