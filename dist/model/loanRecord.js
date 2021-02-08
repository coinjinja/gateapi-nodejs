export class LoanRecord {
    static getAttributeTypeMap() {
        return LoanRecord.attributeTypeMap;
    }
}
LoanRecord.discriminator = undefined;
LoanRecord.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
    },
    {
        name: 'loanId',
        baseName: 'loan_id',
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
        type: 'LoanRecord.Status',
    },
    {
        name: 'borrowUserId',
        baseName: 'borrow_user_id',
        type: 'string',
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
];
(function (LoanRecord) {
    let Status;
    (function (Status) {
        Status[Status["Loaned"] = 'loaned'] = "Loaned";
        Status[Status["Finished"] = 'finished'] = "Finished";
    })(Status = LoanRecord.Status || (LoanRecord.Status = {}));
})(LoanRecord || (LoanRecord = {}));
