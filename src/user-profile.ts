module dk {

    export interface IUserProfile {
        /** user language */
        l: string;
        /** user email */
        email: string;
        /** the key/reference of the user enterprise */
        enterprise: string;
        /** the name of the user */
        name: string;
        /** the region of the user */
        region: string;
    }

    /**
      @param result contains a json stringified IUserProfile object
    */
    export interface IUserProfileSuccessFn {
        (result: string): null;
    }

    export interface IUserProfileFailureFn {
        (result: string): null;
    }
}
