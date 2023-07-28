import { MonthlyCost } from "../models/monthlyCost";

const monthlyCostService = {
  //* ADD MONTHLY COST
  async addMonthlyCost(data: any) {
    const monthlyCost = new MonthlyCost({
      month: data.month,
      monthNumber: data.monthNumber,
      advertisingCost: data.advertisingCost || 0,
      packagingCost: data.packagingCost || 0,
      capital: data.capital || 0,
    });

    return monthlyCost.save();
  },

  //* FETCH MONTHLY COST BY MONTH
  async getMonthlyCostbyMonth(monthId: string) {
    return MonthlyCost.find({ _id: monthId });
  },

  //* FETCH ALL MONTHLY COST
  async getAllMonthlyCost() {
    return MonthlyCost.find();
  },
};

export default monthlyCostService;
