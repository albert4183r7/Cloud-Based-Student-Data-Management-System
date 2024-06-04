import AddStudentComponent from "./component/AddStudentComponent";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListStudentComponent from "./component/ListStudentComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListStudentComponent />} />
          <Route path="/student" element={<ListStudentComponent />} />
          <Route path="/add-student" element={<AddStudentComponent />} />
          <Route path="/add-student/:id" element={<AddStudentComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
