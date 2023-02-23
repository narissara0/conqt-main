
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ViewALlProduct from "./Pages/ViewAllProduct";
import SingleProduct from "./Pages/ViewAllProduct/SingleProduct";
import AboutUs from './Pages/AboutUs';
import ContatctUs from './Pages/ContactUs'
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <ToastContainer />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/view-all-product" element={<ViewALlProduct />} />
                    <Route path="/single-product" element={<SingleProduct />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContatctUs />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
