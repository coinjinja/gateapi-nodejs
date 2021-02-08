export class Loan {
    static getAttributeTypeMap() {
        return Loan.attributeTypeMap;
    }
}
Loan.discriminator = undefined;
Loan.attributeTypeMap = [
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
        name: 'expireTime',
        baseName: 'expire_time',
        type: 'string',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'Loan.Status',
    },
    {
        name: 'side',
        baseName: 'side',
        type: 'Loan.Side',
    },
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'rate',
        baseName: 'rate',
        type: 'string',
    },
    {
        name: 'amount',
        baseName: 'amount',
        type: 'string',
    },
    {
        name: 'days',
        baseName: 'days',
        type: 'number',
    },
    {
        name: 'autoRenew',
        baseName: 'auto_renew',
        type: 'boolean',
    },
    {
        name: 'currencyPair',
        baseName: 'currency_pair',
        type: 'string',
    },
    {
        name: 'left',
        baseName: 'left',
        type: 'string',
    },
    {
        name: 'repaid',
        baseName: 'repaid',
        type: 'string',
    },
    {
        name: 'paidInterest',
        baseName: 'paid_interest',
        type: 'string',
    },
    {
        name: 'unpaidInterest',
        baseName: 'unpaid_interest',
        type: 'string',
    },
    {
        name: 'feeRate',
        baseName: 'fee_rate',
        type: 'string',
    },
    {
        name: 'origId',
        baseName: 'orig_id',
        type: 'string',
    },
];
(function (Loan) {
    let Status;
    (function (Status) {
        Status[Status["Open"] = 'open'] = "Open";
        Status[Status["Loaned"] = 'loaned'] = "Loaned";
        Status[Status["Finished"] = 'finished'] = "Finished";
        Status[Status["AutoRepaid"] = 'auto_repaid'] = "AutoRepaid";
    })(Status = Loan.Status || (Loan.Status = {}));
    let Side;
    (function (Side) {
        Side[Side["Lend"] = 'lend'] = "Lend";
        Side[Side["Borrow"] = 'borrow'] = "Borrow";
    })(Side = Loan.Side || (Loan.Side = {}));
})(Loan || (Loan = {}));
