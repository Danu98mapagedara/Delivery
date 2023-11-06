import express from 'express';
import deliveryModel from '../models/delivery.js';
import mongoose from 'mongoose';
import { createDelivery, updateDelivery, getAllDelivery, getDeliveryBy } from '../functions/delivery.js';


const router = express.Router();


// router.post('/create', async (req, res, next) => {


//     let { data } = req.body;

//     let resObj = await createDelivery(data);

//     console.log("data obj : " + resObj);

//     res.json({ data: resObj });

// });

router.post('/update', async (req, res, next) => {


    let { data } = req.body;

    let resObj = await updateDelivery(data);

    console.log("data obj : " + resObj);

    res.json({ data: resObj });

});

router.get('/', async (req, res, next) => {


    let resObj = await getAllDelivery();

    console.log("data obj : " + resObj);

    res.json({ data: resObj });

});

router.post('/filter', async (req, res, next) => {

    let { params } = req.body;

    let resObj = await getDeliveryBy(params);

    console.log("data obj : " + resObj);

    res.json({ data: resObj });

});


export default router;