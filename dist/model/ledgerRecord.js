export class LedgerRecord {
    static getAttributeTypeMap() {
        return LedgerRecord.attributeTypeMap;
    }
}
LedgerRecord.discriminator = undefined;
LedgerRecord.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
    },
    {
        name: 'txid',
        baseName: 'txid',
        type: 'string',
    },
    {
        name: 'timestamp',
        baseName: 'timestamp',
        type: 'string',
    },
    {
        name: 'amount',
        baseName: 'amount',
        type: 'string',
    },
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'address',
        baseName: 'address',
        type: 'string',
    },
    {
        name: 'memo',
        baseName: 'memo',
        type: 'string',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'LedgerRecord.Status',
    },
];
(function (LedgerRecord) {
    let Status;
    (function (Status) {
        Status[Status["DONE"] = 'DONE'] = "DONE";
        Status[Status["CANCEL"] = 'CANCEL'] = "CANCEL";
        Status[Status["REQUEST"] = 'REQUEST'] = "REQUEST";
        Status[Status["MANUAL"] = 'MANUAL'] = "MANUAL";
        Status[Status["BCODE"] = 'BCODE'] = "BCODE";
    })(Status = LedgerRecord.Status || (LedgerRecord.Status = {}));
})(LedgerRecord || (LedgerRecord = {}));
