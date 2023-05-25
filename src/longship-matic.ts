import {
  DepositMade as DepositMadeEvent,
  DepositWithdrawn as DepositWithdrawnEvent,
  LongChomped as LongChompedEvent,
  LongClosed as LongClosedEvent,
  LongLiquidatedBankruptcy as LongLiquidatedBankruptcyEvent,
  LongOpened as LongOpenedEvent,
  RepoChomped as RepoChompedEvent,
  RepoOpened as RepoOpenedEvent,
  RepoRedeemed as RepoRedeemedEvent
} from "../generated/longshipMatic/longshipMatic"
import {
  DepositMade,
  DepositWithdrawn,
  LongChomped,
  LongClosed,
  LongLiquidatedBankruptcy,
  LongOpened,
  Long,
  RepoChomped,
  RepoOpened,
  RepoRedeemed
} from "../generated/schema"

export function handleDepositMade(event: DepositMadeEvent): void {
  let entity = new DepositMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.underlying_added = event.params.underlying_added
  entity.tokens_minted = event.params.tokens_minted
  entity.depositor = event.params.depositor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositWithdrawn(event: DepositWithdrawnEvent): void {
  let entity = new DepositWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.underlying_withdrawn = event.params.underlying_withdrawn
  entity.tokens_burned = event.params.tokens_burned
  entity.depositor = event.params.depositor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLongChomped(event: LongChompedEvent): void {
  let entity = new LongChomped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nonce = event.params.nonce
  entity.roundId = event.params.roundId
  entity.chomper = event.params.chomper

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLongClosed(event: LongClosedEvent): void {
  let entity = new LongClosed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let id = event.params.nonce.toHex()
  let entity3 = Long.load(id)
  if (entity3 != null) {
    entity3.closed = true
    entity3.save()
  }
}


export function handleLongLiquidatedBankruptcy(
  event: LongLiquidatedBankruptcyEvent
): void {
  let entity = new LongLiquidatedBankruptcy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nonce = event.params.nonce
  entity.liquidator = event.params.liquidator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLongOpened(event: LongOpenedEvent): void {
  let entity = new LongOpened(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nonce = event.params.nonce
  entity.liq_price = event.params.liq_price
  entity.leverage = event.params.leverage
  entity.collateral = event.params.collateral
  entity.expiry = event.params.expiry
  entity.holder = event.params.holder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let entity2 = new Long(
    event.params.nonce.toHex()
  )
  entity2.nonce = event.params.nonce
  entity2.expiry = event.params.expiry
  entity2.liq_price = event.params.liq_price
  entity2.closed = false
  entity2.save()
}

export function handleRepoChomped(event: RepoChompedEvent): void {
  let entity = new RepoChomped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nonce = event.params.nonce
  entity.chomper = event.params.chomper

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRepoOpened(event: RepoOpenedEvent): void {
  let entity = new RepoOpened(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nonce = event.params.nonce
  entity.repo_amount = event.params.repo_amount
  entity.underlying_quantity = event.params.underlying_quantity
  entity.expiry = event.params.expiry
  entity.bankruptcy_payout = event.params.bankruptcy_payout
  entity.holder = event.params.holder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRepoRedeemed(event: RepoRedeemedEvent): void {
  let entity = new RepoRedeemed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
