import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


const App = () => {
  return (
    <Home />
  );
};

export default App;

    {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router> */}
