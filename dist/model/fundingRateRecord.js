"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundingRateRecord = void 0;
class FundingRateRecord {
    static getAttributeTypeMap() {
        return FundingRateRecord.attributeTypeMap;
    }
}
exports.FundingRateRecord = FundingRateRecord;
FundingRateRecord.discriminator = undefined;
FundingRateRecord.attributeTypeMap = [
    {
        name: 't',
        baseName: 't',
        type: 'number',
    },
    {
        name: 'r',
        baseName: 'r',
        type: 'string',
    },
];
