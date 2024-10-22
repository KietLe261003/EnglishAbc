export interface ListDocumentObject {
    name: string,
    description: string,
    buttonContent?: string,
    percent?: number, //nếu ở khóa học và tài liệu thì nó  tiến độ làm còn nếu là bài thi thì là điểm số
    price?: number,
    type?: string,
    state?: string
}