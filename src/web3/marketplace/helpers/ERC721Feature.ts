const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "proxyMultiAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "BytesErrors",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token1",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "token2",
        "type": "address"
      }
    ],
    "name": "ERC20TokenMismatch",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token1",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "token2",
        "type": "address"
      }
    ],
    "name": "ERC721TokenMismatch",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint128",
        "name": "remainingOrderAmount",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "fillAmount",
        "type": "uint128"
      }
    ],
    "name": "ExceedsRemainingOrderAmount",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "InvalidSigner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sellOrderAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "buyOrderAmount",
        "type": "uint256"
      }
    ],
    "name": "NegativeSpread",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "taker",
        "type": "address"
      }
    ],
    "name": "OnlyTaker",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "orderStatus",
        "type": "uint8"
      }
    ],
    "name": "OrderNotFillable",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sellOrderFees",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "spread",
        "type": "uint256"
      }
    ],
    "name": "SellOrderFeesExceedSpread",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "enum LibSignatureRichErrors.SignatureValidationErrorCodes",
        "name": "code",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "hash",
        "type": "bytes32"
      }
    ],
    "name": "SignatureValidationStandart",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      }
    ],
    "name": "ERC721OrderCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "enum LibNFTOrder.TradeDirection",
        "name": "direction",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "taker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "contract IERC20Token",
        "name": "erc20Token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "erc20TokenAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "contract IERC721Token",
        "name": "erc721Token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "erc721TokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "matcher",
        "type": "address"
      }
    ],
    "name": "ERC721OrderFilled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "enum LibNFTOrder.TradeDirection",
        "name": "direction",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "taker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "expiry",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "contract IERC20Token",
        "name": "erc20Token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "erc20TokenAmount",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "feeData",
            "type": "bytes"
          }
        ],
        "indexed": false,
        "internalType": "struct LibNFTOrder.Fee[]",
        "name": "fees",
        "type": "tuple[]"
      },
      {
        "indexed": false,
        "internalType": "contract IERC721Token",
        "name": "erc721Token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "erc721TokenId",
        "type": "uint256"
      }
    ],
    "name": "ERC721OrderPreSigned",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "EIP712_DOMAIN_SEPARATOR",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "FEATURE_NAME",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "FEATURE_VERSION",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order",
        "name": "sellOrder",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "enum LibSignature.SignatureType",
            "name": "signatureType",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct LibSignature.Signature",
        "name": "signature",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "takerCallbackData",
        "type": "bytes"
      }
    ],
    "name": "_buyERC721",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order[]",
        "name": "sellOrders",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "enum LibSignature.SignatureType",
            "name": "signatureType",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct LibSignature.Signature[]",
        "name": "signatures",
        "type": "tuple[]"
      },
      {
        "internalType": "bytes[]",
        "name": "callbackData",
        "type": "bytes[]"
      },
      {
        "internalType": "bool",
        "name": "revertIfIncomplete",
        "type": "bool"
      }
    ],
    "name": "batchBuyERC721s",
    "outputs": [
      {
        "internalType": "bool[]",
        "name": "successes",
        "type": "bool[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "orderNonces",
        "type": "uint256[]"
      }
    ],
    "name": "batchCancelERC721Orders",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order[]",
        "name": "sellOrders",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order[]",
        "name": "buyOrders",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "enum LibSignature.SignatureType",
            "name": "signatureType",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct LibSignature.Signature[]",
        "name": "sellOrderSignatures",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "enum LibSignature.SignatureType",
            "name": "signatureType",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct LibSignature.Signature[]",
        "name": "buyOrderSignatures",
        "type": "tuple[]"
      }
    ],
    "name": "batchMatchERC721Orders",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "profits",
        "type": "uint256[]"
      },
      {
        "internalType": "bool[]",
        "name": "successes",
        "type": "bool[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order",
        "name": "sellOrder",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "enum LibSignature.SignatureType",
            "name": "signatureType",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct LibSignature.Signature",
        "name": "signature",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "callbackData",
        "type": "bytes"
      }
    ],
    "name": "buyERC721",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "orderNonce",
        "type": "uint256"
      }
    ],
    "name": "cancelERC721Order",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order",
        "name": "order",
        "type": "tuple"
      }
    ],
    "name": "getERC721OrderHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "orderHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order",
        "name": "order",
        "type": "tuple"
      }
    ],
    "name": "getERC721OrderStatus",
    "outputs": [
      {
        "internalType": "enum LibNFTOrder.OrderStatus",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "maker",
        "type": "address"
      },
      {
        "internalType": "uint248",
        "name": "nonceRange",
        "type": "uint248"
      }
    ],
    "name": "getERC721OrderStatusBitVector",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "bitVector",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order",
        "name": "sellOrder",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order",
        "name": "buyOrder",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "enum LibSignature.SignatureType",
            "name": "signatureType",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct LibSignature.Signature",
        "name": "sellOrderSignature",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "enum LibSignature.SignatureType",
            "name": "signatureType",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct LibSignature.Signature",
        "name": "buyOrderSignature",
        "type": "tuple"
      }
    ],
    "name": "matchERC721Orders",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "profit",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "migrate",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "success",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "onERC721Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "success",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order",
        "name": "order",
        "type": "tuple"
      }
    ],
    "name": "preSignERC721Order",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order",
        "name": "buyOrder",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "enum LibSignature.SignatureType",
            "name": "signatureType",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct LibSignature.Signature",
        "name": "signature",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "erc721TokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "callbackData",
        "type": "bytes"
      }
    ],
    "name": "sellERC721",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order",
        "name": "order",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "erc721TokenId",
        "type": "uint256"
      }
    ],
    "name": "validateERC721OrderProperties",
    "outputs": [],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum LibNFTOrder.TradeDirection",
            "name": "direction",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "maker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "taker",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "contract IERC20Token",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc20TokenAmount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
              }
            ],
            "internalType": "struct LibNFTOrder.Fee[]",
            "name": "fees",
            "type": "tuple[]"
          },
          {
            "internalType": "contract IERC721Token",
            "name": "erc721Token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          }
        ],
        "internalType": "struct LibNFTOrder.ERC721Order",
        "name": "order",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "enum LibSignature.SignatureType",
            "name": "signatureType",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct LibSignature.Signature",
        "name": "signature",
        "type": "tuple"
      }
    ],
    "name": "validateERC721OrderSignature",
    "outputs": [],
    "stateMutability": "view",
    "type": "function"
  }
] as const 
export default abi