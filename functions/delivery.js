import mongoose from 'mongoose';
import deliveryModel from '../models/delivery.js';

const createDelivery = async (data) => {
    try {

        const deliveryData = { ...data };

        const newDelivery = new deliveryModel(deliveryData);
        const savedDelivery = await newDelivery.save();

        console.log("Delivery created successfully");
        return savedDelivery;
    } catch (err) {
        // console.error("Failed to create delivery:", err);
        return {
            message: "Could Not Create Delivery",
            error: err.message,
        };
    }
}

const updateDelivery = async (data) => {

    try {

        const updatedDelivery = await deliveryModel.findOneAndUpdate({ _id: data._id }, data)
            .exec();

        return {
            message: "Successfully Updated"
        }

    } catch (err) {
        // console.error("Failed to create delivery:", err);
        return {
            message: "Could Not Update Delivery",
            error: err.message,
        };
    }
}


const getAllDelivery = async () => {

    console.log('getting deliveries');
    try {
        const deliveries = await deliveryModel.find();

        return deliveries;
    } catch (error) {
        return {
            message: "Could Not Get Deliveries",
            error: error.message,
        };
    }
}


const getDeliveryBy = async (params) => {
    console.log('getting filtered deliveries');
    try {
        const deliveries = await deliveryModel.find(params);

        return deliveries;
    } catch (error) {
        return {
            message: "Could Not Get Filtered Deliveries",
            error: error.message,
        };
    }
}

export { createDelivery, updateDelivery, getAllDelivery, getDeliveryBy };