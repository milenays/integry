import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  customerName: { type: String, required: true },
  status: { type: String, required: true },
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);