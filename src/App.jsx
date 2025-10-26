import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import GuestRoute from "./wrappers/GuestRoute";
import ProtectedRoute from "./wrappers/ProtectedRoute";
import Bookmarks from "./pages/Bookmarks";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/" element={<Main />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
