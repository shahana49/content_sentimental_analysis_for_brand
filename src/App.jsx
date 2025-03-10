import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/home";
import SustainableFashionDashboard from "./components/SustainableFashionDashboard ";
import ProudctDetail from "./pages/productDetails";
import DetailedSentimentAnalysis from "./pages/productDetails";
import Loading from "./components/Loading";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/company" element={<SustainableFashionDashboard />} />
          <Route
            path="/dashboard/productDetail"
            element={<DetailedSentimentAnalysis />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
