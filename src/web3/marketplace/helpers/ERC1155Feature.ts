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
      "name": "ERC1155TokenMismatch",
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
      "name": "ERC1155OrderCancelled",
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
          "name": "erc20FillAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "contract IERC1155Token",
          "name": "erc1155Token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "erc1155TokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "erc1155FillAmount",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "matcher",
          "type": "address"
        }
      ],
      "name": "ERC1155OrderFilled",
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
          "internalType": "contract IERC1155Token",
          "name": "erc1155Token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "erc1155TokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "erc1155TokenAmount",
          "type": "uint128"
        }
      ],
      "name": "ERC1155OrderPreSigned",
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
              "internalType": "contract IERC1155Token",
              "name": "erc1155Token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "erc1155TokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "erc1155TokenAmount",
              "type": "uint128"
            }
          ],
          "internalType": "struct LibNFTOrder.ERC1155Order",
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
          "components": [
            {
              "internalType": "uint128",
              "name": "buyAmount",
              "type": "uint128"
            },
            {
              "internalType": "bytes",
              "name": "takerCallbackData",
              "type": "bytes"
            }
          ],
          "internalType": "struct NFTOrders.BuyParams",
          "name": "params",
          "type": "tuple"
        }
      ],
      "name": "_buyERC1155",
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
              "internalType": "contract IERC1155Token",
              "name": "erc1155Token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "erc1155TokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "erc1155TokenAmount",
              "type": "uint128"
            }
          ],
          "internalType": "struct LibNFTOrder.ERC1155Order[]",
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
          "internalType": "uint128[]",
          "name": "erc1155FillAmounts",
          "type": "uint128[]"
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
      "name": "batchBuyERC1155s",
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
      "name": "batchCancelERC1155Orders",
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
              "internalType": "contract IERC1155Token",
              "name": "erc1155Token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "erc1155TokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "erc1155TokenAmount",
              "type": "uint128"
            }
          ],
          "internalType": "struct LibNFTOrder.ERC1155Order",
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
          "internalType": "uint128",
          "name": "erc1155BuyAmount",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "callbackData",
          "type": "bytes"
        }
      ],
      "name": "buyERC1155",
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
      "name": "cancelERC1155Order",
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
              "internalType": "contract IERC1155Token",
              "name": "erc1155Token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "erc1155TokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "erc1155TokenAmount",
              "type": "uint128"
            }
          ],
          "internalType": "struct LibNFTOrder.ERC1155Order",
          "name": "order",
          "type": "tuple"
        }
      ],
      "name": "getERC1155OrderHash",
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
              "internalType": "contract IERC1155Token",
              "name": "erc1155Token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "erc1155TokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "erc1155TokenAmount",
              "type": "uint128"
            }
          ],
          "internalType": "struct LibNFTOrder.ERC1155Order",
          "name": "order",
          "type": "tuple"
        }
      ],
      "name": "getERC1155OrderInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "orderHash",
              "type": "bytes32"
            },
            {
              "internalType": "enum LibNFTOrder.OrderStatus",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "uint128",
              "name": "orderAmount",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "remainingAmount",
              "type": "uint128"
            }
          ],
          "internalType": "struct LibNFTOrder.OrderInfo",
          "name": "orderInfo",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
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
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
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
              "internalType": "contract IERC1155Token",
              "name": "erc1155Token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "erc1155TokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "erc1155TokenAmount",
              "type": "uint128"
            }
          ],
          "internalType": "struct LibNFTOrder.ERC1155Order",
          "name": "order",
          "type": "tuple"
        }
      ],
      "name": "preSignERC1155Order",
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
              "internalType": "contract IERC1155Token",
              "name": "erc1155Token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "erc1155TokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "erc1155TokenAmount",
              "type": "uint128"
            }
          ],
          "internalType": "struct LibNFTOrder.ERC1155Order",
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
          "name": "erc1155TokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "erc1155SellAmount",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "callbackData",
          "type": "bytes"
        }
      ],
      "name": "sellERC1155",
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
              "internalType": "contract IERC1155Token",
              "name": "erc1155Token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "erc1155TokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "erc1155TokenAmount",
              "type": "uint128"
            }
          ],
          "internalType": "struct LibNFTOrder.ERC1155Order",
          "name": "order",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "erc1155TokenId",
          "type": "uint256"
        }
      ],
      "name": "validateERC1155OrderProperties",
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
              "internalType": "contract IERC1155Token",
              "name": "erc1155Token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "erc1155TokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "erc1155TokenAmount",
              "type": "uint128"
            }
          ],
          "internalType": "struct LibNFTOrder.ERC1155Order",
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
      "name": "validateERC1155OrderSignature",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    }
  ] as const 
export default abi