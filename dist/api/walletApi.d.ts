import { DepositAddress } from '../model/depositAddress';
import { LedgerRecord } from '../model/ledgerRecord';
import { SubAccountBalance } from '../model/subAccountBalance';
import { SubAccountTransfer } from '../model/subAccountTransfer';
import { Transfer } from '../model/transfer';
import { WithdrawStatus } from '../model/withdrawStatus';
import { ApiClient } from './apiClient';
import { AxiosResponse } from 'axios';
export declare class WalletApi {
    protected client: ApiClient;
    constructor(client?: ApiClient);
    getDepositAddress(currency: string): Promise<{
        response: AxiosResponse;
        body: DepositAddress;
    }>;
    listWithdrawals(opts: {
        currency?: string;
        from?: number;
        to?: number;
        limit?: number;
        offset?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<LedgerRecord>;
    }>;
    listDeposits(opts: {
        currency?: string;
        from?: number;
        to?: number;
        limit?: number;
        offset?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<LedgerRecord>;
    }>;
    transfer(transfer: Transfer): Promise<{
        response: AxiosResponse;
        body?: any;
    }>;
    listSubAccountTransfers(opts: {
        subUid?: string;
        from?: number;
        to?: number;
        limit?: number;
        offset?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<SubAccountTransfer>;
    }>;
    transferWithSubAccount(subAccountTransfer: SubAccountTransfer): Promise<{
        response: AxiosResponse;
        body?: any;
    }>;
    listWithdrawStatus(opts: {
        currency?: string;
    }): Promise<{
        response: AxiosResponse;
        body: Array<WithdrawStatus>;
    }>;
    listSubAccountBalances(opts: {
        subUid?: string;
    }): Promise<{
        response: AxiosResponse;
        body: Array<SubAccountBalance>;
    }>;
}
