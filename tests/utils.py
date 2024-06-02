from typing import Tuple, List


def split_addresses_in_half(addresses, extra_address=None) -> Tuple[List, List]:
    middle = len(addresses) // 2
    first_half = addresses[:middle]
    second_half = addresses[middle:]

    if len(first_half) < len(second_half):
        first_half.append(extra_address)
    else:
        second_half.append(extra_address)

    return (first_half, second_half)


def find_account_by_address(accounts, address):
    for account in accounts:
        if account.address == address:
            return account
    return None
