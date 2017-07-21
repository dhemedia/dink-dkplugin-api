module dk {
    export interface IDealPublicationForCrmRequest {
        Title: string;
        Key: string;
        StartTime: string;
        EndTime: string;
        Comments: string;
        CoverUrl: string;
    }

    export interface IDealPicForCrmRequest {
        Url: string;
        FileName: string;
        Created: string;
        Comments: string;
    }

    export interface IDealEventForCrmRequest {
        Name: string;
        PublicationKey: string;
        StoryId: string;
        Created: string;
        Comments: string;
        Payload: Object;
    }

    export interface IDealMicrositePublicationForCrmRequest {
        Title: string;
        Key: string;
        Comments: string;
        CoverUrl: string;
    }

    export interface IDealMicrositeForCrmRequest {
        Message: string;
        Url: string;
        ToAddress: string;
        Created: string;
        Comments: string;
        Publications: IDealMicrositePublicationForCrmRequest[];
    }
}
