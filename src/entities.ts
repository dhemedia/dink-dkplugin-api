module dk {

    export interface IGetEntitiesResponse extends IBasicResponse {
        entities: IEntityItem[];
    }

    /**
    @param result a json stringified IGetEntitiesResponse object,
    so you'll need to parse the json before accessing the IGetEntitiesResponse properties
    */
    export interface IGetEntitiesRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetEntitiesRequestFailureFn {
        (result: string): null;
    }

    export interface IGetEntitiesRequest {
        successCallback: IGetEntitiesRequestSuccessFn;
        failureCallback: IGetEntitiesRequestFailureFn;
        callbackIdentifier?: string;
        dinkEntityName: string;
        forceRefresh: boolean;
    }

}
