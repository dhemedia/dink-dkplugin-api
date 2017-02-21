module dk {
    /**
    @param result is a json stringified IBasicResponse object
    */
    export interface IExecuteLocalFileTransactionsSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IExecuteLocalFileTransactionsFailureFn {
        (result: string): null;
    }

}
