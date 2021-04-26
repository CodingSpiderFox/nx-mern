import * as express from 'express';
import middleware from '../middleware';
import models from '../models';

const router = express.Router();

router.post('/', middleware.auth, async (req, res) => {
  try {
    const { name } = req.body;
    const newCustomer = new models.Customer({
      name,
    });

    const savedCustomer = await newCustomer.save();

    res.json(savedCustomer);
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/', middleware.auth, async (req, res) => {
  try {
    const customers = await models.Customer.find();

    res.json(customers);
  } catch (error) {
    res.status(500).send();
  }
});

export default router;
