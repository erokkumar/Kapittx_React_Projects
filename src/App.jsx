import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SchedulePage from "./pages/SchedulePage";
import ShowDetailPage from "./pages/ShowDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SchedulePage />} />
        <Route path="/show/:id" element={<ShowDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
