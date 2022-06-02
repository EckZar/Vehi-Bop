interface IFilters{
    urlRequest: string;
    responsibleFace?: string;
    vehasNames?: Array<string>;
    ownerId?: number;
    additionalFields?: Array<string>;
    test(): void;
}
  
class APIMethod implements IFilters {

    urlRequest: string;
    responsibleFaces: Array<string>;
    vehasNames: Array<string>;
    ownerId: number;
    additionalFields: Array<string>;

    constructor(urlRequest: string, responsibleFaces: Array<string>, vehasNames: Array<string>, ownerId: number, additionalFields: Array<string>){
        this.urlRequest = urlRequest;
        this.responsibleFaces = responsibleFaces;
        this.vehasNames= vehasNames;
        this.ownerId = ownerId;
        this.additionalFields = additionalFields;
    }

    test(){}

}

APIMethod.prototype.test = () => {} 