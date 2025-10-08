import "./App.css"           
import Header from "./componets/common/heading/Head.jsx"
 import { BrowserRouter as Router, } from "react-router-dom";
import "./componets/common/header.css"

function App () {
    return (
      <>
        <Router>
          <Header />
          <switch>
            {/* <Route path='/about'>
                        <About />
                    </Route> */}
          </switch>
        </Router>
      </>
    );  };
    export default App; 

  
        
        