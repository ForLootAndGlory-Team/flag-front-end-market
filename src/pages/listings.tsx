// src/pages/listings.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useNftSwap from '../hooks/nft-swap';

const Listings: React.FC = () => {
  const { nftAddress, tokenType, tokenId } = useParams<{ nftAddress: string, tokenType: string, tokenId: string }>();
  const { fetchERC721Orders, fetchERC1155Orders } = useNftSwap()

  const [listings, setListings] = useState([]);
  useEffect(() => {
    if (nftAddress) {
      if (tokenType === "ERC721") {
        fetchERC721Orders(nftAddress, 0, 100)
      }
      else if (tokenId) {
        fetchERC1155Orders(nftAddress, tokenId)
      }
    }
  }, [nftAddress,tokenType,tokenId]);

  return (
    <div>
      <h1>Listings pour l'NFT {nftAddress}</h1>
      {/* Rendez ici les listings, par exemple une liste d'éléments ou des composants Cards */}
    </div>
  );
};

export default Listings;