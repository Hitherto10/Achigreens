import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Routes, Route } from "react-router-dom";
import PrivacyPolicyPage from "./pages/PrivacyPolicy.jsx";
import TermsConditionsPage from "./pages/TandC.jsx";

function App() {

  return (
    <>
        <Header />
        {/*<div className={`mt-24`}>*/}
            <Routes >
                <Route path={`/`} element={<Home />}/>
                <Route path={`/privacy-policy`} element={<PrivacyPolicyPage />}/>
                <Route path={`/terms`} element={<TermsConditionsPage />}/>
            </Routes>
        {/*</div>*/}

        <Footer />
    </>
  )
}

export default App
