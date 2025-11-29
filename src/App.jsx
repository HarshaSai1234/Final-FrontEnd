import { useEffect, useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  const [page, setPage] = useState("login");      // login | signup | admin | student
  const [dark, setDark] = useState(false);
  const [users, setUsers] = useState([]);         // {name,email,password,role}[]

  useEffect(() => {
    const saved = localStorage.getItem("ws_users");
    if (saved) {
      try {
        setUsers(JSON.parse(saved));
      } catch {
        setUsers([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ws_users", JSON.stringify(users));
  }, [users]);

  const handleLogin = (email, password) => {
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (!user) return { success: false, reason: "no-user" };
    if (user.password !== password)
      return { success: false, reason: "wrong-password" };

    setPage(user.role === "admin" ? "admin" : "student");
    return { success: true, role: user.role };
  };

  const handleSignup = (data) => {
    const exists = users.some(
      (u) => u.email.toLowerCase() === data.email.toLowerCase()
    );
    if (exists) return { success: false, reason: "exists" };

    setUsers((prev) => [...prev, data]);
    return { success: true };
  };

  const handleLogout = () => {
    setPage("login");
  };

  const toggleTheme = () => setDark((prev) => !prev);

  useEffect(() => {
    const shouldDark = dark && (page === "admin" || page === "student");
    document.body.classList.toggle("dark", shouldDark);
  }, [dark, page]);

  useEffect(() => {
    const isAuthPage = page === "login" || page === "signup";
    if (isAuthPage) {
      document.body.classList.add("login-bg");
      document.body.classList.remove("plain-bg");
    } else {
      document.body.classList.remove("login-bg");
      document.body.classList.add("plain-bg");
    }
  }, [page]);

  const wrapperClass =
    page === "login" || page === "signup" ? "app app-center" : "app app-full";

  return (
    <div className={wrapperClass}>
      {page === "login" && (
        <Login
          onLogin={handleLogin}
          onShowSignup={() => setPage("signup")}
        />
      )}

      {page === "signup" && (
        <Signup
          onSignup={handleSignup}
          onShowLogin={() => setPage("login")}
        />
      )}

      {page === "admin" && (
        <AdminDashboard
          onLogout={handleLogout}
          onToggleTheme={toggleTheme}
        />
      )}

      {page === "student" && (
        <StudentDashboard
          onLogout={handleLogout}
          onToggleTheme={toggleTheme}
        />
      )}
    </div>
  );
}

export default App;
