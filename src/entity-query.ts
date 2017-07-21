module dk {

    export interface IGetEntitiesFromQueryResponse extends IBasicResponse {
        entities: IEntityDetailedListDisplayItem[];
    }

    /**
    @param result a json stringified IGetEntitiesFromQueryResponse object,
    so you'll need to parse the json before accessing the IGetEntitiesFromQueryResponse properties
    */
    export interface IGetEntitiesFromQueryRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetEntitiesFromQueryRequestFailureFn {
        (result: string): null;
    }

    export interface IGetEntitiesFromQueryRequest {
        successCallback: IGetEntitiesFromQueryRequestSuccessFn;
        failureCallback: IGetEntitiesFromQueryRequestFailureFn;
        callbackIdentifier?: string;
        dinkEntityName: string;
        logicalName: string;
        id: string;
    }

}
