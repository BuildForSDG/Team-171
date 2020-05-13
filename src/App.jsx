import React from 'react';
import Home from './components/home.component';
import About from './components/about.component';
import Contact from './components/contact.component';

export default function App() {
  return(
    <div className="App">
      <div className="nav">
        <nav>
          <ul>
            <li><Home /></li>
            <li><About /></li>
            <li><Contact /></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
