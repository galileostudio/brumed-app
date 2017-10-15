export class User {
  constructor(
    public id: number = 0,
    public name: string = '',
    public code: number = 0,
    public email: string = '',
    public reset_password_token: string = '',
    public reset_password_sent_at: string = '',
    public remember_created_at: string = '',
    public sing_in_count: string = '',
    public current_sign_in_at: string = '',
    public last_sign_in_at: string = '',
    public current_sign_in_ip: string = '',
    public last_sign_in_ip: string = '',
    public created_at: string = '',
    public updated_at: string = '',
    public encrypted_password: string = ''
  ) { }


}


