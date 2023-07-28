import { Product } from "../models/product.model";

const productService = {
  //* CREATE PRODUCT
  async createProduct(
    name: string,
    up: number,
    cp: number,
    quantity: number,
    profitExpected: number,
    productImage: string
  ) {
    const newProduct = new Product({
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
  },

  //* FIND ALL PRODUCTS
  async findAllProducts() {
    return await Product.find();
  },
  //* GET PRODUCT BY ID
  async getProductById(id: string) {
    return await Product.findById({ _id: id });
  },

  //* DELETE PRODUCT BY ID
  async deleteProductById(id: string) {
    return await Product.deleteOne({ _id: id });
  },

  //* UPDATE PRODUCT AFTER SALE
  async updateProductAfterSale(id: string, quantityLeft: number, amountSold: number){
    return Product.updateOne({_id:id}, { quantityLeft: quantityLeft, amountSold: amountSold})
  }
};

export default productService;
