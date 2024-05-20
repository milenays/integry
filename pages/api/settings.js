import dbConnect from '../../lib/mongodb';
import Setting from '../../models/Setting';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const settings = await Setting.find({});
        res.status(200).json({ success: true, data: settings });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const setting = await Setting.create(req.body);
        res.status(201).json({ success: true, data: setting });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const { key, value } = req.body;
        const setting = await Setting.findOneAndUpdate({ key }, { value }, { new: true, upsert: true });
        res.status(200).json({ success: true, data: setting });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}