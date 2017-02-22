module dk {

    export interface IGetLocalFileResponse extends IBasicResponse {
        /**
          path is absolute path to the file
        */
        path: string;
        /**
         type is the content type
        */
        type: string;
        /**
         expirationDate is the expiration date in format 'yyyy-MM-dd'
        */
        expirationDate: string;
        /**
         creationDate is the creation date in format 'yyyy-MM-dd'
        */
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
