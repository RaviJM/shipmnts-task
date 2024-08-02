import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ScheduleEmail from "./pages/ScheduleEmail";
import ScheduledEmails from "./pages/ScheduledEmails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/scheduleEmail" element={<ScheduleEmail />} />
        <Route path="/scheduledEmails" element={<ScheduledEmails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
