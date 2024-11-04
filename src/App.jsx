// App.jsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Background from './components/Background';
import WelcomeSection from './components/WelcomeSection';
import Contact from './components/Contact'; 
import CircuitsPreviewSection from './components/CircuitsPreviewSection';
import Circuits from './components/Circuits';
import TourViewer from './components/TourViewer';
import CircuitViewer from './components/CircuitViewer';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import BackButton from './components/BackButton';

function App() {
  return (
    <Router basename="/tourOperator">
      <div className="flex flex-col min-h-screen">
        <Header />
        <BackButton />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div>
                <Background />
                <WelcomeSection />
                <CircuitsPreviewSection />
              </div>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/circuits"> 
              <Route index element={<Circuits />} />
              <Route path="aventure" element={<CircuitViewer circuitName="aventure" />} />
              <Route path="oiseaux" element={<CircuitViewer circuitName="oiseaux" />} />
              <Route path="sud" element={<CircuitViewer circuitName="sud" />} />
              <Route path="ethiopieOrientale" element={<CircuitViewer circuitName="ethiopieOrientale" />} />
              <Route path="nord" element={<CircuitViewer circuitName="nord" />} />
              <Route path="addis-abeba" element={<CircuitViewer circuitName="addisAbeba" />} />
              <Route path="randonnee" element={<CircuitViewer circuitName="randonnee" />} />
            </Route>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/circuits/aventure/gheralta" element={<TourViewer tourName='gheralta' />} />
            <Route path="/circuits/aventure/vallee-omo" element={<TourViewer tourName='omo' />} />
            <Route path="/circuits/sud/omo14days" element={<TourViewer tourName='omoValley14Days' />} />
            <Route path="/circuits/sud/omo7days" element={<TourViewer tourName='omoValley7Days' />} />
            <Route path="/circuits/oiseaux/birdwatching17Days" element={<TourViewer tourName='birdwatching17Days' />} />
            <Route path="/circuits/ethiopieOrientale/hararDireDawa" element={<TourViewer tourName='hararDireDawa' />} />
            <Route path="/circuits/nord/ancientChurchesTigray8Days" element={<TourViewer tourName='ancientChurchesTigray8Days' />} />
            <Route path="/circuits/nord/northernEthiopia13Days" element={<TourViewer tourName='northernEthiopia13Days' />} />
            <Route path="/circuits/nord/historiqueNord" element={<TourViewer tourName='historiqueNord' />} />
            <Route path="/circuits/randonnee/baleMountainsTrekking9Days" element={<TourViewer tourName='baleMountainsTrekking9Days' />} />
            <Route path="/circuits/randonnee/simienMountainsTrekking8Days" element={<TourViewer tourName='simienMountainsTrekking8Days' />} />
            <Route path="/circuits/addis-abeba/addisAbebaCityTour1Day" element={<TourViewer tourName='addisAbebaCityTour1Day' />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;