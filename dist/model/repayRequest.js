export class RepayRequest {
    static getAttributeTypeMap() {
        return RepayRequest.attributeTypeMap;
    }
}
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
})(RepayRequest || (RepayRequest = {}));
