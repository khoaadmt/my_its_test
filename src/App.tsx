import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-page/login";
import { TopUpPage } from "./pages/top-up-page/TopUpPage";
import { CheckoutPage } from "./pages/checkout-page/CheckoutPage";
import SelectPackagePage from "./pages/select-package-page/SelectPackagePage";
import CustomPagination from "./pages/test/test";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/topup" element={<TopUpPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/select-package" element={<SelectPackagePage />} />
            <Route path="/test" element={<CustomPagination />} />
        </Routes>
    );
}

export default App;
