// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import PuzzleMemorizePage from './pages/PuzzleMemorizePage';
import PuzzleQuestionPage from './pages/PuzzleQuestionPage';
import MissionPage from './pages/MissionPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/puzzle/:missionId" element={<PuzzleMemorizePage />} />
        <Route path="/puzzle-question/:missionId" element={<PuzzleQuestionPage />} />
        <Route path="/mission/:missionId" element={<MissionPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;