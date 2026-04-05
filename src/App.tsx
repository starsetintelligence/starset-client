/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DatasetDetail from "./pages/DatasetDetail";
import Solutions from "./pages/Solutions";
import Datasets from "./pages/Datasets";
import Company from "./pages/Company";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import ContactSales from "./pages/ContactSales";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="datasets" element={<Datasets />} />
          <Route path="dataset/:id" element={<DatasetDetail />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="company" element={<Company />} />
          <Route path="resources" element={<Resources />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<ContactSales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
