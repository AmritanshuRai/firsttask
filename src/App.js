import { BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage'

import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/' component={Homepage} exact />
    </Router>
  );
}

export default App;
