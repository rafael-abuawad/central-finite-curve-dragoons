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
    max_supply = 100
    base_uri = "www.samplemetadata.com"
    name_eip712 = "Central Finite Curve Dragoons"
    version_eip712 = "0.0.1"
    return project.ERC721.deploy(
        name, symbol, max_supply, base_uri, name_eip712, version_eip712, sender=deployer
    )
