export class SubAccountTransfer {
    static getAttributeTypeMap() {
        return SubAccountTransfer.attributeTypeMap;
    }
}
SubAccountTransfer.discriminator = undefined;
SubAccountTransfer.attributeTypeMap = [
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'subAccount',
        baseName: 'sub_account',
        type: 'string',
    },
    {
        name: 'direction',
        baseName: 'direction',
        type: 'SubAccountTransfer.Direction',
    },
    {
        name: 'amount',
        baseName: 'amount',
        type: 'string',
    },
    {
        name: 'uid',
        baseName: 'uid',
        type: 'string',
    },
    {
        name: 'timest',
        baseName: 'timest',
        type: 'string',
    },
    {
        name: 'source',
        baseName: 'source',
        type: 'string',
    },
];
(function (SubAccountTransfer) {
    let Direction;
    (function (Direction) {
        Direction[Direction["To"] = 'to'] = "To";
        Direction[Direction["From"] = 'from'] = "From";
    })(Direction = SubAccountTransfer.Direction || (SubAccountTransfer.Direction = {}));
})(SubAccountTransfer || (SubAccountTransfer = {}));
