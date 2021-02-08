import { Contract } from '../model/contract';
import { ContractStat } from '../model/contractStat';
import { FundingRateRecord } from '../model/fundingRateRecord';
import { FuturesAccount } from '../model/futuresAccount';
import { FuturesAccountBook } from '../model/futuresAccountBook';
import { FuturesCandlestick } from '../model/futuresCandlestick';
import { FuturesLiquidate } from '../model/futuresLiquidate';
import { FuturesOrder } from '../model/futuresOrder';
import { FuturesOrderBook } from '../model/futuresOrderBook';
import { FuturesPriceTriggeredOrder } from '../model/futuresPriceTriggeredOrder';
import { FuturesTicker } from '../model/futuresTicker';
import { FuturesTrade } from '../model/futuresTrade';
import { InsuranceRecord } from '../model/insuranceRecord';
import { MyFuturesTrade } from '../model/myFuturesTrade';
import { Position } from '../model/position';
import { PositionClose } from '../model/positionClose';
import { TriggerOrderResponse } from '../model/triggerOrderResponse';
import { ApiClient } from './apiClient';
import { AxiosResponse } from 'axios';
export declare class FuturesApi {
    protected client: ApiClient;
    constructor(client?: ApiClient);
    listFuturesContracts(settle: 'btc' | 'usdt'): Promise<{
        response: AxiosResponse;
        body: Array<Contract>;
    }>;
    getFuturesContract(settle: 'btc' | 'usdt', contract: string): Promise<{
        response: AxiosResponse;
        body: Contract;
    }>;
    listFuturesOrderBook(settle: 'btc' | 'usdt', contract: string, opts: {
        interval?: '0' | '0.1' | '0.01';
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: FuturesOrderBook;
    }>;
    listFuturesTrades(settle: 'btc' | 'usdt', contract: string, opts: {
        limit?: number;
        lastId?: string;
        from?: number;
        to?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesTrade>;
    }>;
    listFuturesCandlesticks(settle: 'btc' | 'usdt', contract: string, opts: {
        from?: number;
        to?: number;
        limit?: number;
        interval?: '10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d';
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesCandlestick>;
    }>;
    listFuturesTickers(settle: 'btc' | 'usdt', opts: {
        contract?: string;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesTicker>;
    }>;
    listFuturesFundingRateHistory(settle: 'btc' | 'usdt', contract: string, opts: {
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FundingRateRecord>;
    }>;
    listFuturesInsuranceLedger(settle: 'btc' | 'usdt', opts: {
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<InsuranceRecord>;
    }>;
    listContractStats(settle: 'btc' | 'usdt', contract: string, opts: {
        from?: number;
        interval?: '5m' | '15m' | '30m' | '1h' | '4h' | '1d';
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<ContractStat>;
    }>;
    listLiquidatedOrders(settle: 'btc' | 'usdt', opts: {
        contract?: string;
        from?: number;
        to?: number;
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesLiquidate>;
    }>;
    listFuturesAccounts(settle: 'btc' | 'usdt'): Promise<{
        response: AxiosResponse;
        body: FuturesAccount;
    }>;
    listFuturesAccountBook(settle: 'btc' | 'usdt', opts: {
        limit?: number;
        from?: number;
        to?: number;
        type?: 'dnw' | 'pnl' | 'fee' | 'refr' | 'fund' | 'point_dnw' | 'point_fee' | 'point_refr';
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesAccountBook>;
    }>;
    listPositions(settle: 'btc' | 'usdt'): Promise<{
        response: AxiosResponse;
        body: Array<Position>;
    }>;
    getPosition(settle: 'btc' | 'usdt', contract: string): Promise<{
        response: AxiosResponse;
        body: Position;
    }>;
    updatePositionMargin(settle: 'btc' | 'usdt', contract: string, change: string): Promise<{
        response: AxiosResponse;
        body: Position;
    }>;
    updatePositionLeverage(settle: 'btc' | 'usdt', contract: string, leverage: string): Promise<{
        response: AxiosResponse;
        body: Position;
    }>;
    updatePositionRiskLimit(settle: 'btc' | 'usdt', contract: string, riskLimit: string): Promise<{
        response: AxiosResponse;
        body: Position;
    }>;
    setDualMode(settle: 'btc' | 'usdt', dualMode: boolean): Promise<{
        response: AxiosResponse;
        body: FuturesAccount;
    }>;
    getDualModePosition(settle: 'btc' | 'usdt', contract: string): Promise<{
        response: AxiosResponse;
        body: Array<Position>;
    }>;
    updateDualModePositionMargin(settle: 'btc' | 'usdt', contract: string, change: string): Promise<{
        response: AxiosResponse;
        body: Array<Position>;
    }>;
    updateDualModePositionLeverage(settle: 'btc' | 'usdt', contract: string, leverage: string): Promise<{
        response: AxiosResponse;
        body: Array<Position>;
    }>;
    updateDualModePositionRiskLimit(settle: 'btc' | 'usdt', contract: string, riskLimit: string): Promise<{
        response: AxiosResponse;
        body: Array<Position>;
    }>;
    listFuturesOrders(settle: 'btc' | 'usdt', contract: string, status: 'open' | 'finished', opts: {
        limit?: number;
        offset?: number;
        lastId?: string;
        countTotal?: 0 | 1;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesOrder>;
    }>;
    createFuturesOrder(settle: 'btc' | 'usdt', futuresOrder: FuturesOrder): Promise<{
        response: AxiosResponse;
        body: FuturesOrder;
    }>;
    cancelFuturesOrders(settle: 'btc' | 'usdt', contract: string, opts: {
        side?: 'ask' | 'bid';
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesOrder>;
    }>;
    getFuturesOrder(settle: 'btc' | 'usdt', orderId: string): Promise<{
        response: AxiosResponse;
        body: FuturesOrder;
    }>;
    cancelFuturesOrder(settle: 'btc' | 'usdt', orderId: string): Promise<{
        response: AxiosResponse;
        body: FuturesOrder;
    }>;
    getMyTrades(settle: 'btc' | 'usdt', opts: {
        contract?: string;
        order?: number;
        limit?: number;
        offset?: number;
        lastId?: string;
        countTotal?: 0 | 1;
    }): Promise<{
        response: AxiosResponse;
        body: Array<MyFuturesTrade>;
    }>;
    listPositionClose(settle: 'btc' | 'usdt', opts: {
        contract?: string;
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<PositionClose>;
    }>;
    listLiquidates(settle: 'btc' | 'usdt', opts: {
        contract?: string;
        limit?: number;
        at?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesLiquidate>;
    }>;
    listPriceTriggeredOrders(settle: 'btc' | 'usdt', status: 'open' | 'finished', opts: {
        contract?: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesPriceTriggeredOrder>;
    }>;
    createPriceTriggeredOrder(settle: 'btc' | 'usdt', futuresPriceTriggeredOrder: FuturesPriceTriggeredOrder): Promise<{
        response: AxiosResponse;
        body: TriggerOrderResponse;
    }>;
    cancelPriceTriggeredOrderList(settle: 'btc' | 'usdt', contract: string): Promise<{
        response: AxiosResponse;
        body: Array<FuturesPriceTriggeredOrder>;
    }>;
    getPriceTriggeredOrder(settle: 'btc' | 'usdt', orderId: string): Promise<{
        response: AxiosResponse;
        body: FuturesPriceTriggeredOrder;
    }>;
    cancelPriceTriggeredOrder(settle: 'btc' | 'usdt', orderId: string): Promise<{
        response: AxiosResponse;
        body: FuturesPriceTriggeredOrder;
    }>;
}
