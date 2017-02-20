module dk {

    /**
      @param result is a message confirming the event was registered
    */
    export interface IAnalyticEventSuccessFn {
        (result: string): null;
    }

    /**
      @param result is an error message
    */
    export interface IAnalyticEventFailureFn {
        (result: string): null;
    }

    export interface IAnalyticEventRequest {
        /** The key of the story for which we're registering the event */
        storyKey: string;
        /** The string identifier of the event */
        eventString: string;
        /** A json encoded object that is the payload*/
        payload?: string;
        successCallback: IAnalyticEventSuccessFn;
        failureCallback: IAnalyticEventFailureFn;
        /** callbackIdentifier allows you to distinguish between different callbacks */
        callbackIdentifier?: string;
    }
}
