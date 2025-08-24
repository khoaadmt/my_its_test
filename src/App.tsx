import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-page/login";
import { TopUpPage } from "./pages/TopUp-page/TopUpPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/topup" element={<TopUpPage />} />
        </Routes>
    );
}

export default App;
