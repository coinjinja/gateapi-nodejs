"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuranceRecord = void 0;
class InsuranceRecord {
    static getAttributeTypeMap() {
        return InsuranceRecord.attributeTypeMap;
    }
}
exports.InsuranceRecord = InsuranceRecord;
InsuranceRecord.discriminator = undefined;
InsuranceRecord.attributeTypeMap = [
    {
        name: 't',
        baseName: 't',
        type: 'number',
    },
    {
        name: 'b',
        baseName: 'b',
        type: 'string',
    },
];
