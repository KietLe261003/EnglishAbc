export interface ListDocumentObject {
    id: number,
    name: string,
    description: string,
    image?: string,
    buttonContent?: string,
    percent?: number, //nếu ở khóa học và tài liệu thì nó  tiến độ làm còn nếu là bài thi thì là điểm số
    price?: number,
    type?: string,
    state?: string
}