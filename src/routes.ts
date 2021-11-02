import { Router } from "express";

import { ListUserReceivedComplimentController } from "./controllers/ListUserReceivedComplimentController";
import { ListUserSentComplimentController } from "./controllers/ListUserSentComplimentController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ListTagsController } from "./controllers/ListTagsController";

const router = Router()

const listUserReceivedComplimentController = new ListUserReceivedComplimentController();
const listUserSentComplimentController = new ListUserSentComplimentController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const listTagsController = new ListTagsController()

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post('/compliments', ensureAuthenticated, createComplimentController.handle)
router.get('/compliments/sent', ensureAuthenticated, listUserSentComplimentController.handle)
router.get('/compliments/received', ensureAuthenticated, listUserReceivedComplimentController.handle)

export { router }