import { Document } from "../Type/Document/Document";

export const sortDocumentsByCreatedAtAsc = (documents: Document[]) => {
    return [...documents].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
};
  