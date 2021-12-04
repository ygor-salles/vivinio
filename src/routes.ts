import { Request, Response, Router } from "express";
import { ReviewController } from "./controllers/ReviewController";
import { UserController } from "./controllers/UserController";
import { WineController } from "./controllers/WineController";

const router = Router();

const userController = new UserController();
const wineController = new WineController();
const reviewController = new ReviewController();

router.get('/', (req: Request, resp: Response) =>
  resp.status(200).json({ message: 'Hellow world api-vivinio' }),
);

router.post('/users', userController.create);
router.get('/users', userController.read);
router.get('/users/:id', userController.readById);
router.put('/users/:id',  userController.updateById);
router.delete('/users/:id',  userController.deleteById);

router.post('/wines', wineController.create);
router.get('/wines', wineController.read);
router.get('/wines/:id', wineController.readById);
router.put('/wines/:id',  wineController.updateById);
router.delete('/wines/:id',  wineController.deleteById);

router.post('/reviews', reviewController.create);
router.put('/reviews/:id',  reviewController.updateById);
router.delete('/reviews/:id',  reviewController.deleteById);

export { router };