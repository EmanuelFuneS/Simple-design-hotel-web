import Image, { StaticImageData } from "next/image";

interface FacilitiesCardProps {
  title: string;
  img: StaticImageData;
}

const FacilitiesCard = ({ title, img }: FacilitiesCardProps) => {
  return (
    <div>
      <Image src={img} alt={`${title} Photo`} />
      <h1>{title}</h1>
    </div>
  );
};

export default FacilitiesCard;
