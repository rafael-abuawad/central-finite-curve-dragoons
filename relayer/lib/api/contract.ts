// Central Finite Curve Dragoons Contract Bytecode.
// https://etherscan.io/address/#code
const address = process.env.CFCD_CONTRACT_ADDRESS as `0x${string}`;

export const cfcdContract = {
  address,
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          name: "token_id",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          name: "token_id",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "token_id",
          type: "uint256",
        },
      ],
      name: "MetadataUpdate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "from_token_id",
          type: "uint256",
        },
        {
          indexed: false,
          name: "token_id",
          type: "uint256",
        },
      ],
      name: "BatchMetadataUpdate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [],
      name: "EIP712DomainChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "previous_owner",
          type: "address",
        },
        {
          indexed: true,
          name: "new_owner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "minter",
          type: "address",
        },
        {
          indexed: false,
          name: "status",
          type: "bool",
        },
      ],
      name: "RoleMinterChanged",
      type: "event",
    },
    {
      inputs: [
        {
          name: "name_",
          type: "string",
        },
        {
          name: "symbol_",
          type: "string",
        },
        {
          name: "max_supply_",
          type: "uint256",
        },
        {
          name: "base_uri_",
          type: "string",
        },
        {
          name: "name_eip712_",
          type: "string",
        },
        {
          name: "version_eip712_",
          type: "string",
        },
      ],
      stateMutability: "payable",
      type: "constructor",
    },
    {
      inputs: [
        {
          name: "interface_id",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "token_id",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "to",
          type: "address",
        },
        {
          name: "token_id",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          name: "token_id",
          type: "uint256",
        },
      ],
      name: "getApproved",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "operator",
          type: "address",
        },
        {
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          name: "owner",
          type: "address",
        },
        {
          name: "to",
          type: "address",
        },
        {
          name: "token_id",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          name: "owner",
          type: "address",
        },
        {
          name: "to",
          type: "address",
        },
        {
          name: "token_id",
          type: "uint256",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          name: "owner",
          type: "address",
        },
        {
          name: "to",
          type: "address",
        },
        {
          name: "token_id",
          type: "uint256",
        },
        {
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          name: "token_id",
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "index",
          type: "uint256",
        },
      ],
      name: "tokenByIndex",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "owner",
          type: "address",
        },
        {
          name: "index",
          type: "uint256",
        },
      ],
      name: "tokenOfOwnerByIndex",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "token_id",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          name: "owner",
          type: "address",
        },
        {
          name: "uri",
          type: "string",
        },
      ],
      name: "safe_mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          name: "minter",
          type: "address",
        },
        {
          name: "status",
          type: "bool",
        },
      ],
      name: "set_minter",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          name: "spender",
          type: "address",
        },
        {
          name: "token_id",
          type: "uint256",
        },
        {
          name: "deadline",
          type: "uint256",
        },
        {
          name: "v",
          type: "uint8",
        },
        {
          name: "r",
          type: "bytes32",
        },
        {
          name: "s",
          type: "bytes32",
        },
      ],
      name: "permit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "DOMAIN_SEPARATOR",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "eip712Domain",
      outputs: [
        {
          name: "",
          type: "bytes1",
        },
        {
          name: "",
          type: "string",
        },
        {
          name: "",
          type: "string",
        },
        {
          name: "",
          type: "uint256",
        },
        {
          name: "",
          type: "address",
        },
        {
          name: "",
          type: "bytes32",
        },
        {
          name: "",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "new_owner",
          type: "address",
        },
      ],
      name: "transfer_ownership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounce_ownership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "max_supply",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "arg0",
          type: "address",
        },
        {
          name: "arg1",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "arg0",
          type: "address",
        },
      ],
      name: "is_minter",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "arg0",
          type: "uint256",
        },
      ],
      name: "nonces",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
} as const;
