import { Document } from './Document';

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

export interface DocumentResponseGetAll {
  content: Document[];
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

export interface DocumentResponse{
  code: number,
  result: Document
}

export interface DocumentRequest {
  name: string;
  content: string;
  description: string;
  url: string;
  images: string;
  type: 'PDF' | 'VIDEO' | 'TXT' | string; // hoặc các loại khác nếu cần
  status: boolean;
  isFree: boolean;
}
