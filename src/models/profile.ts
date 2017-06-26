export class ProfileModel {
    id: string;
    name: string;
    phone: number;
    position: string;
    constructor(){
        this.id = this.random_id();
        console.log("========"+this.id);
        this.name = "";
        this.phone = 0;
        this.position = "";
    }
    random_id(){
        return '_' + Math.random().toString(36).substr(2, 9);
    }

}