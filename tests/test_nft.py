import ape


def test_cfcd_nft_name(cfcd_nft):
    assert cfcd_nft.name() == "Central Finite Curve Dragoons"


def test_cfcd_nft_symbol(cfcd_nft):
    assert cfcd_nft.symbol() == "CFCD"


def test_cfcd_nft_max_supply(cfcd_nft):
    assert cfcd_nft.max_supply() == 100


def test_cfcd_nft_inital_total_supply(cfcd_nft):
    assert cfcd_nft.totalSupply() == 0


def test_only_deployer_can_mint(cfcd_nft, deployer, users):
    user = users[0]
    uri = ""
    cfcd_nft.safe_mint(user, uri, sender=deployer)

    expected_balance = 1
    assert cfcd_nft.balanceOf(user) == expected_balance

    id = 0
    assert cfcd_nft.ownerOf(id) == user


def test_non_minters_cant_mint(cfcd_nft, users):
    uri = ""
    for user in users:
        with ape.reverts("AccessControl: access is denied"):
            cfcd_nft.safe_mint(user, uri, sender=user)


def test_can_mint_all_the_nfts(cfcd_nft, deployer, users):
    uri = ""
    max_supply = cfcd_nft.max_supply()

    for i in range(max_supply):
        user = users[i % len(users)]
        cfcd_nft.safe_mint(user, uri, sender=deployer)


def test_cant_mint_more_than_max_supply(cfcd_nft, deployer, users):
    uri = ""
    max_supply = cfcd_nft.max_supply()
    for i in range(max_supply):
        user = users[i % len(users)]
        cfcd_nft.safe_mint(user, uri, sender=deployer)

    with ape.reverts("ERC721: maximum supply of tokens reached"):
        user = users[0]
        cfcd_nft.safe_mint(user, uri, sender=deployer)


def test_only_deployer_is_minter(cfcd_nft, deployer, users):
    assert cfcd_nft.is_minter(deployer)
    for user in users:
        assert not cfcd_nft.is_minter(user)
