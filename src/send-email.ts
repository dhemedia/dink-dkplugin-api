module dk {

  /**
  @param result a json stringified IBasicResponse object,
  so you'll need to parse the json before accessing the IBasicResponse properties
  */
  export interface ISendEmailSuccessFn {
    (result: string): null;
  }

  /**
    @param result a json stringified IBasicResponse object,
    so you'll need to parse the json before accessing the IBasicResponse properties
  */
  export interface ISendEmailFailureFn {
    (result: string): null;
  }

  export interface ISendEmailRequest {
    successCallback: ISendEmailSuccessFn;
    failureCallback: ISendEmailFailureFn;
    callbackIdentifier?: string;
    publicationKey?: string;
    /** the names of the pdf files you wish to include, 
     * these have to be local documents 
    */
    attachments?: string[];
    /** the body of the email */
    body: string;
    /** the subject of the email */
    subject: string;
    /** recipients should be list of email addresses */
    recipients: string[];
    /** ccRecipients should be list of email addresses */
    ccRecipients?: string[];
  }

}
