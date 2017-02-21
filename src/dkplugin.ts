module dk {
    /**
    * DKPlugin is the API offered to communicate from Javascript to native code
    */
    export interface DKPlugin {

        /**
        * Retrieve enterprise details of the enterprise to which the user belongs
        */
        getEnterpriseDetails(
            obj: IEnterpriseDetailsRequest
        ): void;

        getCredentials(
            successCallbackFn: ICredentialsSuccessFn,
            failureCallbackFn: ICredentialsFailureFn
        ): void;

        /**
        * Retrieve details about the current publication
        */
        getPublicationDetails(
            publicationReference: string,
            successCallbackFn: IPublicationDetailsSuccessFn,
            failureCallbackFn: IPublicationDetailsFailureFn
        ): void;

        /**
        * Register events identified by an eventString
        * and associate them with an optional payload
        */
        recordAnalyticEventV2(
            obj: IAnalyticEventRequest
        ): void;

        /**
        * Open another publication from the within the current publication
        */
        openPublication(
            obj: IOpenPublicationRequest
        ): void;

        /**
        * Show a local pdf document in a pdf viewer
        */
        showPdfDocument(
            pdfName: string,
            pageNumber: number,
            successCallbackFn: IShowPdfDocumentSuccessFn,
            failureCallbackFn: IShowPdfDocumentFailureFn
        ): void;

        /**
        * Show a remote pdf document in a pdf viewer
        */
        showRemotePdfDocument(
            obj: IShowRemotePdfDocumentRequest
        ): void;

        /**
        * recordStats will gather stats per page.
        * @param stat should be a json stringified IVisit object.
        */
        recordStats(
            publicationReference: string,
            stat: string,
            successCallbackFn: IRecordStatsSuccessFn,
            failureCallbackFn: IRecordStatsFailureFn
        ): void;

        /**
        * Add pdf document to microsite
        */
        addPdfToMicroSite(
            obj: IAddPdfToMicroSiteRequest
        ): void;

        /**
        * Open a url in a browser
        */
        openBrowser(
            obj: IOpenBrowserRequest
        ): void;

        /**
        * Retrieve the user profile
        */
        getUserProfile(
            successCallbackFn: IUserProfileSuccessFn,
            failureCallbackFn: IUserProfileFailureFn
        ): void;

        /**
        * Take a screenshot and save it as a file
        */
        generateImageFromScreenCapture(
            obj: IGenerateImageFromScreenCaptureRequest
        ): void;

        /**
        * Save an image as a pdf
        */
        generatePdfFromImage(
            obj: IGeneratePdfFromImageRequest
        ): void;

        /**
        * Combine multiple pdf files into a single pdf file
        */
        concatPdf(
            obj: IConcatPdfRequest
        ): void;

        /**
        * Get a list of available pdf files
        */
        getLocalPdfDocuments(
            obj: IGetLocalPdfDocumentsRequest
        ): void;

        /**
        * Mail a list of pdf files
        */
        mailLocalPdfDocuments(
            obj: IMailLocalPdfDocumentsRequest
        ): void;

    }
}
