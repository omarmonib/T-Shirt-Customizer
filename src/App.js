import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Layout from './components/Layout';
import './styles/App.css';

const App = () => {
  return (
    <Layout>
    <div className="App">
      <Home />
      <About />
      <Services />
    </div>
    
    </Layout>
  );
}

export default App;
