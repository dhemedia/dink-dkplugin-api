module dk {

  /**
  @param result a json stringified IBasicResponse object,
  so you'll need to parse the json before accessing the IBasicResponse properties
  */
  export interface IDeleteEntityRequestSuccessFn {
      (result: string): null;
  }

  /**
    @param result is a json stringified IBasicResponse object
  */
  export interface IDeleteEntityRequestFailureFn {
      (result: string): null;
  }

  export interface IDeleteEntityRequest {
      successCallback: IDeleteEntityRequestSuccessFn;
      failureCallback: IDeleteEntityRequestFailureFn;
      callbackIdentifier?: string;
      id: string;
      dinkEntityName: string;
  }

}
