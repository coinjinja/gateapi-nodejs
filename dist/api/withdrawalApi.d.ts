import { LedgerRecord } from '../model/ledgerRecord';
import { ApiClient } from './apiClient';
import { AxiosResponse } from 'axios';
export declare class WithdrawalApi {
    protected client: ApiClient;
    constructor(client?: ApiClient);
    withdraw(ledgerRecord: LedgerRecord): Promise<{
        response: AxiosResponse;
        body: LedgerRecord;
    }>;
}
