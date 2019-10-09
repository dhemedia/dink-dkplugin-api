module dk {

    export enum ChooseContentSharingOptionResultType {
        EMAIL = <any>'EMAIL',
        ACCOUNT_HUB = <any>'ACCOUNT_HUB'
    }

    export interface IChooseContentSharingOptionResponse extends IBasicResponse {
        /**
          Does the user want to share by email or account hub?
        */
        type: ChooseContentSharingOptionResultType
    }

    /**
      @param result is a json stringified IChooseContentSharingOptionResponse object
    */
    export interface IChooseContentSharingOptionSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IChooseContentSharingOptionFailureFn {
        (result: string): null;
    }

    export interface IChooseContentSharingOptionRequest {
        successCallback: IChooseContentSharingOptionSuccessFn;
        failureCallback: IChooseContentSharingOptionFailureFn;
        callbackIdentifier?: string;
    }
}
