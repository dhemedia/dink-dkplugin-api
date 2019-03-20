module dk {

    export interface IGetNonSyncedEntitiesResponse extends IBasicResponse {
        entities: IEntityItem[];
    }

    /**
    @param result a json stringified IGetNonSyncedEntitiesResponse object,
    so you'll need to parse the json before accessing the IGetNonSyncedEntitiesResponse properties
    */
    export interface IGetNonSyncedEntitiesRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetNonSyncedEntitiesRequestFailureFn {
        (result: string): null;
    }

    export interface IGetNonSyncedEntitiesRequest {
        successCallback: IGetNonSyncedEntitiesRequestSuccessFn;
        failureCallback: IGetNonSyncedEntitiesRequestFailureFn;
        callbackIdentifier?: string;
        dinkEntityName: string;
    }

}