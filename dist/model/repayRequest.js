"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepayRequest = void 0;
class RepayRequest {
    static getAttributeTypeMap() {
        return RepayRequest.attributeTypeMap;
    }
}
exports.RepayRequest = RepayRequest;
RepayRequest.discriminator = undefined;
RepayRequest.attributeTypeMap = [
    {
        name: 'currencyPair',
        baseName: 'currency_pair',
        type: 'string',
    },
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'mode',
        baseName: 'mode',
        type: 'RepayRequest.Mode',
    },
    {
        name: 'amount',
        baseName: 'amount',
        type: 'string',
    },
];
(function (RepayRequest) {
    let Mode;
    (function (Mode) {
        Mode[Mode["All"] = 'all'] = "All";
        Mode[Mode["Partial"] = 'partial'] = "Partial";
    })(Mode = RepayRequest.Mode || (RepayRequest.Mode = {}));
})(RepayRequest = exports.RepayRequest || (exports.RepayRequest = {}));
