module dk {

    export interface IPublicationState {
        publicationKey: string,
        /** storyKey is the namespace in which the data is stored */
        storyKey: string,
        /** magjetName is the key which will enable you to look up the data */
        magjetName: string,
        /** state is a json stringified object */
        state: string
    }

    /**
      The response to a successful getState request.
    */
    export interface IPublicationStateResponse {
        state: IPublicationState;
    }

    /**
      @param result a json stringified IPublicationStateResponse object,
      so you'll need to parse the json before accessing the IPublicationStateResponse properties
    */
    export interface IGetStateSuccessFn {
        (result: string): null;
    }

    /**
      @param result contains a short string describing the result of the call
    */
    export interface IGetStateFailureFn {
        (result: string): null;
    }
}
