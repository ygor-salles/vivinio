import { NextFunction, Request, Response } from "express";
import { StorageService } from '../firebase';
class UploadController {
    async handle(req: Request, res: Response, next: NextFunction) {
        if(req.file) {
            const nomeArquivo = `${Date.now()}_${req.file.originalname}`
            const storageService = new StorageService();
            
            const urlImage = await storageService.subirImagen(nomeArquivo, req.file)
            return res.json({ message: `Upload concluído com sucesso - ${urlImage}`,  })
          }
        
          return res.status(400).json({ 
              message: 'Falha no upload! Só é aceito arquivo do tipo (png, jpg, jpeg, pjpeg, gif)' 
            });
    }
}

export { UploadController }