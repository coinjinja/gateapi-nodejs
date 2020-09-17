"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositAddress = void 0;
class DepositAddress {
    static getAttributeTypeMap() {
        return DepositAddress.attributeTypeMap;
    }
}
exports.DepositAddress = DepositAddress;
DepositAddress.discriminator = undefined;
DepositAddress.attributeTypeMap = [
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'address',
        baseName: 'address',
        type: 'string',
    },
];
