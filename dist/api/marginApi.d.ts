import { FundingAccount } from '../model/fundingAccount';
import { FundingBookItem } from '../model/fundingBookItem';
import { Loan } from '../model/loan';
import { LoanPatch } from '../model/loanPatch';
import { LoanRecord } from '../model/loanRecord';
import { MarginAccount } from '../model/marginAccount';
import { MarginAccountBook } from '../model/marginAccountBook';
import { MarginCurrencyPair } from '../model/marginCurrencyPair';
import { RepayRequest } from '../model/repayRequest';
import { Repayment } from '../model/repayment';
import { ApiClient } from './apiClient';
import { AxiosResponse } from 'axios';
export declare class MarginApi {
    protected client: ApiClient;
    constructor(client?: ApiClient);
    listMarginCurrencyPairs(): Promise<{
        response: AxiosResponse;
        body: Array<MarginCurrencyPair>;
    }>;
    getMarginCurrencyPair(currencyPair: string): Promise<{
        response: AxiosResponse;
        body: MarginCurrencyPair;
    }>;
    listFundingBook(currency: string): Promise<{
        response: AxiosResponse;
        body: Array<FundingBookItem>;
    }>;
    listMarginAccounts(opts: {
        currencyPair?: string;
    }): Promise<{
        response: AxiosResponse;
        body: Array<MarginAccount>;
    }>;
    listMarginAccountBook(opts: {
        currency?: string;
        currencyPair?: string;
        from?: number;
        to?: number;
        page?: number;
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<MarginAccountBook>;
    }>;
    listFundingAccounts(opts: {
        currency?: string;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FundingAccount>;
    }>;
    listLoans(status: 'open' | 'loaned' | 'finished' | 'auto_repaid', side: 'lend' | 'borrow', opts: {
        currency?: string;
        currencyPair?: string;
        sortBy?: 'create_time' | 'rate';
        reverseSort?: boolean;
        page?: number;
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<Loan>;
    }>;
    createLoan(loan: Loan): Promise<{
        response: AxiosResponse;
        body: Loan;
    }>;
    mergeLoans(currency: string, ids: string): Promise<{
        response: AxiosResponse;
        body: Loan;
    }>;
    getLoan(loanId: string, side: 'lend' | 'borrow'): Promise<{
        response: AxiosResponse;
        body: Loan;
    }>;
    cancelLoan(loanId: string, currency: string): Promise<{
        response: AxiosResponse;
        body: Loan;
    }>;
    updateLoan(loanId: string, loanPatch: LoanPatch): Promise<{
        response: AxiosResponse;
        body: Loan;
    }>;
    listLoanRepayments(loanId: string): Promise<{
        response: AxiosResponse;
        body: Array<Repayment>;
    }>;
    repayLoan(loanId: string, repayRequest: RepayRequest): Promise<{
        response: AxiosResponse;
        body: Loan;
    }>;
    listLoanRecords(loanId: string, opts: {
        status?: 'loaned' | 'finished';
        page?: number;
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<LoanRecord>;
    }>;
    getLoanRecord(loanRecordId: string, loanId: string): Promise<{
        response: AxiosResponse;
        body: LoanRecord;
    }>;
    updateLoanRecord(loanRecordId: string, loanPatch: LoanPatch): Promise<{
        response: AxiosResponse;
        body: LoanRecord;
    }>;
}
