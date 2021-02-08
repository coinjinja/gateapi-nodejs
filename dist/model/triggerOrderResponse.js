"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerOrderResponse = void 0;
class TriggerOrderResponse {
    static getAttributeTypeMap() {
        return TriggerOrderResponse.attributeTypeMap;
    }
}
exports.TriggerOrderResponse = TriggerOrderResponse;
TriggerOrderResponse.discriminator = undefined;
TriggerOrderResponse.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'number',
    },
];
