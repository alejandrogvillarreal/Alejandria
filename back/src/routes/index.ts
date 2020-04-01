import express, { Request, Response } from "express";

/* Middlewares */
import withAuth from "../middlewares/withAuth";
import upload from "../services/multer";
import validationMiddleware from "../middlewares/validation";
const { ValidationRules, validate } = validationMiddleware;

/* Controllers */
import AuthController from "../controllers/auth";
import UserController from "../controllers/user";
import RoleController from "../controllers/role";
import LoanStateController from "../controllers/loan_state";
import AuthorController from "../controllers/author";
import GenreController from "../controllers/genre";
import BookController from "../controllers/book";
import LoanController from "../controllers/loan";

const router = express.Router();
router
  .use(withAuth)

  /* Auth */
  .post("/auth/signup", ValidationRules.signUp, validate, AuthController.signUp)
  .post("/auth/login", AuthController.login)
  //   .put("/auth/reset-password", AuthController.resetPassword)

  /* Users */
  .get("/users", UserController.get)
  .get("/users/:id", UserController.show)

  /* Roles */
  .get("/roles", RoleController.get)
  .get("/roles/:id", RoleController.show)

  /* Loan States */
  .get("/loan-states", LoanStateController.get)
  .get("/loan-states/:id", LoanStateController.show)

  /* Genres */
  .get("/genres", GenreController.get)
  .post("/genres", ValidationRules.genre, validate, GenreController.post)
  .get("/genres/:id", GenreController.show)
  .put("/genres/:id", ValidationRules.genre, validate, GenreController.update)
  .delete("/genres/:id", GenreController.remove)

  /* Authors */
  .get("/authors", AuthorController.get)
  .post("/authors", ValidationRules.author, validate, AuthorController.post)
  .get("/authors/:id", AuthorController.show)
  .put(
    "/authors/:id",
    ValidationRules.author,
    validate,
    AuthorController.update
  )
  .delete("/authors/:id", AuthorController.remove)

  /* Book */
  .get("/books", BookController.get)
  .post(
    "/books",
    upload.single("image"),
    ValidationRules.book,
    validate,
    BookController.post
  )
  .get("/books/:id", BookController.show)
  .put(
    "/books/:id",
    upload.single("image"),
    ValidationRules.book,
    validate,
    BookController.update
  )
  .delete("/books/:id", BookController.remove)

  /* Loan */
  .get("/loans", LoanController.get)
  .post("/loans", ValidationRules.loan, validate, LoanController.post)
  .get("/loans/:id", LoanController.show)
  .put("/loans/:id", LoanController.update)

  .get("/test", (req: Request, res: Response) => {
    return res.send("ok");
  });

export default router;
