export class CompanyModel {
    id: string;
    name: string;
    cnpj: string;
    phone: string;
    contact: string;
    created_at: number;
    updated_at: number;
    constructor(){
        this.id = this.random_id();
        console.log("========"+this.id);
        this.name = "";
        this.cnpj = "";
        this.phone = "";
        this.contact = "";
        this.created_at = Date.now();
        this.updated_at = Date.now();
    }

    random_id(){
        return '_' + Math.random().toString(36).substr(2, 20);
    }

}