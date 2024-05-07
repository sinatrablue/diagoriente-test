import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import MainFrame from "./components/MainFrame/MainFrame";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Header />
        <MainFrame />
      </BrowserRouter>
    </div>
  );
}
