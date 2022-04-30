import React, {Component} from 'react';
import logo from './logo.svg';
//import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './componentes/Home';
import { Instrumentos } from './componentes/Instrumentos';
import { DetalleInstrumento } from './componentes/DetalleInstrumento';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/instrumentos" element={<Instrumentos/>}/>
            <Route path="/DetalleInstrumento/:id" element={<DetalleInstrumento/>}/>
            <Route path="*" element={<Home/>}/>
          </Routes>
    );
  }
}

export default App;