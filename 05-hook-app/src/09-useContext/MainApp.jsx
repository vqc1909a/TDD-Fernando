import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage } from "./";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";



export const MainApp = () => {
  return (
    // This UserProvider will should be in the rootComponent called main.jsx, it is here only for the example
    <UserProvider>

        <h1>MainApp</h1>
        <Navbar />
        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/about" />}/>
        </Routes>
    </UserProvider>
  )
}
