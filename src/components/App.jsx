import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Custom from "./Custom";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Custom/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;