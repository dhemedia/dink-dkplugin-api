module dk {

    /**
    @param result is a json stringified IGetLocalFileResponse object,
    so you'll need to parse the json before accessing the IGetLocalFileResponse properties
    */
    export interface IGetLocalFileSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetLocalFileFailureFn {
        (result: string): null;
    }
}
