import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  cardId: {
    type: String,
    require: true,
  },
  rarity: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  life: {
    type: String,
    require: true,
  },
  attribute: {
    type: String,
  },
  power: {
    type: String,
  },
  cost: {
    type: String,
  },
  counter: {
    type: String,
  },
  color: {
    type: String,
  },
  type: {
    type: String,
  },
  effect: {
    type: String,
  },
  trigger: {
    type: String,
  },
  cardSet: {
    type: String,
  },
  altArt: {
    type: String,
  },
});

export default mongoose.models.Card || mongoose.model("Card", CardSchema);
