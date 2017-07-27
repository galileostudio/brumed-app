export class RegulationModel {
    id: string;
    title: string;
    description: string;    
    
    constructor(){
        this.id = this.random_id();
        this.title = "";
        this.description = "";
    }
    
    random_id(){
        return '_' + Math.random().toString(36).substr(2, 20);
    }
}