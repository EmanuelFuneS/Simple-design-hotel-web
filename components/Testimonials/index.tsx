"use client";
import { useEffect, useState } from "react";

interface Testimonial {
  message: string;
  author: string;
  country: string;
}

const testimonialsList: Testimonial[] = [
  {
    message: '"Calm, Serene, Retro – What a way to relax and enjoy"',
    author: " Mr. and Mrs. Baxter",
    country: "UK",
  },
  {
    message: '"Un paraíso tropical lleno de sorpresas"',
    author: "Familia Rodríguez",
    country: "México",
  },
  {
    message: '"Modern elegance with a classic touch"',
    author: "John and Sarah",
    country: "Estados Unidos",
  },
  {
    message: '"Un hogar lejos de casa, acogedor y encantador"',
    author: "Ana y Miguel",
    country: "España",
  },
  {
    message: '"Breathtaking views and exceptional service"',
    author: "Linda and Mark",
    country: "Canadá",
  },
  {
    message: '"ユニークで忘れられない文化体験"',
    author: "田中家",
    country: "Japón",
  },
  {
    message: '"Le charme de la campagne avec tout le confort moderne"',
    author: "Sophie et Jacques",
    country: "Francia",
  },
  {
    message: '"Perfect for a romantic getaway"',
    author: "Emma and Liam",
    country: "Australia",
  },
  {
    message: '"Άψογη εξυπηρέτηση και ονειρική θέα"',
    author: "Μαρία και Δημήτρης",
    country: "Grecia",
  },
  {
    message: '"Magischer Ort zum Aufladen der Batterien"',
    author: "Familie Müller",
    country: "Alemania",
  },
  {
    message: '"Una gemma nascosta con molto fascino"',
    author: "Isabel e Roberto",
    country: "Italia",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [testimonial, setTestimonial] = useState(testimonialsList[index]);
  const [clickedButton, setClickedButton] = useState<"next" | "prev" | null>(
    null
  );

  useEffect(() => {
    setTestimonial(testimonialsList[index]);
    const element = document.getElementById("testimonial");
    element?.classList.remove("animate-fade-in");

    void element?.offsetWidth;
    element?.classList.add("animate-fade-in");
  }, [index]);

  useEffect(() => {
    const nextElement = document.getElementById("next");
    const prevElement = document.getElementById("prev");
    if (clickedButton === "next" && nextElement) {
      nextElement.classList.remove("animate-bounce-click");
      void nextElement.offsetWidth;
      nextElement.classList.add("animate-bounce-click");
    } else if (clickedButton === "prev" && prevElement) {
      prevElement.classList.remove("animate-bounce-click");
      void prevElement.offsetWidth;
      prevElement.classList.add("animate-bounce-click");
    }
  }, [clickedButton, index]);

  const handlePrevTestimonial = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    setClickedButton("prev");
  };

  const handleNextTestimonial = () => {
    if (index < testimonialsList.length) {
      setIndex(index + 1);
    }
    setClickedButton("next");
  };
  return (
    <div className="text-[#14274A] h-full md:h-60 flex flex-col items-center justify-end py-6 ">
      <h2 className="text-3xl font-bold my-4">Testimonials</h2>
      <div id="testimonial" className="text-center animate-fade-in">
        <p className="text-lg m-2">{testimonial.message}</p>
        <p className="text-sm m-2">
          {testimonial.author}, {testimonial.country}
        </p>
      </div>
      <div className="flex gap-6 m-4 text-white">
        <button
          id="prev"
          className="bg-[#e0b973] px-3 py-1 rounded-lg animate-bounce-click"
          onClick={handlePrevTestimonial}
        >
          {"<"}
        </button>
        <button
          id="next"
          className="bg-[#e0b973] px-3 py-1 rounded-lg animate-bounce-click"
          onClick={handleNextTestimonial}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
