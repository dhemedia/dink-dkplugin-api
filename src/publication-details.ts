module dk{

  /**
    The response to a successful getPublicationDetails request.
  */
  export interface IPublicationDetailsResponse{
    /** The reference a.k.a key of the publication */
    r : string;
    /** The name of the pubication */
    n:string;
    /** The comma separated names of the collections to which the publication belongs */
    c:string;
    /** The current edition name */
    e:string;
    /** The type of publication */
    t:string;
    /** The priority */
    p:string;
    /** The downloadURL */
    durl:string;
    /** The coverURL */
    curl:string;
    /** The accessibility, public or private */
    accessibility:string;
    /** The language */
    l:string;
    /** distributionIsAllowed, determines if publication can be mailed */
    distributionIsAllowed:boolean;
    /** The last update, date in string format */
    lu:string;
    /** The comma separated names of the keywords */
    k:string;
  }

  /**
    @param result a json stringified IPublicationDetailsResponse object,
    so you'll need to parse the json before accessing the IPublicationDetailsResponse properties
  */
  export interface IPublicationDetailsSuccessFn{
      (result: string): null;
  }

  export interface IPublicationDetailsFailureFn{
      (result: string): null;
  }
}
