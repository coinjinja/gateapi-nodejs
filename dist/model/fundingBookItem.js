"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundingBookItem = void 0;
class FundingBookItem {
    static getAttributeTypeMap() {
        return FundingBookItem.attributeTypeMap;
    }
}
exports.FundingBookItem = FundingBookItem;
FundingBookItem.discriminator = undefined;
FundingBookItem.attributeTypeMap = [
    {
        name: 'rate',
        baseName: 'rate',
        type: 'string',
    },
    {
        name: 'amount',
        baseName: 'amount',
        type: 'string',
    },
    {
        name: 'days',
        baseName: 'days',
        type: 'number',
    },
];
