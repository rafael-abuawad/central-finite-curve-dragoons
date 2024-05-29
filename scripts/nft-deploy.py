from ape import project, accounts
from ape.cli import NetworkBoundCommand, network_option
import click

NAME = "Central Finite Curve Dragoons"
SYMBOL = "CFCD"
MAX_SUPPLY = 10000
BASE_URI = "www.samplemetadata.com"
NAME_EIP712 = "Central Finite Curve Dragoons"
VERSION_EIP712 = "0.0.1"


@click.group()
def cli():
    """
    Script for ther production deployment of the
    Central Finite Curve Dragoons NFT collection
    """


@cli.command(cls=NetworkBoundCommand,)
@network_option()
def deploy(network):
    if ":foundry" in network:
        account = accounts.test_accounts[0]
        account.balance = "1000 ETH"

    elif ":local:" in network:
        account = accounts.test_accounts[0]

    elif ":mainnet:" in network:
        account = accounts.load("deployer")
        account.set_autosign(True)

    # deploying NFT
    project.ERC721.deploy(
        NAME, SYMBOL, MAX_SUPPLY, BASE_URI, NAME_EIP712, VERSION_EIP712, sender=account
    )
