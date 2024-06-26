import dbConnect from '../../lib/mongodb';
import Integration from '../../models/Integration';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const integrations = await Integration.find({});
        res.status(200).json({ success: true, data: integrations });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const integration = await Integration.create(req.body);
        res.status(201).json({ success: true, data: integration });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}