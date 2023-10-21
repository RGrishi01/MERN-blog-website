import "./App.css";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/loggedin"} element={<Layout />}>
          <Route path={"/loggedin/"} element={<IndexPage />} />
          <Route path={"/loggedin/create"} element={<CreatePost />} />
          <Route path="/loggedin/post/:id" />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
