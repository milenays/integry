import dbConnect from '../../lib/mongodb';
import Procurement from '../../models/Procurement';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const procurements = await Procurement.find({});
        res.status(200).json({ success: true, data: procurements });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const procurement = await Procurement.create(req.body);
        res.status(201).json({ success: true, data: procurement });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}