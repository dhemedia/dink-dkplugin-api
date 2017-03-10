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
        * Open another publication from within the current publication
        */
        openPublication(
            obj: IOpenPublicationRequest
        ): void;

        /**
        * Open a kiosk from within the current publication
        */
        openKiosk(
            obj: IOpenKioskRequest
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
        * recordState will save the desired publication state
        * @param storyKey is the namespace in which you want to store your data
        * @param magjetName is the key which will enable you to look up the data
        * @param state should be a json stringified object
        */
        recordState(
            publicationReference: string,
            storyKey: string,
            magjetName: string,
            state: string,
            successCallbackFn: IRecordStateSuccessFn,
            failureCallbackFn: IRecordStateFailureFn
        ): void;

        /**
        * getState will retrieve the recorded publication state
        * @param storyKey is the namespace in which the data is stored
        * @param magjetName is the key which will enable you to look up the data
        */
        getState(
            publicationReference: string,
            storyKey: string,
            magjetName: string,
            successCallbackFn: IGetStateSuccessFn,
            failureCallbackFn: IGetStateFailureFn
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

        /**
        * Retrieve details about file transactions
        * @param ids is an array of local keys of the transactions that you wish to know more about
        */
        getLocalFileTransactions(
            ids: string[],
            successCallbackFn: IGetLocalFileTransactionsSuccessFn,
            failureCallbackFn: IGetLocalFileTransactionsFailureFn,
            callbackIdentifier: string
        ): void;

        /**
        * Trigger the sending of data to the server
        */
        executeLocalFileTransactions(
            successCallbackFn: IExecuteLocalFileTransactionsSuccessFn,
            failureCallbackFn: IExecuteLocalFileTransactionsFailureFn,
            callbackIdentifier: string
        ): void;

        /**
        * Creates a transaction containing multiple files
        * @param ids is an array of strings (the fileIdentifiers passed into storeLocalFile)
        * @param notificationUrl is the url that will be called after all data is ready
        * @param deleteAfterSync indicates if files have to be removed after syncing
        */
        syncLocalFiles(
            ids: string[],
            notificationUrl: string,
            deleteAfterSync: boolean,
            successCallbackFn: ISyncLocalFilesSuccessFn,
            failureCallbackFn: ISyncLocalFilesFailureFn,
            callbackIdentifier: string
        ): void;

        /**
        * Delete a local file - which is a file owned by a publication
        * @param publicationKey is the key of the publication or an empty string (=current publication)
	      * @param fileIdentifier is the name of the file in the local database
        */
        deleteLocalFile(
            publicationKey: string,
            fileIdentifier: string,
            successCallbackFn: IDeleteLocalFileSuccessFn,
            failureCallbackFn: IDeleteLocalFileFailureFn,
            callbackIdentifier: string
        ): void;

        /**
        * Get a local file - which is a file owned by a publication
        * @param publicationKey is the key of the publication or an empty string (=current publication)
	      * @param fileIdentifier is the name of the file in the local database
        */
        getLocalFile(
            publicationKey: string,
            fileIdentifier: string,
            successCallbackFn: IGetLocalFileSuccessFn,
            failureCallbackFn: IGetLocalFileFailureFn,
            callbackIdentifier: string
        ): void;

        /**
        * Store a pdf as a local file - which is a file owned by a publication
        */
        storePdfAsLocalFile(
            obj: IStorePdfAsLocalFileRequest
        ): void;

        /**
        * Store a local file
        * @param publicationKey is the key of the publication or an empty string (=current publication)
	      * @param fileIdentifier is the name of the file in the local database
        * @param fileType is the type of file
        * @param fileContent is the content of the file
        * @param daysUntilExpiration determines when the local file should be removed - pass in 0 if it shouldn't be removed
        */
        storeLocalFile(
            publicationKey: string,
            fileIdentifier: string,
            fileType: LocalFileType,
            fileContent: string,
            daysUntilExpiration: number,
            successCallbackFn: IStoreLocalFileSuccessFn,
            failureCallbackFn: IStoreLocalFileFailureFn,
            callbackIdentifier: string
        ): void;

        /**
        * Get info about the current customer session
        */
        getCurrentSession(
            obj: IGetCurrentSessionRequest
        ): void;

    }
}
