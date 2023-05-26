import { BigNumber } from '@ethersproject/bignumber'

export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'
export const PERMIT2_ADDRESS_BY_CHAINS = {
    1: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    3: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    4: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    5: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    42: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    56: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    97: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    128: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    137: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    250: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    256: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    4002: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    80001: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    280: '0x7dBaee32F615b50B318A8650eE23214768d25b34',
}

export const MaxUint48 = BigNumber.from('0xffffffffffff')
export const MaxUint160 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffff')
export const MaxUint256 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

// alias max types for their usages
// allowance transfer types
export const MaxAllowanceTransferAmount = MaxUint160
export const MaxAllowanceExpiration = MaxUint48
export const MaxOrderedNonce = MaxUint48

// signature transfer types
export const MaxSignatureTransferAmount = MaxUint256
export const MaxUnorderedNonce = MaxUint256
export const MaxSigDeadline = MaxUint256

export const InstantExpiration: BigNumber = BigNumber.from(0)
