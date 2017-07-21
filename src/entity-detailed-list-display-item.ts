module dk {
    export interface IEntityDetailedListDisplayItem {
        Id: string;
        LocalId: string;
        Status: number;
        LastUpdate: string;
        /** the actual entity data, the object properties will vary.*/
        Data: Object;
    }
}
