"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountBalance = void 0;
class SubAccountBalance {
    static getAttributeTypeMap() {
        return SubAccountBalance.attributeTypeMap;
    }
}
exports.SubAccountBalance = SubAccountBalance;
SubAccountBalance.discriminator = undefined;
SubAccountBalance.attributeTypeMap = [
    {
        name: 'uid',
        baseName: 'uid',
        type: 'string',
    },
    {
        name: 'available',
        baseName: 'available',
        type: '{ [key: string]: string; }',
    },
];
