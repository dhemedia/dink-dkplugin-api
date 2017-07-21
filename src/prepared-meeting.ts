module dk {
    export interface IPreparedCrmPublication {
        title: string;
        comments: string;
        key: string;
        coverUrl: string;
    }

    export interface IPreparedMeeting {
        localId: string;
        regardingId: string;
        dinkRegardingEntityName: string;
        id: string;
        subject: string;
        comments: string;
        username: string;
        preparedPublications: IPreparedCrmPublication[];
    }
}
