module dk {

    export interface IGetRelatedEntitiesResponse extends IBasicResponse {
        entities: IEntityDetailedListDisplayItem[];
    }

    /**
    @param result a json stringified IGetRelatedEntitiesResponse object,
    so you'll need to parse the json before accessing the IGetRelatedEntitiesResponse properties
    */
    export interface IGetRelatedEntitiesRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetRelatedEntitiesRequestFailureFn {
        (result: string): null;
    }

    export interface IGetRelatedEntitiesRequest {
        successCallback: IGetRelatedEntitiesRequestSuccessFn;
        failureCallback: IGetRelatedEntitiesRequestFailureFn;
        callbackIdentifier?: string;
        dinkEntityName: string;
        dinkRelatedEntityName: string;
        regardingId?: string;
        id: string;
        forceRefresh: boolean;
    }

}
