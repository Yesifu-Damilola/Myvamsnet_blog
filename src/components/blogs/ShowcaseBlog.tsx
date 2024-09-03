import Success from "../../assets/Suecess_blog.png";

export const ShowcaseBlog = () => {
  return (
    <section className="bg-[url('src/assets/backgroung.png')] py-12 w-full bg-cover bg-center  bg-no-repeat">
      <div className="">
        <div className="containers mx-auto lg:py-20 lg:px-0 px-4 grid md:grid-cols-2 grid-cols-1 gap-16">
          <div className="w-full md:w-[576px] h-auto">
            <img
              src={Success}
              alt="blogshowcase"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid place-content-center gap-8 ">
            <h2 className="font-bold text-light-white text-2xl md:text-3xl">
              How to Become a Product Manager
            </h2>
            <p className="font-normal text-xl/8 text-[#9C9C9C] mt-2 ">
              Don't let a lack of job and experience Use minimal, flat design
              graphics or icons that represent the design process, such as a
              stylus, a design tool (like Figma), or abstract representations of
              wireframes and prototypes...
            </p>

            <div className="left-0">
              <button className="bg-primary-color-2 text-base text-[#FFFEFE] py-4 px-8">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
