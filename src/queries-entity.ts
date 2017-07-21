module dk {

    export interface IEntityQuery {
        Id: string;
        DisplayName: string;
        LogicalName: string;
        IsDefault: boolean;
    }

    export interface IGetQueriesForEntityResponse extends IBasicResponse {
        queries: IEntityQuery[];
    }

    /**
    @param result a json stringified IGetQueriesForEntityResponse object,
    so you'll need to parse the json before accessing the IGetQueriesForEntityResponse properties
    */
    export interface IGetQueriesForEntityRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetQueriesForEntityRequestFailureFn {
        (result: string): null;
    }

    export interface IGetQueriesForEntityRequest {
        successCallback: IGetQueriesForEntityRequestSuccessFn;
        failureCallback: IGetQueriesForEntityRequestFailureFn;
        dinkEntityName: string;
        callbackIdentifier?: string;
    }

}
