import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { DepositMade } from "../generated/schema"
import { DepositMade as DepositMadeEvent } from "../generated/longshipMatic/longshipMatic"
import { handleDepositMade } from "../src/longship-matic"
import { createDepositMadeEvent } from "./longship-matic-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let underlying_added = BigInt.fromI32(234)
    let tokens_minted = BigInt.fromI32(234)
    let depositor = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newDepositMadeEvent = createDepositMadeEvent(
      underlying_added,
      tokens_minted,
      depositor
    )
    handleDepositMade(newDepositMadeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DepositMade created and stored", () => {
    assert.entityCount("DepositMade", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DepositMade",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "underlying_added",
      "234"
    )
    assert.fieldEquals(
      "DepositMade",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokens_minted",
      "234"
    )
    assert.fieldEquals(
      "DepositMade",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "depositor",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
