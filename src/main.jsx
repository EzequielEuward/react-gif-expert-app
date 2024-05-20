import React from 'react';
import ReactDOM from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import { Header } from './components/GifHead'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  
    <>
    <Header></Header><GifExpertApp /></>
  ,
)
