import { request } from "../Common/Config/Request"

export const documentService = {
    getAllDocument: async ()=>{
        const res= await request.get("document").then((res)=>{
            return res.data;
        }).catch((e)=>{
            return e;
        });
        return res;
    }
}
