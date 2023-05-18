import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  DepositMade,
  DepositWithdrawn,
  LongChomped,
  LongClosed,
  LongLiquidatedBankruptcy,
  LongOpened,
  RepoChomped,
  RepoOpened,
  RepoRedeemed
} from "../generated/longshipMatic/longshipMatic"

export function createDepositMadeEvent(
  underlying_added: BigInt,
  tokens_minted: BigInt,
  depositor: Address
): DepositMade {
  let depositMadeEvent = changetype<DepositMade>(newMockEvent())

  depositMadeEvent.parameters = new Array()

  depositMadeEvent.parameters.push(
    new ethereum.EventParam(
      "underlying_added",
      ethereum.Value.fromUnsignedBigInt(underlying_added)
    )
  )
  depositMadeEvent.parameters.push(
    new ethereum.EventParam(
      "tokens_minted",
      ethereum.Value.fromUnsignedBigInt(tokens_minted)
    )
  )
  depositMadeEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )

  return depositMadeEvent
}

export function createDepositWithdrawnEvent(
  underlying_withdrawn: BigInt,
  tokens_burned: BigInt,
  depositor: Address
): DepositWithdrawn {
  let depositWithdrawnEvent = changetype<DepositWithdrawn>(newMockEvent())

  depositWithdrawnEvent.parameters = new Array()

  depositWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "underlying_withdrawn",
      ethereum.Value.fromUnsignedBigInt(underlying_withdrawn)
    )
  )
  depositWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "tokens_burned",
      ethereum.Value.fromUnsignedBigInt(tokens_burned)
    )
  )
  depositWithdrawnEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )

  return depositWithdrawnEvent
}

export function createLongChompedEvent(
  nonce: BigInt,
  roundId: BigInt,
  chomper: Address
): LongChomped {
  let longChompedEvent = changetype<LongChomped>(newMockEvent())

  longChompedEvent.parameters = new Array()

  longChompedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  longChompedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  longChompedEvent.parameters.push(
    new ethereum.EventParam("chomper", ethereum.Value.fromAddress(chomper))
  )

  return longChompedEvent
}

export function createLongClosedEvent(nonce: BigInt): LongClosed {
  let longClosedEvent = changetype<LongClosed>(newMockEvent())

  longClosedEvent.parameters = new Array()

  longClosedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return longClosedEvent
}

export function createLongLiquidatedBankruptcyEvent(
  nonce: BigInt,
  liquidator: Address
): LongLiquidatedBankruptcy {
  let longLiquidatedBankruptcyEvent = changetype<LongLiquidatedBankruptcy>(
    newMockEvent()
  )

  longLiquidatedBankruptcyEvent.parameters = new Array()

  longLiquidatedBankruptcyEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  longLiquidatedBankruptcyEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )

  return longLiquidatedBankruptcyEvent
}

export function createLongOpenedEvent(
  nonce: BigInt,
  liq_price: BigInt,
  leverage: BigInt,
  collateral: BigInt,
  expiry: BigInt,
  holder: Address
): LongOpened {
  let longOpenedEvent = changetype<LongOpened>(newMockEvent())

  longOpenedEvent.parameters = new Array()

  longOpenedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  longOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "liq_price",
      ethereum.Value.fromUnsignedBigInt(liq_price)
    )
  )
  longOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "leverage",
      ethereum.Value.fromUnsignedBigInt(leverage)
    )
  )
  longOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromUnsignedBigInt(collateral)
    )
  )
  longOpenedEvent.parameters.push(
    new ethereum.EventParam("expiry", ethereum.Value.fromUnsignedBigInt(expiry))
  )
  longOpenedEvent.parameters.push(
    new ethereum.EventParam("holder", ethereum.Value.fromAddress(holder))
  )

  return longOpenedEvent
}

export function createRepoChompedEvent(
  nonce: BigInt,
  chomper: Address
): RepoChomped {
  let repoChompedEvent = changetype<RepoChomped>(newMockEvent())

  repoChompedEvent.parameters = new Array()

  repoChompedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  repoChompedEvent.parameters.push(
    new ethereum.EventParam("chomper", ethereum.Value.fromAddress(chomper))
  )

  return repoChompedEvent
}

export function createRepoOpenedEvent(
  nonce: BigInt,
  repo_amount: BigInt,
  underlying_quantity: BigInt,
  expiry: BigInt,
  bankruptcy_payout: BigInt,
  holder: Address
): RepoOpened {
  let repoOpenedEvent = changetype<RepoOpened>(newMockEvent())

  repoOpenedEvent.parameters = new Array()

  repoOpenedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  repoOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "repo_amount",
      ethereum.Value.fromUnsignedBigInt(repo_amount)
    )
  )
  repoOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "underlying_quantity",
      ethereum.Value.fromUnsignedBigInt(underlying_quantity)
    )
  )
  repoOpenedEvent.parameters.push(
    new ethereum.EventParam("expiry", ethereum.Value.fromUnsignedBigInt(expiry))
  )
  repoOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "bankruptcy_payout",
      ethereum.Value.fromUnsignedBigInt(bankruptcy_payout)
    )
  )
  repoOpenedEvent.parameters.push(
    new ethereum.EventParam("holder", ethereum.Value.fromAddress(holder))
  )

  return repoOpenedEvent
}

export function createRepoRedeemedEvent(nonce: BigInt): RepoRedeemed {
  let repoRedeemedEvent = changetype<RepoRedeemed>(newMockEvent())

  repoRedeemedEvent.parameters = new Array()

  repoRedeemedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return repoRedeemedEvent
}
