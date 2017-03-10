module dk {
    /**
      @param result contains a short string describing the result of the call
    */
    export interface IRecordStateSuccessFn {
        (result: string): null;
    }

    /**
      @param result contains a short string describing the result of the call
    */
    export interface IRecordStateFailureFn {
        (result: string): null;
    }

}
