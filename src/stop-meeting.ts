module dk {

    /**
    @param result a json stringified IBasicResponse object,
    so you'll need to parse the json before accessing the IBasicResponse properties
    */
    export interface IStopMeetingRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IStopMeetingRequestFailureFn {
        (result: string): null;
    }

    export interface IStopMeetingRequest {
        successCallback: IStopMeetingRequestSuccessFn;
        failureCallback: IStopMeetingRequestFailureFn;
        callbackIdentifier?: string;
        subject: string;
        description: string;
        meetingData: Object;
        saveToCrm: boolean;
        entityId: string;
        dinkEntityName: string;
    }

}
