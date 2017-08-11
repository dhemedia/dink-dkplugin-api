module dk {
    export interface IEntityItem {
        Id: string;
        /** the actual entity data, the object properties will vary.*/
        Data: Object;
        RelatedEntities: Object;
    }
}
