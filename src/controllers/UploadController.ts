import { Request } from "express";
import { StorageService } from "../firebase";
import { IWine } from "../interfaces/IWine";
import fs from 'fs';
import { WineService } from "../services/WineService";

const firebaseActive = process.env.firebaseActive === 'true' ? true : false;
const name_app = process.env.name_app || 'Vivinio';

export async function uploadImage(data: IWine, request: Request) {
    const storageService = new StorageService();
    if (firebaseActive) {
        const nomeArquivo = `${name_app}_${Date.now()}`;
        data.image_url = await storageService.subirImagen(nomeArquivo, request.file) || '';
    } else {
        const nomeArquivo = `${Date.now()}_${request.file.originalname}`;
        const base64 = request.file.buffer.toString('base64');
        fs.writeFile(`./src/uploads/images/${nomeArquivo}`, base64, 'base64', (err) => {
            if (err) console.log('Error upload image repository ->', err.message)
        })
        data.image_url = `src/uploads/images/${nomeArquivo}` || '';
    }
    return data.image_url;
}

export async function removeImage(id: number, wineService: WineService) {
    const storageService = new StorageService();
    const wineFound = await wineService.readById(id)
    if(wineFound.image_url.slice(0, 4) === 'http') 
        await storageService.removerImagem(wineFound.image_url)
    else
        fs.unlink(wineFound.image_url, (err) => {
            if (err) console.log('Error deleted image repository ->', err.message);
        })
}