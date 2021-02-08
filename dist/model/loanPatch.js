"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanPatch = void 0;
class LoanPatch {
    static getAttributeTypeMap() {
        return LoanPatch.attributeTypeMap;
    }
}
exports.LoanPatch = LoanPatch;
LoanPatch.discriminator = undefined;
LoanPatch.attributeTypeMap = [
    {
        name: 'currency',
        baseName: 'currency',
        type: 'string',
    },
    {
        name: 'side',
        baseName: 'side',
        type: 'LoanPatch.Side',
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
        name: 'loanId',
        baseName: 'loan_id',
        type: 'string',
    },
];
(function (LoanPatch) {
    let Side;
    (function (Side) {
        Side[Side["Lend"] = 'lend'] = "Lend";
        Side[Side["Borrow"] = 'borrow'] = "Borrow";
    })(Side = LoanPatch.Side || (LoanPatch.Side = {}));
})(LoanPatch = exports.LoanPatch || (exports.LoanPatch = {}));
