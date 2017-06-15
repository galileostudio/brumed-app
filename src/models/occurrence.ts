export class OccurrenceModel {
    id: string;
    inspection_id: string;
    nr_code: number;
    nr_description: string;
    description: string;
    photo: string;
    due_time: string;
    severity: string;
    created_at: number;
    updated_at: number;
    constructor(){
        this.id = this.random_id();
        this.created_at = Date.now();
        this.updated_at = Date.now();
        this.nr_code = 0;
        this.nr_description = '';
        this.description = '';
        this.photo = '';
        this.due_time = '';
        this.severity = '';
    }
    random_id(){
        return '_' + Math.random().toString(36).substr(2, 9);
    }

}