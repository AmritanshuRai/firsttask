import { BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage'

import Header from './components/header/Header'

import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={Homepage} exact />
    </Router>
  );
}

export default App;
