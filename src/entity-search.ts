module dk {

    export interface IGetEntitiesFromSearchResponse extends IBasicResponse {
        entities: IEntityDetailedListDisplayItem[];
    }

    /**
    @param result a json stringified IGetEntitiesFromSearchResponse object,
    so you'll need to parse the json before accessing the IGetEntitiesFromSearchResponse properties
    */
    export interface IGetEntitiesFromSearchRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetEntitiesFromSearchRequestFailureFn {
        (result: string): null;
    }

    export interface IGetEntitiesFromSearchRequest {
        successCallback: IGetEntitiesFromSearchRequestSuccessFn;
        failureCallback: IGetEntitiesFromSearchRequestFailureFn;
        callbackIdentifier?: string;
        dinkEntityName: string;
        /** The string to look for in the entity properties */
        value: string;
    }

}
