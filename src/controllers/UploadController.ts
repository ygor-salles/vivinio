import { NextFunction, Request, Response } from "express";

class UploadController {
    async handle(req: Request, res: Response, next: NextFunction) {
        if(req.file) {
            return res.json({ message: `Upload concluído com sucesso - ${req.file.filename}`,  })
          }
        
          return res.status(400).json({ message: 'Falha no upload!' });
    }
}

export { UploadController }