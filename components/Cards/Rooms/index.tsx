import { StaticImageData } from "next/image";
import Link from "next/link";

interface RoomsCardProps {
  title: string;
  imgs: StaticImageData[];
  type: string;
  linkDetails: string;
  price: string;
}

const RoomsCard = ({
  title,
  imgs,
  type,
  linkDetails,
  price,
}: RoomsCardProps) => {
  console.log("imgs", imgs);
  return (
    <div>
      <div> carrousel</div>
      <div>
        {" "}
        {type} {title}
      </div>
      <div>
        <Link href={linkDetails}> View Room Details</Link>
        <p>${price} Avg/night</p>
      </div>
    </div>
  );
};

export default RoomsCard;
