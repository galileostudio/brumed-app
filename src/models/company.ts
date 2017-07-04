export class CompanyModel {
    id: string;
    name: string;
    cnpj: string;
    phone: string;
    address: string;
    contact: string;
    created_at: number;
    updated_at: number;
    constructor(){
        this.id = this.random_id();
        console.log("========"+this.id);
        this.name = "";
        this.cnpj = "";
        this.phone = "";
        this.address = "";
        this.contact = "";
        this.created_at = Date.now();
        this.updated_at = Date.now();
    }

    random_id(){
        return '_' + Math.random().toString(36).substr(2, 20);
    }

}