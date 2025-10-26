import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import ProtectedRoute from "./wrappers/ProtectedRoute";
import GuestRoute from "./wrappers/GuestRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
