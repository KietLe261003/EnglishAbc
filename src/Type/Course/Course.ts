interface Teacher{
  userId: number
}
export enum TypeCourse{
  IELTS='IELTS',
  TOEIC="TOEIC"
}
export interface CreateCourse {
  teacher: Teacher;
  name: string;
  description: string;
  image: string;
  type: TypeCourse;
  status: boolean;
  fee: number;
  quantitySession: number;
  startDatetime: string;
  endDatetime: string;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  courseId: number;
  creator: number;
  teacher: number;
  name: string;
  description: string;
  image: string;
  type: 'IELTS' |'TOEIC';
  status: boolean;
  fee: number;
  quantitySession: number;
  startDatetime: string;
  endDatetime: string;
  createdAt: string;
  updatedAt: string;
}
interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface courseResponseId{
  code: number,
  result: Course
}

export interface courseResponse{
  content: Course[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}