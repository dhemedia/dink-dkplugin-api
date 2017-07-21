module dk {

    export interface IQueueSizeProperties {
        queueSize: number;
    }

    export interface IRegisterQueueSizeChangeListenerResponse extends IBasicResponse, IQueueSizeProperties {
    }

    /**
    @param result a json stringified IRegisterQueueSizeChangeListenerResponse object,
    so you'll need to parse the json before accessing the IRegisterQueueSizeChangeListenerResponse properties
    */
    export interface IRegisterQueueSizeChangeListenerRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IRegisterQueueSizeChangeListenerRequestFailureFn {
        (result: string): null;
    }

    export interface IQueueSizeChangeListenerFn {
        (result: IQueueSizeProperties): null;
    }

    export interface IRegisterQueueSizeChangeListenerRequest {
        successCallback: IRegisterQueueSizeChangeListenerRequestSuccessFn;
        failureCallback: IRegisterQueueSizeChangeListenerRequestFailureFn;
        callbackIdentifier?: string;
        listener: IQueueSizeChangeListenerFn;
    }

}
