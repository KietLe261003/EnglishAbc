export interface User {
    id?: string,
    fullname: string,
    username: string,
    email: string,
    password: string,
    phone?: string,
    dob?: string,
    gender?: string,
    address?: string,
    desciption?: string,
    role: string
}
interface Role {
    roleId: number;
    name: string;
}
  
export interface AuthResponse {
    token: string;
    authenticated: boolean;
    role: Role;
    userId: number;
}
export interface responseLogin{
    code: number,
    result: AuthResponse,
}