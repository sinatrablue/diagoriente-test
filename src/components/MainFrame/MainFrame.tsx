import { Route, Routes } from "react-router-dom";
import ThemesForm from "../../pages/ThemesForm/ThemesForm";
import CarouselForm from "../../pages/CarouselForm/CarouselForm";

export default function MainFrame() {
  return (
    <Routes>
      <Route path="*" element={<></>} />
      <Route path="/themes" element={<ThemesForm />} />
      <Route path="/themes/carousel" element={<CarouselForm />} />
    </Routes>
  );
}
