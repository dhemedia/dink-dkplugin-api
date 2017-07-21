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

    export interface IStartMeetingRequest {
        successCallback: IStartMeetingRequestSuccessFn;
        failureCallback: IStartMeetingRequestFailureFn;
        callbackIdentifier?: string;
        entityId: string;
        email?: string;
        name?: string;
        dinkEntityName: string;
        parentEntityId: string;
    }

}
