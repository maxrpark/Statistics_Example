import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./pages/profile";
import { Header, Footer } from "./components/";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
