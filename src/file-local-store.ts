module dk {

    export interface IStoreLocalFileResponse extends IBasicResponse {
        /** path is the absolute path to the local file that was created */
        path: string;
    }

    /**
    @param result a json stringified IStoreLocalFileResponse object,
    so you'll need to parse the json before accessing the IStoreLocalFileResponse properties
    */
    export interface IStoreLocalFileSuccessFn {
        (result: string): null;
    }

    /**
      @param result a json stringified IBasicResponse object,
      so you'll need to parse the json before accessing the IBasicResponse properties
    */
    export interface IStoreLocalFileFailureFn {
        (result: string): null;
    }
}
