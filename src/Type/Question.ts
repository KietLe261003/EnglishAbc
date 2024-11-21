export interface QuestionType {
    questionId: number;
    exerciseId: number;
    creatorId: number;
    text: string;
    status: boolean;
    score: number; // Assuming this is a decimal value
    questionType: string; // Extendable as needed
    skillType: "WRITING" | "READING" | "LISTENING" | "SPEAKING"; // Extendable as needed
    options?: { label: string; key: string }[]
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
  
export interface QuestionResponse {
    content: QuestionType[];
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
  