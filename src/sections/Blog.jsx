import { blogs } from "../constants";

const Blog = () => {
  return (
    <section className="flex flex-col font-manrope gap-24 max-container mb-8">
      <h1 className="master-color text-6xl leading-[75px] max-w-[701px] max-sm:w-full font-extrabold">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-full md:max-w-fit">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "md:row-span-2 md:col-span-1" : "col-span-1"
            } text-white`}
          >
            <div className="flex flex-col h-full relative">
              <img
                src={blog.imgURL}
                alt="img"
                className="w-full object-cover"
              />
              <div
                className={`p-4 md:p-8 flex flex-col bg-[#042C54] ${
                  index === 0 ? "flex-grow h-full" : ""
                }`}
              >
                <p className="text-[10px] md:text-[12px]">{blog.date}</p>
                <h2 className="mt-4 mb-4 md:mb-6 font-bold text-[14px] md:text-[18px]">
                  {blog.text}
                </h2>
                <p className="text-[10px] md:text-[12px] absolute bottom-2 md:bottom-5 left-4 md:left-8">
                  {blog.moreDetails}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
