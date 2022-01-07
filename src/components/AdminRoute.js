import { Outlet } from "react-router";
import { isAuthenticated } from "../services/authService"
import LoginView from "../views/LoginView";

export default function AdminRoute() {
  const user = isAuthenticated();

  return user.role === 'ADMIN' ? <Outlet/> : <LoginView/>;
}