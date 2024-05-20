import mongoose from 'mongoose';

const WarehouseSchema = new mongoose.Schema({
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
});

export default mongoose.models.Warehouse || mongoose.model('Warehouse', WarehouseSchema);