import Navbar from "./components/Navbar";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from "./components/Post";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
//import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      {/* //   <div className="App">
    //     <Navbar />
    //     <Switch>
    //       <Route exact path="/" >
    //         <Home />
    //       </Route>
    //       <Route exact path="/About" >
    //         <About />
    //       </Route>
    //       <Route exact path="/Contact" >
    //         <Contact />
    //       </Route>
    //       <Route path="/:post_id" >
    //         <Post />
    //       </Route>
    //     </Switch>
    //   </div> */}



      {/* /*route v6*/}


      <div className="App">


        <Navbar />

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="Contact" element={<Contact />} />
          <Route exact path="/:post_id" element={<Post />} />

        </Routes>
      </div>


    </Router >


  );
}

export default App;
