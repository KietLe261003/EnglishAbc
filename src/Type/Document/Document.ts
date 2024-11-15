export interface Document{
    docId: number,
    course: string,
    content: string,
    creator: number,
    name: string,
    description: string,
    url: string,
    images: string,
    type: string,
    status: boolean,
    isFree: boolean,
    createdAt: string,
    updateAt: string,
    price?: number
}