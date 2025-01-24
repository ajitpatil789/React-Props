import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ProductInfo from "./Components/Product/ProductInfo";
import Student from "./Components/Student/Student";
import User from "./Components/User/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/product" element={<ProductInfo />} />
        <Route path="student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
