import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-page/login";
import { TopUpPage } from "./pages/top-up-page/TopUpPage";
import { CheckoutPage } from "./pages/checkout-page/CheckoutPage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/topup" element={<TopUpPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/test" element={<TopUpPage />} />
        </Routes>
    );
}

export default App;
