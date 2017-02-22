module dk {

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IDeleteLocalFileSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IDeleteLocalFileFailureFn {
        (result: string): null;
    }
}
