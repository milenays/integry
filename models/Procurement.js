import mongoose from 'mongoose';

const ProcurementSchema = new mongoose.Schema({
  supplierName: { type: String, required: true },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
});

export default mongoose.models.Procurement || mongoose.model('Procurement', ProcurementSchema);