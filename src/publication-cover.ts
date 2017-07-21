module dk {

    export interface IGetPublicationCoverResponse extends IBasicResponse {
        /** A JSON string representation of the byte */
        image: string;
    }

    /**
    @param result a json stringified IGetPublicationCoverResponse object,
    so you'll need to parse the json before accessing the IGetPublicationCoverResponse properties
    */
    export interface IGetPublicationCoverRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetPublicationCoverRequestFailureFn {
        (result: string): null;
    }

    export interface IGetPublicationCoverRequest {
        successCallback: IGetPublicationCoverRequestSuccessFn;
        failureCallback: IGetPublicationCoverRequestFailureFn;
        callbackIdentifier?: string;
        publicationReference: string;
    }

}
