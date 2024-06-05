import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Transfer } from "../generated/schema"
import { Transfer as TransferEvent } from "../generated/Modern and Gas-Efficient ERC-721 + EIP-4494 Implementation/Modern and Gas-Efficient ERC-721 + EIP-4494 Implementation"
import { handleTransfer } from "../src/modern-and-gas-efficient-erc-721-eip-4494-implementation"
import { createTransferEvent } from "./modern-and-gas-efficient-erc-721-eip-4494-implementation-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let to = Address.fromString("0x0000000000000000000000000000000000000001")
    let token_id = BigInt.fromI32(234)
    let newTransferEvent = createTransferEvent(owner, to, token_id)
    handleTransfer(newTransferEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Transfer created and stored", () => {
    assert.entityCount("Transfer", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Transfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Transfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Transfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token_id",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
