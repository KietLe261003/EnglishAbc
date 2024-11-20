export interface Exercise {
    exerciseId: number;
    lesson: string;
    creator: number;
    title: string;
    content: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    status: boolean;
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
  
export interface ExerciseResponse {
    content: Exercise[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    empty: boolean;
  }
  