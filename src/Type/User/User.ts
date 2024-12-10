
export interface Role {
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
export interface User {
    id?: string,
    fullname: string,
    username: string,
    email: string,
    password: string,
    phone?: string,
    dob?: string,
    gender?: string,
    level?: string,
    address?: string,
    description?: string,
    role?: Role
}
export interface responseInfoUser{
    code: number,
    result: User
}
