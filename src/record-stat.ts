module dk {

    export interface IStat {
        /** a description of the story/page or path */
        description: string;
        /** the story id */
        storyId: number;
        /** formatted date yyyy-MM-dd HH:mm:ss.sss */
        creationDate: string;
        /** time in utc format yyyy-MM-ddTHH:mm:ssZ */
        creationDateUtc: string;
        /** local time in ISO8601 format. Example: yyyy-MM-ddTHH:mm:ss+01:00 */
        creationDateLocal: string;
        /** p for portrait, l for landscape */
        orientation: "l";
        /** mode is deprecated, set to "full_version" */
        mode: string;
        duration: number;
        /** isComplete is true when someone leaves the story/page */
        isComplete: boolean;
        /** the identifier of this specific visit, set when opening a publication */
        reference: string;
    }

    export interface IVisit {
        /** the current edition key */
        magazineId: string;
        /** deprecated, set to an empty string */
        subscriberId: string;
        stories: IStat[];
        /** the identifier of this specific visit, set when opening a publication */
        reference: string;
        duration: number;
        /** isComplete is true when someone exits the publication */
        isComplete: boolean;
        /** formatted creation date yyyy-MM-dd HH:mm:ss.sss */
        creationDate: string;
        /** time in utc format yyyy-MM-ddTHH:mm:ssZ */
        creationDateUtc: string;
        /** local time in ISO8601 format. Example: yyyy-MM-ddTHH:mm:ss+01:00 */
        creationDateLocal: string;
        /** isOnline is true if user has internet access when creating the visit. Default is false */
        isOnline?: boolean;
    }


    /**
      It's important to note that this success function is not always called
      @param result contains a short string describing the result of the call
    */
    export interface IRecordStatsSuccessFn {
        (result: string): null;
    }

    /**
      It's important to note that this failure function is not always called
      @param result contains a short string describing the result of the call
    */
    export interface IRecordStatsFailureFn {
        (result: string): null;
    }
}
