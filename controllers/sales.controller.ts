import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";
import saleService from "../services/sales.service";
import productService from "../services/product.service";

//* CREATE SALE

const addSale = async (req: Request, res: Response, next: NextFunction) => {
  const { productId, quantity, moneyGot, transportationCost } = req.body;

  try {
    const theProduct = await productService.getProductById(productId);
    await saleService
      .addSale(
        productId,
        theProduct!.productName,
        quantity,
        moneyGot,
        transportationCost
      )
      .then(async () => {
        let left = theProduct?.quantityLeft! - quantity;
        let got = theProduct?.amountSold + moneyGot;

        await productService.updateProductAfterSale(productId, left, got);
        return res.status(201).send({
          status: 200,
          statusMessage: "Sale added successfully",
        });
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};


//* FETCH ALL SALES

const fetchAllSales = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await saleService.getAllSales()
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
  } catch (error) {
    next(error);
  }
};
export { addSale, fetchAllSales };
