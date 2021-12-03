import { Request, Response, Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();

router.get('/', (req: Request, resp: Response) =>
  resp.status(200).json({ message: 'Hellow world api-vivinio' }),
);

router.post('/users', userController.create);
router.get('/users', userController.read);
router.get('/users/:id', userController.readById);
router.put('/users/:id',  userController.updateById);
router.delete('/users/:id',  userController.deleteById);

export { router };