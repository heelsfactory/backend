import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  try {
    const userExists = await userService.findUserByusername(username);

    if (!userExists) {
      return res.status(400).send({
        status: 400,
        statusMessage: "Incorrect username or password",
      });
    }

    if (userExists.password !== password) {
      return res.status(400).send({
        status: 400,
        statusMessage: "Incorrect username or password",
      });
    }

    return res.status(200).send({
      status: 200,
      statusMessage: "Login successful",
    });
  } catch (error) {
    next(error);
  }
};

const creasteUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  try {
    await userService
      .addUser(username, password)
      .then((response) => {
        return res.status(200).send(response);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

export { login, creasteUser };
