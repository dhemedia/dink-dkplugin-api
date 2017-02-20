module dk{

  export interface IStat{
    /** a description of the story/page or path */
    description : string;
    /** the story id */
  	storyId : number;
    /** formatted date yyyy-MM-dd HH:mm:ss.sss */
  	creationDate : string;
    /** p for portrait, l for landscape */
    orientation : "l";
    /** mode is deprecated, set to "full_version" */
  	mode : string;
  	duration : number;
    /** isComplete is true when someone leaves the story/page */
    isComplete : boolean;
    /** the identifier of this specific visit, set when opening a publication */
  	reference : string;
  }

  export interface IVisit{
    /** the current edition key */
    magazineId : string;
    /** deprecated, set to an empty string */
  	subscriberId : string;
  	stories : IStat[];
    /** the identifier of this specific visit, set when opening a publication */
  	reference : string;
  	duration : number;
    /** isComplete is true when someone leaves the publication */
  	isComplete : boolean;
    /** formatted creation date yyyy-MM-dd HH:mm:ss.sss */
  	creationDate : string;
  }


  /**
    It's important to note that this success function is not always called
  */
  export interface IRecordStatsSuccessFn{
      (result: string): null;
  }

  /**
    It's important to note that this failure function is not always called
  */
  export interface IRecordStatsFailureFn{
      (result: string): null;
  }
}
