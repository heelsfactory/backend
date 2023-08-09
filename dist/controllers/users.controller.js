"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creasteUser = exports.login = void 0;
const user_service_1 = __importDefault(require("../services/user.service"));
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const userExists = yield user_service_1.default.findUserByusername(username);
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
    }
    catch (error) {
        next(error);
    }
});
exports.login = login;
const creasteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        yield user_service_1.default
            .addUser(username, password)
            .then((response) => {
            return res.status(200).send(response);
        })
            .catch((error) => {
            next(error);
        });
    }
    catch (error) {
        next(error);
    }
});
exports.creasteUser = creasteUser;
