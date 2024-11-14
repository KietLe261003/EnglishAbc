import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

export const uploadFireBase = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `FileEnglishAbc/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  try {
    await uploadTask;
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.log(error);
    throw new Error("Upload failed");
  }
};
