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
exports.fetchAll = exports.getMonthlyCostbyMonth = exports.addMonthlyCost = void 0;
const monthlyCost_service_1 = __importDefault(require("../services/monthlyCost.service"));
//* ADD MOBTHLY COST
const addMonthlyCost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { month, monthNumber, advertisingCost, packagingCost, capital } = req.body;
    try {
        const data = {
            month,
            monthNumber,
            advertisingCost,
            packagingCost,
            capital,
        };
        yield monthlyCost_service_1.default
            .addMonthlyCost(data)
            .then((_response) => {
            return res.status(201).send({
                status: 201,
                statusMessage: "Monthly Cost added successfully",
            });
        })
            .catch((error) => {
            next(error);
        });
    }
    catch (error) {
        next(error);
    }
});
exports.addMonthlyCost = addMonthlyCost;
//* GET MONTHLY COST
const getMonthlyCostbyMonth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { monthId } = req.body;
    try {
        yield monthlyCost_service_1.default
            .getMonthlyCostbyMonth(monthId)
            .then((month) => {
            return res.status(200).send({
                status: 200,
                statusMessage: "Month Fetched Successfully",
                data: month,
            });
        })
            .catch((error) => next(error));
    }
    catch (error) {
        next(error);
    }
});
exports.getMonthlyCostbyMonth = getMonthlyCostbyMonth;
//* FETCH ALL
const fetchAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield monthlyCost_service_1.default
            .getAllMonthlyCost()
            .then((all) => {
            return res.status(200).send({
                status: 200,
                statusMessage: "Months Fetched Successfully",
                data: all,
            });
        })
            .catch((error) => {
            next(error);
        });
    }
    catch (error) {
        next(error);
    }
});
exports.fetchAll = fetchAll;
