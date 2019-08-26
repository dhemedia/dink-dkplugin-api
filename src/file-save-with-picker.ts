module dk {

    export interface ISaveFileWithPickerResponse extends IBasicResponse {
        /** path is the absolute path to the local file that was created */
        path: string;
    }

    /**
    @param result a json stringified ISaveFileWithPickerResponse object,
    so you'll need to parse the json before accessing the ISaveFileWithPickerResponse properties
    */
    export interface ISaveFileWithPickerRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface ISaveFileWithPickerRequestFailureFn {
        (result: string): null;
    }

    export interface ISaveFileWithPickerRequest {
        successCallback: ISaveFileWithPickerRequestSuccessFn;
        failureCallback: ISaveFileWithPickerRequestFailureFn;
        callbackIdentifier?: string;
        fileName: string;
        fileType: FileType;
        /** The contents of the file, a base-64 encoded string if not txt or json. */
        fileContent: string;
    }

}
