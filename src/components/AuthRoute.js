import { Outlet } from "react-router";
import { isAuthenticated } from "../services/authService"
import LoginView from "../views/LoginView";

const AuthRoute = () => {
  const user = isAuthenticated();

  return user ? <Outlet/> : <LoginView/>;
}

export default AuthRoute;