import { BrowserRouter } from "react-router-dom";

import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Content/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
