import connectMongo from "../../../utils/connectMongo.js";
import Card from "../../../models/CardModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");
    const cards = await Card.find({ altArt: { $eq: "-" } });
    // const cards = await Card.find({});

    res.json(cards);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
