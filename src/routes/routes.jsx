import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Main } from "../components/Main"
import { Amazon } from "../pages/Amazon"
import { MercadoLibre } from "../pages/MercadoLibre"
import { Aliexpress } from "../pages/Aliexpress"
import { Temu } from "../pages/Temu"
import { Otros } from "../pages/Otros"

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/amazon" element={<Amazon />} />
        <Route path="/mercado-libre" element={<MercadoLibre />} />
        <Route path="/aliexpress" element={<Aliexpress />} />
        <Route path="/temu" element={<Temu />} />
        <Route path="/otros" element={<Otros />} />
      </Routes>
    </Router>
  )
}
