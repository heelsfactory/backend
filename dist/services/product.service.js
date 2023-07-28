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
const product_model_1 = require("../models/product.model");
const productService = {
    //* CREATE PRODUCT
    createProduct(name, up, cp, quantity, profitExpected, productImage) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = new product_model_1.Product({
                productName: name,
                unitPrice: up,
                costPrice: cp,
                quantity,
                profitExpected,
                initialQuantity: quantity,
                quantityLeft: quantity,
                amountSold: 0,
                productImage
            });
            return newProduct.save();
        });
    },
    //* FIND ALL PRODUCTS
    findAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_model_1.Product.find();
        });
    },
    //* GET PRODUCT BY ID
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_model_1.Product.findById({ _id: id });
        });
    },
    //* DELETE PRODUCT BY ID
    deleteProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_model_1.Product.deleteOne({ _id: id });
        });
    },
    //* UPDATE PRODUCT AFTER SALE
    updateProductAfterSale(id, quantityLeft, amountSold) {
        return __awaiter(this, void 0, void 0, function* () {
            return product_model_1.Product.updateOne({ _id: id }, { quantityLeft: quantityLeft, amountSold: amountSold });
        });
    }
};
exports.default = productService;
