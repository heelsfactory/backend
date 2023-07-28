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
const monthlyCost_1 = require("../models/monthlyCost");
const monthlyCostService = {
    //* ADD MONTHLY COST
    addMonthlyCost(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const monthlyCost = new monthlyCost_1.MonthlyCost({
                month: data.month,
                monthNumber: data.monthNumber,
                advertisingCost: data.advertisingCost || 0,
                packagingCost: data.packagingCost || 0,
                capital: data.capital || 0,
            });
            return monthlyCost.save();
        });
    },
    //* FETCH MONTHLY COST BY MONTH
    getMonthlyCostbyMonth(monthId) {
        return __awaiter(this, void 0, void 0, function* () {
            return monthlyCost_1.MonthlyCost.find({ _id: monthId });
        });
    },
    //* FETCH ALL MONTHLY COST
    getAllMonthlyCost() {
        return __awaiter(this, void 0, void 0, function* () {
            return monthlyCost_1.MonthlyCost.find();
        });
    },
};
exports.default = monthlyCostService;
