import { Router } from "express";
import { getProducts } from "../dao/db/productDBView.js";
import { autorization } from "../middlewares/auth.middleware.js";
import { passportCall } from "../middlewares/passport.middleware.js";

const router = Router();


router.get(
  "/products",
  getProducts
);


router.get(
  "/realtimeproducts",
  passportCall("jwt"),
  autorization("admin"),
  async (req, res) => {
    try {
      res.render("realtimeproducts", {
        title: "Real time products",
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error}`);
    }
  }
);

export default router;