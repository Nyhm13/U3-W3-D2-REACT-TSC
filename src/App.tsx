import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ClassComponent from "./components/ClassComponent";
// import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
