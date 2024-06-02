import ape
from utils import split_addresses_in_half, find_account_by_address


def test_cfcd_nft_name(cfcd_nft):
    assert cfcd_nft.name() == "Central Finite Curve Dragoons"


def test_cfcd_nft_symbol(cfcd_nft):
    assert cfcd_nft.symbol() == "CFCD"


def test_cfcd_token_uri_reverts_on_non_minted_token(cfcd_nft):
    for i in range(cfcd_nft.maxSupply()):
        with ape.reverts("ERC721: invalid token ID"):
            cfcd_nft.tokenURI(i)


def test_cfcd_nft_max_supply(cfcd_nft):
    assert cfcd_nft.maxSupply() == 128


def test_cfcd_nft_inital_total_supply(cfcd_nft):
    assert cfcd_nft.totalSupply() == 0


def test_cfcd_nft_maximum_balace(cfcd_nft):
    assert cfcd_nft.maxBalance() == 2


def test_only_deployer_can_mint(cfcd_nft, deployer, users):
    user = users[0]
    uri = ""
    cfcd_nft.safe_mint(user, uri, sender=deployer)

    expected_balance = 1
    assert cfcd_nft.balanceOf(user) == expected_balance

    id = 0
    assert cfcd_nft.ownerOf(id) == user


def test_can_mint_max_balance_of_nfts(cfcd_nft, deployer, users):
    user = users[0]
    uri = ""
    max_balance = cfcd_nft.maxBalance()

    for _ in range(max_balance):
        cfcd_nft.safe_mint(user, uri, sender=deployer)
    assert cfcd_nft.balanceOf(user) == max_balance

    for id in range(max_balance):
        assert cfcd_nft.ownerOf(id) == user


def test_cannot_hold_more_than_max_balance_nfts(cfcd_nft, deployer, users):
    user = users[0]
    uri = ""
    max_balance = cfcd_nft.maxBalance()
    max_supply = cfcd_nft.maxBalance()

    for _ in range(max_balance):
        cfcd_nft.safe_mint(user, uri, sender=deployer)

    test_mints = max_supply - max_balance - 1
    for _ in range(test_mints):
        with ape.reverts("ERC721: operation exceeds collection maximum owner balance"):
            cfcd_nft.safe_mint(user, uri, sender=deployer)


def test_non_minters_cant_mint(cfcd_nft, users):
    uri = ""
    for user in users:
        with ape.reverts("AccessControl: access is denied"):
            cfcd_nft.safe_mint(user, uri, sender=user)


def test_can_mint_all_the_nfts(cfcd_nft, deployer, users):
    uri = ""
    max_balance = cfcd_nft.maxBalance()

    for user in users:
        for _ in range(max_balance):
            cfcd_nft.safe_mint(user, uri, sender=deployer)


def test_can_mint_if_the_token_has_been_transfered(cfcd_nft, deployer, users):
    uri = ""
    max_balance = cfcd_nft.maxBalance()
    (mint_users, transfer_users) = split_addresses_in_half(
        users, extra_address=deployer
    )

    # mint for `half` the users
    for user in mint_users:
        for _ in range(max_balance):
            cfcd_nft.safe_mint(user, uri, sender=deployer)

    # test that they cannot mint more
    for user in mint_users:
        with ape.reverts("ERC721: operation exceeds collection maximum owner balance"):
            cfcd_nft.safe_mint(user, uri, sender=deployer)

    # transfering all tokens from the `mint` group to the `transfer` group
    token_id = 0
    for i in range(len(mint_users)):
        sender = mint_users[i]
        receiver = transfer_users[i]
        for _ in range(max_balance):
            cfcd_nft.safeTransferFrom(sender, receiver, token_id, b"", sender=sender)
            token_id += 1

    # making sure that all tokens have been transfered
    for i in range(len(mint_users)):
        user = mint_users[i]
        assert cfcd_nft.balanceOf(user) == 0

        user = transfer_users[i]
        assert cfcd_nft.balanceOf(user) == max_balance

    # mint users can mint again
    for user in mint_users:
        for _ in range(max_balance):
            cfcd_nft.safe_mint(user, uri, sender=deployer)

    # transfer users cannot mint more
    for user in transfer_users:
        with ape.reverts("ERC721: operation exceeds collection maximum owner balance"):
            cfcd_nft.safe_mint(user, uri, sender=deployer)


def test_can_mint_if_the_token_has_been_transfered(cfcd_nft, deployer, users):
    uri = ""
    max_balance = cfcd_nft.maxBalance()
    (mint_users, transfer_users) = split_addresses_in_half(
        users, extra_address=deployer
    )

    # mint for the mint user group
    for user in mint_users:
        for _ in range(max_balance):
            cfcd_nft.safe_mint(user, uri, sender=deployer)

    # transfering all tokens from the `mint` group to the `transfer` group
    token_id = 0
    for i in range(len(mint_users)):
        sender = mint_users[i]
        receiver = transfer_users[i]
        for _ in range(max_balance):
            cfcd_nft.safeTransferFrom(sender, receiver, token_id, b"", sender=sender)
            token_id += 1

    # re-minting for the mint user group
    for user in mint_users:
        for _ in range(max_balance):
            cfcd_nft.safe_mint(user, uri, sender=deployer)

    # all users have the max balance
    for i in range(len(mint_users)):
        user = mint_users[i]
        assert cfcd_nft.balanceOf(user) == max_balance

        user = transfer_users[i]
        assert cfcd_nft.balanceOf(user) == max_balance

    # noone can mint more
    for i in range(len(mint_users)):
        user = mint_users[i]
        with ape.reverts("ERC721: operation exceeds collection maximum owner balance"):
            cfcd_nft.safe_mint(user, uri, sender=deployer)

        user = transfer_users[i]
        with ape.reverts("ERC721: operation exceeds collection maximum owner balance"):
            cfcd_nft.safe_mint(user, uri, sender=deployer)


def test_cannot_hold_more_than_max_balance_nfts(cfcd_nft, deployer, users):
    user = users[0]
    uri = ""
    max_balance = cfcd_nft.maxBalance()
    max_supply = cfcd_nft.maxBalance()

    for _ in range(max_balance):
        cfcd_nft.safe_mint(user, uri, sender=deployer)

    test_mints = max_supply - max_balance - 1
    for _ in range(test_mints):
        with ape.reverts("ERC721: operation exceeds collection maximum owner balance"):
            cfcd_nft.safe_mint(user, uri, sender=deployer)


def test_cant_mint_more_than_max_supply(cfcd_nft, deployer, accounts):
    uri = ""
    max_supply = cfcd_nft.maxSupply()
    max_balance = cfcd_nft.maxBalance()
    test_accounts = []

    for _ in range(max_supply):
        account = accounts.generate_test_account()
        test_accounts.append(account)

    for account in test_accounts:
        cfcd_nft.safe_mint(account, uri, sender=deployer)

    amount_minted = 1
    for account in test_accounts:
        cfcd_nft.balanceOf(account) == amount_minted

    for account in test_accounts:
        with ape.reverts("ERC721: operation exceeds collection maximum supply"):
            cfcd_nft.safe_mint(account, uri, sender=deployer)


def test_only_deployer_is_minter(cfcd_nft, deployer, users):
    assert cfcd_nft.is_minter(deployer)
    for user in users:
        assert not cfcd_nft.is_minter(user)
