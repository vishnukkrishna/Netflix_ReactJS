import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import RowPost from "./Components/RowPost/RowPost";
import {originals, action} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={action} title='Action Movies'/>
      <RowPost url={originals} title='Netflix Originals' isSmall/>
    </div>
  );
}

export default App;
