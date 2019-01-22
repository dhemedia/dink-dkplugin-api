module dk {

    /**
    @param result a json stringified IBasicResponse object,
    so you'll need to parse the json before accessing the IBasicResponse properties
    */
    export interface IStartMeetingRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IStartMeetingRequestFailureFn {
        (result: string): null;
    }

    export interface ICrmAccount {
        name: string;
        crmId: string;
    }

    export interface ICrmCustomer {
        firstName: string;
        lastName: string;
        email: string;
    }

    export interface IStartMeetingRequest {
        successCallback: IStartMeetingRequestSuccessFn;
        failureCallback: IStartMeetingRequestFailureFn;
        callbackIdentifier?: string;
        entityId: string;
        email?: string;
        name?: string;
        dinkEntityName: string;
        parentEntityId: string;
        account?: ICrmAccount;
        customers?: ICrmCustomer[];
    }

}
