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
        * Get an authentication token,
        * only available in apps that work with SSO
        */
        getAuthToken(
            obj: IAuthTokenRequest
        ): void;

        /**
        * Retrieve details about the publication
        * @param publicationReference is an identifier for the publication, pass in empty string to retrieve current publication
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
        * Close current publication
        */
        closeCurrentPublication(
            obj: ICloseCurrentPublicationRequest
        ): void;

        /**
        * Open a kiosk from within the current publication
        */
        openKiosk(
            obj: IOpenKioskRequest
        ): void;

        /**
        * Show a local pdf document in a pdf viewer
        * @param canBeShared indicates if file can be added to account hub, default value will depend on publication from which the document is opened
        * @param canBeAnnotated indicates if annotations option needs to be available, default value is true
        */
        showPdfDocument(
            pdfName: string,
            pageNumber: number,
            successCallbackFn: IShowPdfDocumentSuccessFn,
            failureCallbackFn: IShowPdfDocumentFailureFn,
            canBeShared?: boolean,
            canBeAnnotated?: boolean
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
        * @param publicationReference is an identifier for the publication, usually the publication name
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
        * @param publicationReference is an identifier for the publication, usually the publication name
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
        * Choose content sharing option
        */
       chooseContentSharingOption(
            obj: IChooseContentSharingOptionRequest
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
        * Send an email with pdf files as attachments
        */
        sendEmail(
            obj: ISendEmailRequest
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
        * Delete a file, only available in beta versions
        */
        deleteFile(
            obj: IDeleteFileRequest
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
        * Get a file, only available in beta versions
        */
        getFile(
            obj: IGetFileRequest
        ): void;

        /**
        * Get file contents, only available in beta versions.
        * For .png, .jpg, .txt and .json files only.
        */
        getFileContents(
            obj: IGetFileContentsRequest
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
        * Store a file (without picker)
        */
        storeFile(
            obj: IStoreFileRequest
        ): void;

        /**
        * Save a file by using a file picker
        */
        saveFileWithPicker(
            obj: ISaveFileWithPickerRequest
        ): void;

        /**
        * Get info about the current customer session
        */
        getCurrentSession(
            obj: IGetCurrentSessionRequest
        ): void;

        /**
        * Get CRM configuration.
        * This is only available for customers who have enabled CRM integration.
        */
        getCrmConfiguration(
            obj: IGetCrmConfigurationRequest
        ): void;

        /**
        * Get metadata for a CRM entity.
        * This is only available for customers who have enabled CRM integration.
        */
        getMetaDataForEntity(
            obj: IGetMetaDataForEntityRequest
        ): void;

        /**
        * Get queries for a CRM entity.
        * This is only available for customers who have enabled CRM integration.
        */
        getQueriesForEntity(
            obj: IGetQueriesForEntityRequest
        ): void;

        /**
        * Get CRM entities by query.
        * This is only available for customers who have enabled CRM integration.
        */
        getEntitiesFromQuery(
            obj: IGetEntitiesFromQueryRequest
        ): void;

        /**
        * Get related CRM entities.
        * This is only available for customers who have enabled CRM integration.
        */
        getRelatedEntities(
            obj: IGetRelatedEntitiesRequest
        ): void;

        /**
        * Get CRM entities.
        * This is only available for customers who have enabled CRM integration.
        */
        getEntities(
            obj: IGetEntitiesRequest
        ): void;

        /**
        * Search for CRM entities.
        * This is only available for customers who have enabled CRM integration.
        */
        getEntitiesFromSearch(
            obj: IGetEntitiesFromSearchRequest
        ): void;

        /**
        * Store a CRM entity for offline usage.
        * This is only available for customers who have enabled CRM integration.
        */
        setCrmOfflineEntity(
            obj: ISetCrmOfflineEntityRequest
        ): void;

        /**
        * Decide if the CRM will fetch online data or just local, offline data.
        * This is only available for customers who have enabled CRM integration.
        */
        setIsCrmOnlineSearch(
            obj: ISetIsCrmOnlineSearchRequest
        ): void;

        /**
        * Register a listener that will be called when the network status changes.
        */
        registerNetworkStatusChangeListener(
            obj: IRegisterNetworkStatusChangeListenerRequest
        ): void;

        /**
        * Register a listener that will be called when the queue size changes.
        * This is only available for customers who have enabled CRM integration.
        */
        registerQueueSizeChangeListener(
            obj: IRegisterQueueSizeChangeListenerRequest
        ): void;

        /**
        * Add or update a related CRM entity.
        * This is only available for customers who have enabled CRM integration.
        */
        addOrUpdateRelatedEntity(
            obj: IAddOrUpdateRelatedEntityRequest
        ): void;

        /**
        * Delete a CRM entity.
        * This is only available for customers who have enabled CRM integration.
        */
        deleteEntity(
            obj: IDeleteEntityRequest
        ): void;

        /**
        * Get documents related to an entity
        * This is only available for customers who have enabled CRM integration.
        */
        getEntityRelatedDocuments(
            obj: IGetEntityRelatedDocumentsRequest
        ): void;

        /**
        * Get visit analytics reports of CRM entity.
        * This is only available for customers who have enabled CRM integration.
        */
        getVisitAnalyticsReports(
            obj: IGetVisitAnalyticsReportsRequest
        ): void;

        /**
        * Get entities that have not been synced.
        * This is only available for customers who have enabled CRM integration.
        */
        getNonSyncedEntities(
            obj: IGetNonSyncedEntitiesRequest
        ): void;

        /**
        * Start preparation of meeting.
        * This is only available for customers who have enabled CRM integration.
        */
        startPreparation(
            obj: IStartPreparationRequest
        ): void;

        /**
        * Get specific meeting preparation.
        * This is only available for customers who have enabled CRM integration.
        */
        getPreparation(
            obj: IGetPreparationRequest
        ): void;

        /**
        * Get current meeting preparation.
        * This is only available for customers who have enabled CRM integration.
        */
        getCurrentPreparation(
            obj: IGetCurrentPreparationRequest
        ): void;

        /**
        * Stop active meeting preparation.
        * This is only available for customers who have enabled CRM integration.
        */
        stopPreparation(
            obj: IStopPreparationRequest
        ): void;

        /**
        * Start meeting.
        * This is only available for customers who have enabled CRM integration.
        */
        startMeeting(
            obj: IStartMeetingRequest
        ): void;

        /**
        * Get current meeting.
        * This is only available for customers who have enabled CRM integration.
        */
        getCurrentMeeting(
            obj: IGetCurrentMeetingRequest
        ): void;

        /**
        * Stop meeting.
        * This is only available for customers who have enabled CRM integration.
        */
        stopMeeting(
            obj: IStopMeetingRequest
        ): void;

        /**
        * Get cover of specific publication
        */
        getPublicationCover(
            obj: IGetPublicationCoverRequest
        ): void;

        /**
        * Get picture by url.
        */
        getPictureByUrl(
            obj: IGetPictureByUrlRequest
        ): void;

        /**
        * Pick files that you want to add to a visit report.
        */
        pickAdditionalFilesForVisitReport(
            obj: IPickAdditionalFilesForVisitReportRequest
        ): void;

        /**
        * Show a native alert popup
        * @param message the message to be shown
        * @param title the title of the popup
        */
        alert(
            message: string,
            title?: string,
        ): void;

    }
}
