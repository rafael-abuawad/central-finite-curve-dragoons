# **Central Finite Curve Dragoons: A Free NFT Minting dApp**

Welcome to Central Finite Curve Dragoons, a comprehensive NFT project built using Vyper, Apeworx, React, NextJS, and Hono. This project demonstrates how businesses can seamlessly integrate NFTs into their products or applications without requiring users to hold tokens or pay fees.

## Table of Contents

- [Overview](#overview)
- [Smart Contracts](#smart-contracts)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)
- [Purpose](#purpose)

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

## **Smart contracts**

I decided to deploy the smart contract on Fantom, but if you want to can deploy it to any chain you want.

## **Testing**

The testing scripts are provided in the `tests` folder, specifically in the [test_nft.py](tests/test_nft.py) file. These tests cover various functionalities, including adding and minting, minting and transfering, etc.

To run the tests locally, use the following command:

```bash
$ ape test
```

To run the tests on a Ethereum Mainnet fork, use the following command:

```bash
$ ape test --network ethereum:mainnet-fork:foundry
```

## **Deployment**

To deploy the Central Finite Curve Dragoons NFT collection, follow these steps:

1. Install all the project plugins:

   ```bash
   $ ape plugins install .
   ```

This will install all the plugins listed in the [ape-config.yaml](ape-config.yaml) file.

2. Create accounts for deployment:

   ```bash
   $ ape accounts generate <name_of_your_account>
   ```

Make sure to replace `<name_of_your_account>` in the instructions with the actual name you used for the deployment account. Additionally, customize the content based on any specific details or features of your Uviswap application.

3. Run the deployment script in [deploy.py](scripts/deploy.py) if needed.

```bash
   $ ape run nft-deploy deploy --netowork <network> 
```

Make sure to replace `<network>` in the instructions with the actual name of the network you want to deploy to. 

## **License**

This project is licensed under the AGPL-3.0 license. See [LICENSE](LICENSE) for details.

## **Purpose**

The goal of this project is to demonstrate how businesses can seamlessly integrate NFTs into their products and applications without burdening end-users with token purchases or fees. By making NFT minting completely free, we hope to inspire new use cases and applications for NFT technology.