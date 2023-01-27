import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const res = await fetch("http://localhost:3000/api/cards");
    const cards = await res.json();
    return setCardsList(cards);
  };

  console.log(cardsList);
  return (
    <>
      <div className="grid grid-cols-2 mx-auto md:grid-cols-6">
        {cardsList?.map((card) => {
          if (card.name !== "-") {
            return <Card key={card._id} id={card.cardId} alt={card.altArt} />;
          }
        })}
      </div>
    </>
  );
}
