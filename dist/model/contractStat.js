"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractStat = void 0;
class ContractStat {
    static getAttributeTypeMap() {
        return ContractStat.attributeTypeMap;
    }
}
exports.ContractStat = ContractStat;
ContractStat.discriminator = undefined;
ContractStat.attributeTypeMap = [
    {
        name: 'time',
        baseName: 'time',
        type: 'number',
    },
    {
        name: 'lsrTaker',
        baseName: 'lsr_taker',
        type: 'number',
    },
    {
        name: 'lsrAccount',
        baseName: 'lsr_account',
        type: 'number',
    },
    {
        name: 'longLiqSize',
        baseName: 'long_liq_size',
        type: 'number',
    },
    {
        name: 'longLiqAmount',
        baseName: 'long_liq_amount',
        type: 'number',
    },
    {
        name: 'longLiqUsd',
        baseName: 'long_liq_usd',
        type: 'number',
    },
    {
        name: 'shortLiqSize',
        baseName: 'short_liq_size',
        type: 'number',
    },
    {
        name: 'shortLiqAmount',
        baseName: 'short_liq_amount',
        type: 'number',
    },
    {
        name: 'shortLiqUsd',
        baseName: 'short_liq_usd',
        type: 'number',
    },
    {
        name: 'openInterest',
        baseName: 'open_interest',
        type: 'number',
    },
    {
        name: 'openInterestUsd',
        baseName: 'open_interest_usd',
        type: 'number',
    },
    {
        name: 'topLsrAccount',
        baseName: 'top_lsr_account',
        type: 'number',
    },
    {
        name: 'topLsrSize',
        baseName: 'top_lsr_size',
        type: 'number',
    },
];
