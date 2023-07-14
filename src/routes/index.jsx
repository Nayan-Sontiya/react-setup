import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFoundPage from "../pages/PageNotFoundPage";

export const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<PageNotFoundPage />} />
  </Routes>
);
