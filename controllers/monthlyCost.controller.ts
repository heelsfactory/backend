import { NextFunction, Request, Response } from "express";
import monthlyCostService from "../services/monthlyCost.service";

//* ADD MOBTHLY COST
const addMonthlyCost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { month, monthNumber, advertisingCost, packagingCost, capital } =
    req.body;

  try {
    const data = {
      month,
      monthNumber,
      advertisingCost,
      packagingCost,
      capital,
    };

    await monthlyCostService
      .addMonthlyCost(data)
      .then((_response) => {
        return res.status(201).send({
          status: 201,
          statusMessage: "Monthly Cost added successfully",
        });
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

//* GET MONTHLY COST
const getMonthlyCostbyMonth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { monthId } = req.body;

  try {
    await monthlyCostService
      .getMonthlyCostbyMonth(monthId)
      .then((month) => {
        return res.status(200).send({
          status: 200,
          statusMessage: "Month Fetched Successfully",
          data: month,
        });
      })
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};

//* FETCH ALL
const fetchAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await monthlyCostService
      .getAllMonthlyCost()
      .then((all) => {
        return res.status(200).send({
          status: 200,
          statusMessage: "Months Fetched Successfully",
          data: all,
        });
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

export { addMonthlyCost, getMonthlyCostbyMonth, fetchAll };
