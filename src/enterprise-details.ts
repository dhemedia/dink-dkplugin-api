module dk {

    export enum SimplifiedContentSharingMode {
        DISABLE_SHARING = <any>'DISABLE_SHARING',
        ACCOUNT_HUB_ONLY = <any>'ACCOUNT_HUB_ONLY',
        EMAIL_ONLY = <any>'EMAIL_ONLY',
        ACCOUNT_HUB_AND_EMAIL = <any>'ACCOUNT_HUB_AND_EMAIL'
    }

    export interface IEnterprise {
        key: string;
        name: string;
        useMicroSites: boolean;
        distributionIsAllowed: boolean;
        contentSharingMode: SimplifiedContentSharingMode
    }

    export interface IEnterpriseDetailsResponse extends IBasicResponse {
        enterprise: IEnterprise;
    }

    /**
    @param result a json stringified IEnterpriseDetailsResponse object,
    so you'll need to parse the json before accessing the IEnterpriseDetailsResponse properties
    */
    export interface IEnterpriseDetailsSuccessFn {
        (result: string): null;
    }

    /**
      @param result a json stringified IEnterpriseDetailsResponse object,
      so you'll need to parse the json before accessing the IEnterpriseDetailsResponse properties
    */
    export interface IEnterpriseDetailsFailureFn {
        (result: string): null;
    }

    export interface IEnterpriseDetailsRequest {
        successCallback: IEnterpriseDetailsSuccessFn;
        failureCallback: IEnterpriseDetailsFailureFn;
        callbackIdentifier?: string;
    }
}
