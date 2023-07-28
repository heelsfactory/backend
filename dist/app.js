"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const product_routes_1 = __importDefault(require("./routers/product.routes"));
const sales_routes_1 = __importDefault(require("./routers/sales.routes"));
const users_routes_1 = __importDefault(require("./routers/users.routes"));
const capital_routes_1 = __importDefault(require("./routers/capital.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || process.env.PORT || 4312;
var db = mongoose_1.default.connection;
const url = "mongodb://127.0.0.1:27017/stock";
mongoose_1.default.connect(url);
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("DATABASE CONNECTED ⚡"));
const errorHandler = (err, req, res, next) => {
    // Handle the error
    console.error(err.message);
    return res.status(500).send({
        statusCode: "96",
        statusMessage: "Something went wrong",
        data: err.message,
    });
};
app.use((0, cors_1.default)({
    origin: "*",
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Methods",
        "Access-Control-Request-Headers",
        "Access-Control-Allow-Origin",
    ],
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
    //   enablePreflight: false,
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
}));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ extended: false, limit: "50mb" }));
app.use('/products', product_routes_1.default);
app.use('/users', users_routes_1.default);
app.use('/sales', sales_routes_1.default);
app.use('/capital', capital_routes_1.default);
app.listen(PORT, () => {
    console.log("listening on port");
});
