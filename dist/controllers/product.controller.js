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
exports.deleteProductById = exports.fetchProductById = exports.fetchProducts = exports.createProduct = void 0;
const product_service_1 = __importDefault(require("../services/product.service"));
const sales_service_1 = __importDefault(require("../services/sales.service"));
//* CREATE PRODUCT
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productName, unitPrice, costPrice, quantity, profitExpected, productImage } = req.body;
    try {
        yield product_service_1.default
            .createProduct(productName, unitPrice, costPrice, quantity, profitExpected, productImage)
            .then((_response) => {
            return res.status(201).send({
                status: 201,
                statusMessage: "Product created successfully",
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
exports.createProduct = createProduct;
//* FETCH ALL PRODUCTS
const fetchProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_service_1.default
            .findAllProducts()
            .then((products) => {
            console.log(products);
            return res.status(200).send({
                status: 200,
                statusMessage: "Products fetched successfully",
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
exports.fetchProducts = fetchProducts;
//* FETCH PRODUCT BY ID
const fetchProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.body;
    try {
        yield product_service_1.default
            .getProductById(productId)
            .then((product) => __awaiter(void 0, void 0, void 0, function* () {
            const sales = yield sales_service_1.default.getSalesByProductId(productId);
            return res.status(200).send({
                status: 200,
                statusMessage: "Products fetched successfully",
                data: {
                    product,
                    sales,
                },
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
exports.fetchProductById = fetchProductById;
//* Delete PRODUCT BY ID
const deleteProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.body;
    try {
        yield product_service_1.default
            .deleteProductById(productId)
            .then(() => __awaiter(void 0, void 0, void 0, function* () {
            return res.status(200).send({
                status: 200,
                statusMessage: "Product Deleted successfully",
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
exports.deleteProductById = deleteProductById;
