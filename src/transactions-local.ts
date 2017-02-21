module dk {
    /**
    * Transactions are a bunch of files that belong together
    * and eventually get sent on to a notificationUrl which could, for example, be your own server script
    */
    export interface ITransaction {
        /** The local key of the transaction */
        id: string;
        status: string;
        /** last update in 'yyyy-MM-dd HH:mm:ss' format*/
        lastUpdate: string;
        /** finish date in 'yyyy-MM-dd HH:mm:ss' format*/
        finishedDate?: string;
        /** the url that should be called once everything is ready*/
        notificationURL: string;
        /** the key of the transaction in the datastore on the server*/
        remoteKey: string;
    }

    export interface IGetLocalFileTransactionsResponse extends IBasicResponse {
        localFileTransactions: ITransaction[];
    }

    /**
    @param result a json stringified IGetLocalFileTransactionsResponse object,
    so you'll need to parse the json before accessing the IGetLocalFileTransactionsResponse properties
    */
    export interface IGetLocalFileTransactionsSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetLocalFileTransactionsFailureFn {
        (result: string): null;
    }

}
