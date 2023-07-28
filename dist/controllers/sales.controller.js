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
exports.fetchAllSales = exports.addSale = void 0;
const sales_service_1 = __importDefault(require("../services/sales.service"));
const product_service_1 = __importDefault(require("../services/product.service"));
//* CREATE SALE
const addSale = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity, moneyGot, transportationCost } = req.body;
    try {
        const theProduct = yield product_service_1.default.getProductById(productId);
        yield sales_service_1.default
            .addSale(productId, theProduct.productName, quantity, moneyGot, transportationCost)
            .then(() => __awaiter(void 0, void 0, void 0, function* () {
            let left = (theProduct === null || theProduct === void 0 ? void 0 : theProduct.quantityLeft) - quantity;
            let got = (theProduct === null || theProduct === void 0 ? void 0 : theProduct.amountSold) + moneyGot;
            yield product_service_1.default.updateProductAfterSale(productId, left, got);
            return res.status(201).send({
                status: 200,
                statusMessage: "Sale added successfully",
            });
        }))
            .catch((error) => {
            next(error);
        });
    }
    catch (error) {
        next(error);
    }
});
exports.addSale = addSale;
//* FETCH ALL SALES
const fetchAllSales = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sales_service_1.default.getAllSales()
            .then((products) => {
            return res.status(200).send({
                status: 200,
                statusMessage: "Sales fetched successfully",
                data: products,
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
exports.fetchAllSales = fetchAllSales;
