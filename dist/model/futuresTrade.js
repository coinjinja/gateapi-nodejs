"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuturesTrade = void 0;
class FuturesTrade {
    static getAttributeTypeMap() {
        return FuturesTrade.attributeTypeMap;
    }
}
exports.FuturesTrade = FuturesTrade;
FuturesTrade.discriminator = undefined;
FuturesTrade.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'number',
    },
    {
        name: 'createTime',
        baseName: 'create_time',
        type: 'number',
    },
    {
        name: 'contract',
        baseName: 'contract',
        type: 'string',
    },
    {
        name: 'size',
        baseName: 'size',
        type: 'number',
    },
    {
        name: 'price',
        baseName: 'price',
        type: 'string',
    },
];
