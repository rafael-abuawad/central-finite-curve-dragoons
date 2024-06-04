import pytest


@pytest.fixture(scope="function")
def deployer(accounts):
    return accounts[0]


@pytest.fixture(scope="function")
def users(accounts):
    return accounts[1:]


@pytest.fixture(scope="function")
def cfcd_nft(project, deployer):
    name = "Central Finite Curve Dragoons"
    symbol = "CFCD"
    max_supply = 128
    max_balance = 2
    base_uri = "ipfs://QmT8XPukaF3pXCuFSeGjg7wuH1TXLvHFnNsYuMSudj9shn/"
    name_eip712 = "Central Finite Curve Dragoons"
    version_eip712 = "0.0.1"
    return project.ERC721.deploy(
        name,
        symbol,
        max_supply,
        max_balance,
        base_uri,
        name_eip712,
        version_eip712,
        sender=deployer,
    )


@pytest.fixture(scope="session")
def on_foundry(chain):
    chains = [
        1,  # Ethereum mainnet-fork
        31337,  # Anvil
    ]
    return chain.chain_id in chains
