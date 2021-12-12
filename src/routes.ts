import { Request, Response, Router } from "express";
import { AuthController } from "./controllers/AuthController";
import { ReviewController } from "./controllers/ReviewController";
import { UserController } from "./controllers/UserController";
import { WineController } from "./controllers/WineController";
import { auth } from "./middlwares/auth";
import { UPLOAD_IMAGE } from './middlwares/uploadFile';

const router = Router();

const userController = new UserController();
const wineController = new WineController();
const reviewController = new ReviewController();
const authController = new AuthController();

router.get('/', (req: Request, resp: Response) =>
  resp.status(200).json({ message: 'Hellow world api-vivinio' }),
);

router.post('/users', userController.create);
router.get('/users', userController.read);
router.get('/users/:id', auth, userController.readById);
router.put('/users/:id', auth, userController.updateById);
router.delete('/users/:id', auth, userController.deleteById);

router.post('/wines', auth, UPLOAD_IMAGE.single('image'), wineController.create);
router.get('/wines', wineController.read);
router.get('/wines/:id', wineController.readById);
router.put('/wines/:id', auth, UPLOAD_IMAGE.single('image'), wineController.updateById);
router.delete('/wines/:id', auth, wineController.deleteById);

router.post('/reviews', auth, reviewController.create);
router.put('/reviews/:id', auth, reviewController.updateById);
router.delete('/reviews/:id', auth, reviewController.deleteById);

router.post('/login', authController.handle)

export { router };
