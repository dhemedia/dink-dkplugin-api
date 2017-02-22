module dk {

    /**
    @param path is absolute path to the file
    @param type is the content type
    @param expirationDate is the expiration date in format 'yyyy-MM-dd'
    @param creationDate is the creation date in format 'yyyy-MM-dd'
    */
    export interface IGetLocalFileResponse extends IBasicResponse {
        path: string;
        type: string;
        expirationDate: string;
        creationDate: string;
    }

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
