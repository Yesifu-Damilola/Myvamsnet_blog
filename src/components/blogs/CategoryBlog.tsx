// import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

const categories = [
  { name: "All Posts", className: "text-primary-color-2 underline" },
  { name: "Tech" },
  { name: "Front-end" },
  { name: "Business" },
  { name: "Lifestyle" },
  { name: "UI/UX" },
  { name: "Product" },
  { name: "Full-stack" },
  { name: "Back-end" },
];

export const CategoryBlog = () => {
  return (
    <section className="light-white py-12 w-full bg-cover bg-center bg-no-repeat ">
      <div className="mx-auto md:containers">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-9 font-bold text-sm md:text-base border-b pb-5">
          {categories.map((category, index) => (
            // I will need to change the div to Link down here
            <div key={index} className={category.className || ""}>
              {category.name}
            </div>
          ))}
          <div className="relative flex items-center text-sm md:text-base font-normal ">
            <FaMagnifyingGlass className="absolute w-5 h-5 text-light-white left-3" />
            <input
              type="text"
              placeholder="Search..."
              className="text-light-white pl-10 pr-4 py-2 focus:outline-none bg-[#9C9C9C] w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
