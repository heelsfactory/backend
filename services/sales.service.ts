import { Sale } from "../models/sales.model";

const saleService = {
  //* ADD SALE
  async addSale(
    productId: string,
    productName: string,
    quantity: number,
    moneyGot: number,
    transportationCost: number
  ) {
    const newSale = new Sale({
      productId,
      productName,
      quantity,
      moneyGot,
      transportationCost,
    });

    return newSale.save();
  },
 
  //* FETCH SALES FOR PRODUCT
  async getSalesByProductId(productId: string) {
    return await Sale.find({ productId });
  },

  //* FETCH ALL SALES
  async getAllSales() {
    return Sale.find()
  }
};

export default saleService;
