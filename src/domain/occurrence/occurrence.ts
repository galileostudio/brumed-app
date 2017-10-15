export class Occurrence{
  constructor(
    public id: number,
    public description: string,
    public severity: string,
    public todo: string,
    public created_at: string,
    public updated_at: string,
    public image: string,
    public correction: string,
    public regulation_id: number,
    public inspection_id: number
  ){}
}
