import dbConnect from '../../lib/mongodb';
import Warehouse from '../../models/Warehouse';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const warehouses = await Warehouse.find({});
        res.status(200).json({ success: true, data: warehouses });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const warehouse = await Warehouse.create(req.body);
        res.status(201).json({ success: true, data: warehouse });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}