module dk {

    export interface IDealAppointmentForCrmRequest {
        events: IDealEventForCrmRequest[];
        microsites: IDealMicrositeForCrmRequest[];
        publications: IDealPublicationForCrmRequest[];
        pics: IDealPicForCrmRequest[];
    }

    export interface IGetCurrentMeetingResponse extends IBasicResponse {
        meeting: IDealAppointmentForCrmRequest;
    }

    /**
    @param result a json stringified IGetCurrentMeetingResponse object,
    so you'll need to parse the json before accessing the IGetCurrentMeetingResponse properties
    */
    export interface IGetCurrentMeetingRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetCurrentMeetingRequestFailureFn {
        (result: string): null;
    }

    export interface IGetCurrentMeetingRequest {
        successCallback: IGetCurrentMeetingRequestSuccessFn;
        failureCallback: IGetCurrentMeetingRequestFailureFn;
        callbackIdentifier?: string;
    }

}
