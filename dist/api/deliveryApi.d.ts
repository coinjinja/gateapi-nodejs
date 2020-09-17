import { DeliveryContract } from '../model/deliveryContract';
import { DeliverySettlement } from '../model/deliverySettlement';
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
export declare class DeliveryApi {
    protected client: ApiClient;
    constructor(client?: ApiClient);
    listDeliveryContracts(settle: 'usdt'): Promise<{
        response: AxiosResponse;
        body: Array<DeliveryContract>;
    }>;
    getDeliveryContract(settle: 'usdt', contract: string): Promise<{
        response: AxiosResponse;
        body: DeliveryContract;
    }>;
    listDeliveryOrderBook(settle: 'usdt', contract: string, opts: {
        interval?: '0' | '0.1' | '0.01';
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: FuturesOrderBook;
    }>;
    listDeliveryTrades(settle: 'usdt', contract: string, opts: {
        limit?: number;
        lastId?: string;
        from?: number;
        to?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesTrade>;
    }>;
    listDeliveryCandlesticks(settle: 'usdt', contract: string, opts: {
        from?: number;
        to?: number;
        limit?: number;
        interval?: '10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d';
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesCandlestick>;
    }>;
    listDeliveryTickers(settle: 'usdt', opts: {
        contract?: string;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesTicker>;
    }>;
    listDeliveryInsuranceLedger(settle: 'usdt', opts: {
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<InsuranceRecord>;
    }>;
    listDeliveryAccounts(settle: 'usdt'): Promise<{
        response: AxiosResponse;
        body: FuturesAccount;
    }>;
    listDeliveryAccountBook(settle: 'usdt', opts: {
        limit?: number;
        from?: number;
        to?: number;
        type?: 'dnw' | 'pnl' | 'fee' | 'refr' | 'fund' | 'point_dnw' | 'point_fee' | 'point_refr';
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesAccountBook>;
    }>;
    listDeliveryPositions(settle: 'usdt'): Promise<{
        response: AxiosResponse;
        body: Array<Position>;
    }>;
    getDeliveryPosition(settle: 'usdt', contract: string): Promise<{
        response: AxiosResponse;
        body: Position;
    }>;
    updateDeliveryPositionMargin(settle: 'usdt', contract: string, change: string): Promise<{
        response: AxiosResponse;
        body: Position;
    }>;
    updateDeliveryPositionLeverage(settle: 'usdt', contract: string, leverage: string): Promise<{
        response: AxiosResponse;
        body: Position;
    }>;
    updateDeliveryPositionRiskLimit(settle: 'usdt', contract: string, riskLimit: string): Promise<{
        response: AxiosResponse;
        body: Position;
    }>;
    listDeliveryOrders(settle: 'usdt', status: 'open' | 'finished', opts: {
        contract?: string;
        limit?: number;
        offset?: number;
        lastId?: string;
        countTotal?: 0 | 1;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesOrder>;
    }>;
    createDeliveryOrder(settle: 'usdt', futuresOrder: FuturesOrder): Promise<{
        response: AxiosResponse;
        body: FuturesOrder;
    }>;
    cancelDeliveryOrders(settle: 'usdt', contract: string, opts: {
        side?: 'ask' | 'bid';
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesOrder>;
    }>;
    getDeliveryOrder(settle: 'usdt', orderId: string): Promise<{
        response: AxiosResponse;
        body: FuturesOrder;
    }>;
    cancelDeliveryOrder(settle: 'usdt', orderId: string): Promise<{
        response: AxiosResponse;
        body: FuturesOrder;
    }>;
    getMyDeliveryTrades(settle: 'usdt', opts: {
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
    listDeliveryPositionClose(settle: 'usdt', opts: {
        contract?: string;
        limit?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<PositionClose>;
    }>;
    listDeliveryLiquidates(settle: 'usdt', opts: {
        contract?: string;
        limit?: number;
        at?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesLiquidate>;
    }>;
    listDeliverySettlements(settle: 'usdt', opts: {
        contract?: string;
        limit?: number;
        at?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<DeliverySettlement>;
    }>;
    listPriceTriggeredDeliveryOrders(settle: 'usdt', status: 'open' | 'finished', opts: {
        contract?: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        response: AxiosResponse;
        body: Array<FuturesPriceTriggeredOrder>;
    }>;
    createPriceTriggeredDeliveryOrder(settle: 'usdt', futuresPriceTriggeredOrder: FuturesPriceTriggeredOrder): Promise<{
        response: AxiosResponse;
        body: TriggerOrderResponse;
    }>;
    cancelPriceTriggeredDeliveryOrderList(settle: 'usdt', contract: string): Promise<{
        response: AxiosResponse;
        body: Array<FuturesPriceTriggeredOrder>;
    }>;
    getPriceTriggeredDeliveryOrder(settle: 'usdt', orderId: string): Promise<{
        response: AxiosResponse;
        body: FuturesPriceTriggeredOrder;
    }>;
    cancelPriceTriggeredDeliveryOrder(settle: 'usdt', orderId: string): Promise<{
        response: AxiosResponse;
        body: FuturesPriceTriggeredOrder;
    }>;
}
