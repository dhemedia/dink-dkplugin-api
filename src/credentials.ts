module dk {

    export interface ICredentialsResponse extends IBasicResponse{
        login: string;
        password: string;
    }

    /**
      @param result a json stringified ICredentialsResponse object,
      so you'll need to parse the json before accessing the ICredentialsResponse properties
    */
    export interface ICredentialsSuccessFn {
        (result: string): null;
    }

    /**
      @param result is an error message
    */
    export interface ICredentialsFailureFn {
        (result: string): null;
    }
}
