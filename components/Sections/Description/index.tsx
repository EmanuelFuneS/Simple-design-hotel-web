import DescriptionCard from "@/components/Cards/Descriptions";
import Image from "@/public/img/descriptionImage.jpg";
import Image2 from "@/public/img/descriptionImage2.jpg";

const descriptions = [
  {
    title: "Urban Escape",
    description: `Discover the vibrant city life from the comfort of our modern rooms. 
Unwind after a busy day exploring local attractions and enjoy the tranquility within.`,
    link: "https://example.com/city-escape",
    img: Image,
  },
  {
    title: "Mountain Retreat",
    description: `Experience breathtaking views and fresh mountain air. 
Our retreat offers the perfect blend of adventure and relaxation for nature lovers.`,
    link: "https://example.com/mountain-retreat",
    img: Image2,
  },
  {
    title: "Cultural Journey",
    description: `Immerse yourself in local traditions and cuisine. 
Each room is inspired by the rich heritage of the region, providing a unique stay.`,
    link: "https://example.com/cultural-journey",
    img: Image,
  },
  {
    title: "Cultural Journey",
    description: `Immerse yourself in local traditions and cuisine. 
Each room is inspired by the rich heritage of the region, providing a unique stay.`,
    link: "https://example.com/cultural-journey",
    img: Image2,
  },
  {
    title: "Cultural Journey",
    description: `Immerse yourself in local traditions and cuisine. 
Each room is inspired by the rich heritage of the region, providing a unique stay.`,
    link: "https://example.com/cultural-journey",
    img: Image,
  },
];

const Description = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6 text-[#14274A]">
      <h3 className="m-6 text-xl text-center font-semibold">
        All our room types are including complementary brakfast.
      </h3>
      <div className="flex flex-col justify-center items-center gap-6 lg:w-[80%] md:w-[95%] sm:w-full">
        {descriptions.map((item, idx) => {
          return (
            <DescriptionCard
              key={idx}
              title={item.title}
              description={item.description}
              link={item.link}
              img={item.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Description;
