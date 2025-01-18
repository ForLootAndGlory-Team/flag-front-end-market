import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import Footer from '../components/footer';
import Dashboard from '../pages/dashboard';
import Listings from '../pages/listings';
import NavBar from '../components/nav/navbar';
import NFTDetails from '../components/web3/nft-details';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listings/:tokenType/:nftAddress/:tokenId?" element={<Listings />} />
        <Route path="/dashboard/:contractAddress/:tokenId?" element={<NFTDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer>
      </Footer>
    </Router>
  );
};

export default AppRouter;