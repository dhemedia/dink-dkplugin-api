module dk {

    export interface INetworkStatusProperties {
        isOnline: boolean;
        isOnlineSearch: boolean;
    }

    export interface IRegisterNetworkStatusChangeListenerResponse extends IBasicResponse, INetworkStatusProperties {

    }

    /**
    @param result a json stringified IRegisterNetworkStatusChangeListenerResponse object,
    so you'll need to parse the json before accessing the IRegisterNetworkStatusChangeListenerResponse properties
    */
    export interface IRegisterNetworkStatusChangeListenerRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IRegisterNetworkStatusChangeListenerRequestFailureFn {
        (result: string): null;
    }

    export interface INetworkChangeListenerFn {
        (result: INetworkStatusProperties): null;
    }

    export interface IRegisterNetworkStatusChangeListenerRequest {
        successCallback: IRegisterNetworkStatusChangeListenerRequestSuccessFn;
        failureCallback: IRegisterNetworkStatusChangeListenerRequestFailureFn;
        callbackIdentifier?: string;
        listener: INetworkChangeListenerFn;
    }

}
