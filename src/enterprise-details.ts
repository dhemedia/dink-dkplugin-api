module dk {

    export interface IEnterprise {
        key: string;
        name: string;
        useMicroSites: boolean;
        distributionIsAllowed: boolean;
    }

    export interface IEnterpriseDetailsResponse extends IBasicResponse{
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
