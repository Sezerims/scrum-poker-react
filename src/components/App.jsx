import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;