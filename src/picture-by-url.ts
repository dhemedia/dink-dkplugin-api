module dk {

    export interface IGetPictureByUrlResponse extends IBasicResponse {
        /** A JSON string representation of the byte */
        image: string;
    }

    /**
    @param result a json stringified IGetPictureByUrlResponse object,
    so you'll need to parse the json before accessing the IGetPictureByUrlResponse properties
    */
    export interface IGetPictureByUrlRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetPictureByUrlRequestFailureFn {
        (result: string): null;
    }

    export interface IGetPictureByUrlRequest {
        successCallback: IGetPictureByUrlRequestSuccessFn;
        failureCallback: IGetPictureByUrlRequestFailureFn;
        callbackIdentifier?: string;
        pictureUrl: string;
    }

}
