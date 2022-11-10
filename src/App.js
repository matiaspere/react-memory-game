import "./App.css";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React from "react";
import AppContext from './context/AppContext';
import useMovimientos from './hooks/useMovimientos';
import Header from "./components/Header";

function App() {
  const movimientos = useMovimientos();

  return (
    <AppContext.Provider value={movimientos}>
      <Layout>
        <Header />
        <Main />
        <Footer/>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
