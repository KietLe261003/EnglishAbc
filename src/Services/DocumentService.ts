import { request } from "../Common/Config/Request"
import { DocumentRequest } from "../Type/Document/DocumentResponse";

export const documentService = {
    getAllDocument: async ()=>{
        const res= await request.get("document/1").then((res)=>{
            return res.data;
        }).catch((e)=>{
            return e;
        });
        return res;
    },
    getDocumentById: async(token: string | null | undefined,docId: number)=>{
        const res = await request.get(`/document/1/${docId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return res.data;
    },
    getDocumentByLesson: async(lessonId: number)=>{
        const res = await request.get(`/document/${lessonId}`);
        return res.data;
    },
    createDocument: async(newDocument: DocumentRequest)=>{
        const res = await request.post(`/document/1`,newDocument)
        return res.data;
    },
    deleteDocument: async(id: number)=>{
        const res = await request.delete(`/document/1/${id}`);
        return res.data;
    },
    updateDocument: async(docId: number,newDocument: DocumentRequest)=>{
        const res = await request.put(`/document/1/${docId}`,newDocument)
        return res.data;
    },
}
