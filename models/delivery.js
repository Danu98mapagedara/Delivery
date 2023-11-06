import mongoose from 'mongoose';


const deliverySchema = new mongoose.Schema({

    customer_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    estimated_date: {
        type: Date
    }
});

const Delivery = mongoose.model('Delivery', deliverySchema);

export default Delivery;