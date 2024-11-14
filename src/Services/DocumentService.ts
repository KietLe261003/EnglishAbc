import { request } from "../Common/Config/Request"
import { DocumentRequest } from "../Type/Document/DocumentResponse";

export const documentService = {
    getAllDocument: async ()=>{
        const res= await request.get("document").then((res)=>{
            return res.data;
        }).catch((e)=>{
            return e;
        });
        return res;
    },
    getDocumentById: async(token: string | null | undefined,docId: number)=>{
        const res = await request.get(`/document/${docId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return res.data;
    },
    createDocument: async(token: string | null | undefined,newDocument: DocumentRequest)=>{
        const res = await request.post(`/document/1`,newDocument,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        return res.data;
    }
}
