export class CompanyModel {
    id: number;
    name: string;
    cnpj: string;
    phone: string;
    contact: string;
    created_at: number;
    updated_at: number;
    constructor(){
        this.name = "";
        this.cnpj = "";
        this.phone = "";
        this.contact = "";
        this.created_at = Date.now();
        this.updated_at = Date.now();
    }

}