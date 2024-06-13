import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";

const SearchedPosts = ({
  title,
  content,
  category_names,
  featured_image,
  date,
}) => {
  const titleSliced = title.slice(0, 80) + "...";
  const contentSliced = content.slice(0, 66) + "...";
  return (
    <div className=" mt-7 block md:flex  gap-5 result-box-shadaw">
      <div>
        <Image
          className=" w-full h-auto"
          src={featured_image}
          width="410"
          height="246"
          alt="search result image"
        />
      </div>
      <div className="ps-[10px] md:ps-0 py-[10px] pr-[10px] ">
        <Link href="/">
          <h3
            dangerouslySetInnerHTML={{ __html: titleSliced }}
            className="font-extrabold text-base md:text-xl "
          ></h3>
        </Link>
        <div className="mt-2">
          <div className="flex gap-2">
            <div>
              <Link
                className=" uppercase py-2 px-4 bg-[#fdab09] text-[10px] md:text-sm font-bold "
                href="/"
              >
                {category_names}
              </Link>
            </div>
            <span className=" text-sm font-normal">
              <time>
                <Moment format="DD/MM/YY">{date}</Moment>
              </time>
            </span>
          </div>
          <div className=" mt-5">
            <p
              dangerouslySetInnerHTML={{ __html: contentSliced }}
              className=" text-[#555] text-sm "
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedPosts;
