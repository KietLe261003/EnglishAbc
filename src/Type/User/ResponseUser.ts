import { User } from "./User";

interface Role {
    roleId: number;
    name: string;
}
export interface responseUser{
    code: number,
    result: string,
    user: string,
    fullname: string,
    email: string,
    phone: string,
    descript: string,
    status: boolean,
    role: Role
}

// Interface cho Sort thông tin
interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

// Interface cho Pageable
interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

// Interface chính cho toàn bộ JSON
export interface ResponseDataAllUser {
    content: User[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}