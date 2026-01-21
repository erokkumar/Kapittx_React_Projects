import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchedulePage from "./pages/SchedulePage";
import ShowDetailPage from "./pages/ShowDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SchedulePage />} />
        <Route path="/show/:id" element={<ShowDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
