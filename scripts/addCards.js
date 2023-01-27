import Card from "../models/CardModel.js";
import data from "../metadata.json" assert { type: "json" };
import ConnectMongo from "../utils/connectMongo.js";

(async () => {
  const cards = Object.values(data);
  await ConnectMongo();
  const results = { added: 0, failed: 0 };
  const promises = [];
  cards.filter((card) => {
    promises.push(
      Card.findOneAndUpdate(
        {
          cardId: card["Card ID"],
          altArt: card["Alternate Art"],
        },
        {
          cardId: card["Card ID"],
          rarity: card["Rarity"],
          category: card["Category"],
          name: card["Name"],
          life: card["Life"],
          attribute: card["Attribute"],
          power: card["Power"],
          cost: card["Cost"],
          counter: card["Counter"],
          color: card["Color"],
          type: card["Type"],
          effect: card["Effect"],
          trigger: card["Trigger"],
          cardSet: card["Card Set(s)"],
          altArt: card["Alternate Art"],
        },
        {
          new: true,
          upsert: true,
        }
      )
        .then(() => (results.added += 1))
        .catch((err) => (results.failed += 1))
    );
  });
  await Promise.all(promises);
  return results;
})();
