import { Link, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";


export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    setRedirect(true);
  }

  if (redirect) return <Navigate to={"/"} />;

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/loggedin/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/loggedin/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
