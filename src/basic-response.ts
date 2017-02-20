module dk {
    export interface IBasicResponse {
        /**
        * result indicates if call was successful
        */
        result: boolean;
        message: string;
        /**
          cbId is the callbackIdentifier that was passed in, only present if
          that callbackIdentifier was not empty
        */
        cbId?: string;
    }
}
