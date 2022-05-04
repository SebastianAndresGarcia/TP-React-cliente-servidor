import React, {Component} from 'react';
//import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './componentes/Home';
import { Instrumentos } from './componentes/Instrumentos';
import { DetalleInstrumento } from './componentes/DetalleInstrumento';
import {TablaInstrumentos} from './componentes/TablaInstrumentos';
import { FormABM } from './componentes/FormABM'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/instrumentos" element={<Instrumentos/>}/>
            <Route path="/DetalleInstrumento/:id" element={<DetalleInstrumento/>}/>
            <Route path="/TablaInstrumentos" element={<TablaInstrumentos/>}/>
            <Route path="/FormABM/:id" element={<FormABM/>}/>
            <Route path="*" element={<Home/>}/>
          </Routes>
    );
  }
}

export default App;