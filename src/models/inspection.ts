export class InspectionModel {
    id: number;
    description: string;
    kind: string;
    severity: string;
    created_at: number;
    updated_at: number;
    constructor(){
        this.description = "";
        this.severity = "";
        this.kind = "";
        this.created_at = Date.now();
        this.updated_at = Date.now();
    }

}