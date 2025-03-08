import { testimonialsData } from "@/constants/testimonialsData";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="max-width my-16">
      <h1 className="text-3xl sm:text-4xl text-main font-bold text-center">
        Customer Reviews
      </h1>
      <p className="text-center">Hear from Our Happy Customers</p>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-[#f7f7f7] p-4 py-8 sm:p-8 text-center rounded-sm"
          >
            <div className="mb-4 rounded-full overflow-hidden size-24 mx-auto object-cover">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={200}
                height={200}
              />
            </div>
            <p>{testimonial.message}</p>
            <h2 className="text-xl font-semibold mt-4 text-blue-400">
              {testimonial.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
