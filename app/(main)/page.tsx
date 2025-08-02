import About from "@/components/About";
import Description from "@/components/Sections/Description";
import Testimonials from "@/components/Testimonials";

export default function page() {
  return (
    <div className="h-full flex flex-col justify-center">
      <About />
      <Description />
      <Testimonials />
    </div>
  );
}
