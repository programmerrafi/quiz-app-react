import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
import PrivetOutlet from "./PrivetOutlet";
import PublicRoute from "./PublicRoute";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PrivetOutlet />}>
              <Route path="quiz/:id" element={<Quiz />} />
              <Route path="result/:id" element={<Result />} />
            </Route>
            <Route path="/*" element={<PublicRoute />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
