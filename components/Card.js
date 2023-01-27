import Image from "next/image";
const card = ({ id, alt }) => {
  console.log(alt);
  return (
    <Image
      src={
        alt == "-"
          ? `/cards/${id}.png`
          : `/cards/${id}_${alt.toLowerCase()}.png`
      }
      alt="picture of a card"
      width={150}
      height={100}
    />
  );
};

export default card;
