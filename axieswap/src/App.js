import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

import Home from './pages';
import SignIn from './pages/SignIn';

Amplify.configure(awsExports);

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </Router>
  );
}

export default App;
