import { NextFunction, Request, Response } from "express";
import productService from "../services/product.service";
import saleService from "../services/sales.service";

//* CREATE PRODUCT
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { productName, unitPrice, costPrice, quantity, profitExpected, productImage } =
    req.body;

  try {
    await productService
      .createProduct(
        productName,
        unitPrice,
        costPrice,
        quantity,
        profitExpected,
        productImage
      )
      .then((_response) => {
        return res.status(201).send({
          status: 201,
          statusMessage: "Product created successfully",
        });
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

//* FETCH ALL PRODUCTS
const fetchProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await productService
      .findAllProducts()
      .then((products) => {
        // console.log(products)
        return res.status(200).send({
          status: 200,
          statusMessage: "Products fetched successfully",
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

//* FETCH PRODUCT BY ID
const fetchProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { productId } = req.body;
  try {
    await productService
      .getProductById(productId)
      .then(async (product) => {
        const sales = await saleService.getSalesByProductId(productId);

        return res.status(200).send({
          status: 200,
          statusMessage: "Products fetched successfully",
          data: {
            product,
            sales,
          },
        });
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

//* Delete PRODUCT BY ID
const deleteProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { productId } = req.body;
  try {
    await productService
      .deleteProductById(productId)
      .then(async () => {
        return res.status(200).send({
          status: 200,
          statusMessage: "Product Deleted successfully",
        });
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

export { createProduct, fetchProducts, fetchProductById, deleteProductById };
