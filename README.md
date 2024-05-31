# **Central Finite Curve Dragoons: A Free NFT Minting dApp**

Welcome to Central Finite Curve Dragoons, a comprehensive NFT project built using Vyper, Apeworx, React, NextJS, and Hono. This project demonstrates how businesses can seamlessly integrate NFTs into their products or applications without requiring users to hold tokens or pay fees.

## **Overview**

Our application consists of three main components:

### 1. Smart Contract

* Written in Vyper, highlighting its benefits compared to Solidity
* Includes comprehensive tests and a fully developed deployment script leveraging Ape's features
* Modified ERC721 contract with `maxSupply` and `maxBalance` settings, allowing for individual wallet balance limits

### 2. Relayer

* Built using Hono, hosted as a NextJS API endpoint
* Chosen for its simplicity and ease of integration with Vite
* Features a simple `claim` endpoint for minting NFTs to users (can be expanded for more complex use cases)

### 3. Client

* Client-side application built with React, NextJS, and Wagmi
* Intuitive UI for easy user interaction
* Supports two primary operations:
	+ Connecting to the application
	+ Claiming an NFT
* Frontend enforces `maxBalance` limits, preventing users from minting additional NFTs once the limit is reached

## **Deployed smart contract**

I decided to deploy the smart contract on Fantom, but if you want to can deploy it to any chain you want. Just remember to change the `nft-deploy.py` script.

**License**

This project is licensed under the AGPL-3.0 license. See [LICENSE](LICENSE) for details.

**Purpose**

The goal of this project is to demonstrate how businesses can seamlessly integrate NFTs into their products and applications without burdening end-users with token purchases or fees. By making NFT minting completely free, we hope to inspire new use cases and applications for NFT technology.