"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotAccount = void 0;
class SpotAccount {
    static getAttributeTypeMap() {
        return SpotAccount.attributeTypeMap;
    }
}
exports.SpotAccount = SpotAccount;
SpotAccount.discriminator = undefined;
SpotAccount.attributeTypeMap = [
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
];
