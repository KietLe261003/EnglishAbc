export interface GrammarError {
    message: string; // Mô tả lỗi
    suggestions: string[]; // Các gợi ý sửa lỗi
    start: number; // Vị trí bắt đầu của lỗi trong chuỗi
    end: number; // Vị trí kết thúc của lỗi trong chuỗi
}

// Định nghĩa interface chính cho dữ liệu
export interface Answer {
    answerId: number | null; // ID của câu trả lời, có thể là null
    content: string; // Nội dung câu trả lời
    questionId: number; // ID của câu hỏi liên quan
    userId: number; // ID của người dùng
    grammarErrors: GrammarError[]; // Danh sách lỗi ngữ pháp
}


export interface AnswerChoice {
    answerId: number;
    questionId: number;
    content: string;
    userId: number;
    isCorrect: boolean;
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
  
export interface ResponseDataAnswer {
    content: Answer[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
  }
  