"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repayment = void 0;
class Repayment {
    static getAttributeTypeMap() {
        return Repayment.attributeTypeMap;
    }
}
exports.Repayment = Repayment;
Repayment.discriminator = undefined;
Repayment.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
    },
    {
        name: 'createTime',
        baseName: 'create_time',
        type: 'string',
    },
    {
        name: 'principal',
        baseName: 'principal',
        type: 'string',
    },
    {
        name: 'interest',
        baseName: 'interest',
        type: 'string',
    },
];
