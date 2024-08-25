import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" exact>
            <h1>Bienvenido a OmegaPetShop</h1>
            <p>Explora nuestros productos.</p>
          </Route>
          {/* Otras rutas aquí */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

