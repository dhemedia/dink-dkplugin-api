module dk {

    export interface IEnterprise {
        key: string;
        name: string;
        useMicroSites: boolean;
        distributionIsAllowed: boolean;
    }

    export interface IEnterpriseDetailsResponse {
        enterprise: IEnterprise;
        result: boolean;
        message: string;
        cbId: string;
    }

    /**
    @param result a json stringified IEnterprise object,
    so you'll need to parse the json before accessing the IEnterprise properties
    */
    export interface IEnterpriseDetailsSuccessFn {
        (result: string): null;
    }

    /**
      @param result a json stringified IEnterprise object,
      so you'll need to parse the json before accessing the IEnterprise properties
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
