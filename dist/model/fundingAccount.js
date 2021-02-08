"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundingAccount = void 0;
class FundingAccount {
    static getAttributeTypeMap() {
        return FundingAccount.attributeTypeMap;
    }
}
exports.FundingAccount = FundingAccount;
FundingAccount.discriminator = undefined;
FundingAccount.attributeTypeMap = [
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'available',
        baseName: 'available',
        type: 'string',
    },
    {
        name: 'locked',
        baseName: 'locked',
        type: 'string',
    },
    {
        name: 'lent',
        baseName: 'lent',
        type: 'string',
    },
    {
        name: 'totalLent',
        baseName: 'total_lent',
        type: 'string',
    },
];
