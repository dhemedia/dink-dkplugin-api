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
}
