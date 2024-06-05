import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer,
  Approval,
  ApprovalForAll,
  MetadataUpdate,
  BatchMetadataUpdate,
  EIP712DomainChanged,
  OwnershipTransferred,
  RoleMinterChanged
} from "../generated/Modern and Gas-Efficient ERC-721 + EIP-4494 Implementation/Modern and Gas-Efficient ERC-721 + EIP-4494 Implementation"

export function createTransferEvent(
  owner: Address,
  to: Address,
  token_id: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "token_id",
      ethereum.Value.fromUnsignedBigInt(token_id)
    )
  )

  return transferEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  token_id: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "token_id",
      ethereum.Value.fromUnsignedBigInt(token_id)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createMetadataUpdateEvent(token_id: BigInt): MetadataUpdate {
  let metadataUpdateEvent = changetype<MetadataUpdate>(newMockEvent())

  metadataUpdateEvent.parameters = new Array()

  metadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "token_id",
      ethereum.Value.fromUnsignedBigInt(token_id)
    )
  )

  return metadataUpdateEvent
}

export function createBatchMetadataUpdateEvent(
  from_token_id: BigInt,
  token_id: BigInt
): BatchMetadataUpdate {
  let batchMetadataUpdateEvent = changetype<BatchMetadataUpdate>(newMockEvent())

  batchMetadataUpdateEvent.parameters = new Array()

  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "from_token_id",
      ethereum.Value.fromUnsignedBigInt(from_token_id)
    )
  )
  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "token_id",
      ethereum.Value.fromUnsignedBigInt(token_id)
    )
  )

  return batchMetadataUpdateEvent
}

export function createEIP712DomainChangedEvent(): EIP712DomainChanged {
  let eip712DomainChangedEvent = changetype<EIP712DomainChanged>(newMockEvent())

  eip712DomainChangedEvent.parameters = new Array()

  return eip712DomainChangedEvent
}

export function createOwnershipTransferredEvent(
  previous_owner: Address,
  new_owner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previous_owner",
      ethereum.Value.fromAddress(previous_owner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("new_owner", ethereum.Value.fromAddress(new_owner))
  )

  return ownershipTransferredEvent
}

export function createRoleMinterChangedEvent(
  minter: Address,
  status: boolean
): RoleMinterChanged {
  let roleMinterChangedEvent = changetype<RoleMinterChanged>(newMockEvent())

  roleMinterChangedEvent.parameters = new Array()

  roleMinterChangedEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  roleMinterChangedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return roleMinterChangedEvent
}
