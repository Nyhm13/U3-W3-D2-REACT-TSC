import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ClassComponent from "./components/ClassComponent";
// import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:spaceId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
