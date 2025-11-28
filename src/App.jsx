import { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  const [role, setRole] = useState(null);          // "admin" | "student" | null
  const [page, setPage] = useState("login");       // "login" | "admin" | "student" | "logout"

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
    setPage(selectedRole === "admin" ? "admin" : "student");
  };

  const handleLogout = () => {
    setRole(null);
    setPage("logout");
  };

  const backToLogin = () => {
    setPage("login");
  };

  return (
    <div className="app">
      {page === "login" && <Login onLogin={handleLogin} />}
      {page === "admin" && <AdminDashboard onLogout={handleLogout} />}
      {page === "student" && <StudentDashboard onLogout={handleLogout} />}
      {page === "logout" && <Logout onBackToLogin={backToLogin} />}
    </div>
  );
}

export default App;
