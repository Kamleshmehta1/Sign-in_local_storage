import './App.css';
import SignInPage from './Components/SignInPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUpPage from './Components/SignUpPage';
import Layout from "./Layout.js";
import NoPage from "./NoPage.js";
import Welcome from "./Welcome.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/SignIn' element={<SignInPage />} />
        <Route path='/SignUp' element={<SignUpPage />} />
        <Route path='/Welcome' element={<Welcome />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
