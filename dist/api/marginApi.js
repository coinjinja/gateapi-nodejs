import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';
export class MarginApi {
    constructor(client) {
        if (client) {
            this.client = client;
        }
        else {
            this.client = new ApiClient();
        }
    }
    async listMarginCurrencyPairs() {
        const localVarPath = this.client.basePath + '/margin/currency_pairs';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<MarginCurrencyPair>', authSettings);
    }
    async getMarginCurrencyPair(currencyPair) {
        const localVarPath = this.client.basePath +
            '/margin/currency_pairs/{currency_pair}'.replace('{' + 'currency_pair' + '}', encodeURIComponent(String(currencyPair)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling getMarginCurrencyPair.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'MarginCurrencyPair', authSettings);
    }
    async listFundingBook(currency) {
        const localVarPath = this.client.basePath + '/margin/funding_book';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling listFundingBook.');
        }
        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = [];
        return this.client.request(config, 'Array<FundingBookItem>', authSettings);
    }
    async listMarginAccounts(opts) {
        const localVarPath = this.client.basePath + '/margin/accounts';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        opts = opts || {};
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<MarginAccount>', authSettings);
    }
    async listMarginAccountBook(opts) {
        const localVarPath = this.client.basePath + '/margin/account_book';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }
        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }
        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<MarginAccountBook>', authSettings);
    }
    async listFundingAccounts(opts) {
        const localVarPath = this.client.basePath + '/margin/funding_accounts';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<FundingAccount>', authSettings);
    }
    async listLoans(status, side, opts) {
        const localVarPath = this.client.basePath + '/margin/loans';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling listLoans.');
        }
        if (side === null || side === undefined) {
            throw new Error('Required parameter side was null or undefined when calling listLoans.');
        }
        opts = opts || {};
        localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "'open' | 'loaned' | 'finished' | 'auto_repaid'");
        localVarQueryParameters['side'] = ObjectSerializer.serialize(side, "'lend' | 'borrow'");
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }
        if (opts.sortBy !== undefined) {
            localVarQueryParameters['sort_by'] = ObjectSerializer.serialize(opts.sortBy, "'create_time' | 'rate'");
        }
        if (opts.reverseSort !== undefined) {
            localVarQueryParameters['reverse_sort'] = ObjectSerializer.serialize(opts.reverseSort, 'boolean');
        }
        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<Loan>', authSettings);
    }
    async createLoan(loan) {
        const localVarPath = this.client.basePath + '/margin/loans';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (loan === null || loan === undefined) {
            throw new Error('Required parameter loan was null or undefined when calling createLoan.');
        }
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(loan, 'Loan'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Loan', authSettings);
    }
    async mergeLoans(currency, ids) {
        const localVarPath = this.client.basePath + '/margin/merged_loans';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling mergeLoans.');
        }
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling mergeLoans.');
        }
        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');
        localVarQueryParameters['ids'] = ObjectSerializer.serialize(ids, 'string');
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Loan', authSettings);
    }
    async getLoan(loanId, side) {
        const localVarPath = this.client.basePath +
            '/margin/loans/{loan_id}'.replace('{' + 'loan_id' + '}', encodeURIComponent(String(loanId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling getLoan.');
        }
        if (side === null || side === undefined) {
            throw new Error('Required parameter side was null or undefined when calling getLoan.');
        }
        localVarQueryParameters['side'] = ObjectSerializer.serialize(side, "'lend' | 'borrow'");
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Loan', authSettings);
    }
    async cancelLoan(loanId, currency) {
        const localVarPath = this.client.basePath +
            '/margin/loans/{loan_id}'.replace('{' + 'loan_id' + '}', encodeURIComponent(String(loanId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling cancelLoan.');
        }
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling cancelLoan.');
        }
        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');
        const config = {
            method: 'DELETE',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Loan', authSettings);
    }
    async updateLoan(loanId, loanPatch) {
        const localVarPath = this.client.basePath +
            '/margin/loans/{loan_id}'.replace('{' + 'loan_id' + '}', encodeURIComponent(String(loanId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling updateLoan.');
        }
        if (loanPatch === null || loanPatch === undefined) {
            throw new Error('Required parameter loanPatch was null or undefined when calling updateLoan.');
        }
        const config = {
            method: 'PATCH',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(loanPatch, 'LoanPatch'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Loan', authSettings);
    }
    async listLoanRepayments(loanId) {
        const localVarPath = this.client.basePath +
            '/margin/loans/{loan_id}/repayment'.replace('{' + 'loan_id' + '}', encodeURIComponent(String(loanId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling listLoanRepayments.');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<Repayment>', authSettings);
    }
    async repayLoan(loanId, repayRequest) {
        const localVarPath = this.client.basePath +
            '/margin/loans/{loan_id}/repayment'.replace('{' + 'loan_id' + '}', encodeURIComponent(String(loanId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling repayLoan.');
        }
        if (repayRequest === null || repayRequest === undefined) {
            throw new Error('Required parameter repayRequest was null or undefined when calling repayLoan.');
        }
        const config = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(repayRequest, 'RepayRequest'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Loan', authSettings);
    }
    async listLoanRecords(loanId, opts) {
        const localVarPath = this.client.basePath + '/margin/loan_records';
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling listLoanRecords.');
        }
        opts = opts || {};
        localVarQueryParameters['loan_id'] = ObjectSerializer.serialize(loanId, 'string');
        if (opts.status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(opts.status, "'loaned' | 'finished'");
        }
        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'Array<LoanRecord>', authSettings);
    }
    async getLoanRecord(loanRecordId, loanId) {
        const localVarPath = this.client.basePath +
            '/margin/loan_records/{loan_record_id}'.replace('{' + 'loan_record_id' + '}', encodeURIComponent(String(loanRecordId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (loanRecordId === null || loanRecordId === undefined) {
            throw new Error('Required parameter loanRecordId was null or undefined when calling getLoanRecord.');
        }
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling getLoanRecord.');
        }
        localVarQueryParameters['loan_id'] = ObjectSerializer.serialize(loanId, 'string');
        const config = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'LoanRecord', authSettings);
    }
    async updateLoanRecord(loanRecordId, loanPatch) {
        const localVarPath = this.client.basePath +
            '/margin/loan_records/{loan_record_id}'.replace('{' + 'loan_record_id' + '}', encodeURIComponent(String(loanRecordId)));
        const localVarQueryParameters = {};
        const localVarHeaderParams = Object.assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        if (loanRecordId === null || loanRecordId === undefined) {
            throw new Error('Required parameter loanRecordId was null or undefined when calling updateLoanRecord.');
        }
        if (loanPatch === null || loanPatch === undefined) {
            throw new Error('Required parameter loanPatch was null or undefined when calling updateLoanRecord.');
        }
        const config = {
            method: 'PATCH',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(loanPatch, 'LoanPatch'),
        };
        const authSettings = ['apiv4'];
        return this.client.request(config, 'LoanRecord', authSettings);
    }
}
