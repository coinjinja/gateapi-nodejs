"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfer = void 0;
class Transfer {
    static getAttributeTypeMap() {
        return Transfer.attributeTypeMap;
    }
}
exports.Transfer = Transfer;
Transfer.discriminator = undefined;
Transfer.attributeTypeMap = [
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'from',
        baseName: 'from',
        type: 'Transfer.From',
    },
    {
        name: 'to',
        baseName: 'to',
        type: 'Transfer.To',
    },
    {
        name: 'amount',
        baseName: 'amount',
        type: 'string',
    },
    {
        name: 'currencyPair',
        baseName: 'currency_pair',
        type: 'string',
    },
    {
        name: 'settle',
        baseName: 'settle',
        type: 'string',
    },
];
(function (Transfer) {
    let From;
    (function (From) {
        From[From["Spot"] = 'spot'] = "Spot";
        From[From["Margin"] = 'margin'] = "Margin";
        From[From["Futures"] = 'futures'] = "Futures";
        From[From["Delivery"] = 'delivery'] = "Delivery";
    })(From = Transfer.From || (Transfer.From = {}));
    let To;
    (function (To) {
        To[To["Spot"] = 'spot'] = "Spot";
        To[To["Margin"] = 'margin'] = "Margin";
        To[To["Futures"] = 'futures'] = "Futures";
        To[To["Delivery"] = 'delivery'] = "Delivery";
    })(To = Transfer.To || (Transfer.To = {}));
})(Transfer = exports.Transfer || (exports.Transfer = {}));
