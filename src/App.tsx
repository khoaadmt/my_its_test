import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-page/login";
import { TopUpPage } from "./pages/top-up-page/TopUpPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/topup" element={<TopUpPage />} />
            <Route path="/test" element={<TopUpPage />} />
        </Routes>
    );
}

export default App;
