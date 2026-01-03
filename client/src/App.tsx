import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import Chat from "./components/chat/chat";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  return { isAuth, login: () => setIsAuth(true), logout: () => setIsAuth(false) };
};
const ProtectedRoute = ({ isAuth, children }: any) => {
  return isAuth ? children : <Navigate to="/signin" replace />;
};
export default function App() {
  const auth = useAuth();


  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn login={auth.login} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isAuth={auth.isAuth}>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}