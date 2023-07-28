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
Object.defineProperty(exports, "__esModule", { value: true });
const sales_model_1 = require("../models/sales.model");
const saleService = {
    //* ADD SALE
    addSale(productId, productName, quantity, moneyGot, transportationCost) {
        return __awaiter(this, void 0, void 0, function* () {
            const newSale = new sales_model_1.Sale({
                productId,
                productName,
                quantity,
                moneyGot,
                transportationCost,
            });
            return newSale.save();
        });
    },
    //* FETCH SALES FOR PRODUCT
    getSalesByProductId(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sales_model_1.Sale.find({ productId });
        });
    },
    //* FETCH ALL SALES
    getAllSales() {
        return __awaiter(this, void 0, void 0, function* () {
            return sales_model_1.Sale.find();
        });
    }
};
exports.default = saleService;
