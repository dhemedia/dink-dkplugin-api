module dk {

    export interface IEntityFieldPickListValue {
        Value: string;
        Label: string;
        DefaultValue: boolean;
        ValidFor: string;
    }
    export interface IEntityField {
        FieldType: string;
        DisplayName: string;
        LogicalName: string;
        IsRequired: boolean;
        ListEntityType: string;
        DefaultValue: string;
        IsDependentPicklist: boolean;
        ControllingPicklist: string;
        ShowInDetails: boolean;
        ShowInForm: boolean;
        PickListValues: IEntityFieldPickListValue[];
    }

    export interface IEntityMetadata {
        DinkEntityName: string;
        DisplayName: string;
        DisplayCollectionName: string;
        Fields: IEntityField[];
    }

    export interface IGetMetaDataForEntityResponse extends IBasicResponse {
        entityMetaData: IEntityMetadata;
    }

    /**
    @param result a json stringified IGetMetaDataForEntityResponse object,
    so you'll need to parse the json before accessing the IGetMetaDataForEntityResponse properties
    */
    export interface IGetMetaDataForEntityRequestSuccessFn {
        (result: string): null;
    }

    /**
      @param result is a json stringified IBasicResponse object
    */
    export interface IGetMetaDataForEntityRequestFailureFn {
        (result: string): null;
    }

    export interface IGetMetaDataForEntityRequest {
        successCallback: IGetMetaDataForEntityRequestSuccessFn;
        failureCallback: IGetMetaDataForEntityRequestFailureFn;
        dinkEntityName: string;
        callbackIdentifier?: string;
    }

}
