module dk {

    export enum OpenPublicationFailureErrorCode {
        NO_ACCESS = <any>'NO_ACCESS',
        NOT_INSTALLED = <any>'NOT_INSTALLED'
    }

    export interface IOpenPublicationFailureResponse extends IBasicResponse {
        /** The error code */
        code: OpenPublicationFailureErrorCode;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IOpenPublicationSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IOpenPublicationFailureResponse object
    */
    export interface IOpenPublicationFailureFn {
        (result: string): null;
    }

    export interface IOpenPublicationRequest {
        /** The key of the story on which we like to open the publication */
        storyKey?: string;
        /** The key/reference of the target publication */
        publicationKey?: string;
        /** The name of the target publication, is required when publicationKey is missing*/
        publicationName?: string;
        /**
          Indicates if you want to return to previous publication upon exiting/closing the publication,
          default value is false
        */
        returnToPreviousPublicationWhenClosed?: boolean;
        /**
          Indicates if you want to refresh the previous publication when returning to it, only applicable if returnToPreviousPublicationWhenClosed is true.
          Default value is false
        */
        refreshWhenReturningToPreviousPublication?: boolean;
        successCallback: IOpenPublicationSuccessFn;
        failureCallback: IOpenPublicationFailureFn;
        /** callbackIdentifier allows you to distinguish between different callbacks */
        callbackIdentifier?: string;
        /**
          Reference for LMS platform
        */
        referenceId?: string;
    }
}
