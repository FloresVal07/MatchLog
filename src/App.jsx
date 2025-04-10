import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Matches from "./Pages/Matches.jsx";
import News from "./Pages/News.jsx";
import Leagues from "./Pages/Leagues.jsx";
import Following from "./Pages/Following.jsx";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Matches />} />
        <Route path="/news" element={<News />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/following" element={<Following />} />
      </Routes>
    </Router>
  );
}

export default App;