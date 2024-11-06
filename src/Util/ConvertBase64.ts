import Compressor from "compressorjs";

const compressImage = (file: File): Promise<File | Blob> => {
    return new Promise((resolve, reject) => {
        new Compressor(file, {
            quality: 0.6,
            success(result) {
                resolve(result);
            },
            error(err) {
                reject(err);
            },
        });
    });
};

const Imagebase64 = async (file: File): Promise<string | ArrayBuffer | null> => {
    const fileCp = await compressImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(fileCp as Blob);
    const data = new Promise<string | ArrayBuffer | null>((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
    });
    return data;
};

export default Imagebase64;
