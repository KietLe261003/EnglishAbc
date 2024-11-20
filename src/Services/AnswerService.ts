import { request } from "../Common/Config/Request";

export const answerService={
    checkGrammar: async(token: string | null | undefined,id:number,content:string)=>{
        const contentCheck={
            content,
        }
        const res = await request.post(`answer/${id}/submit`,contentCheck,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        return res.data;
    }
}