module dk {

    export interface ISyncLocalFilesResponse extends IBasicResponse {
        /**
         transactionId is the key of the transaction that was created
        */
        transactionId: string;
    }

    /**
    @param result is a json stringified ISyncLocalFilesResponse object,
    so you'll need to parse the json before accessing the ISyncLocalFilesResponse properties
    */
    export interface ISyncLocalFilesSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface ISyncLocalFilesFailureFn {
        (result: string): null;
    }
}
