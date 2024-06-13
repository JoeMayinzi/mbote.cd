import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";

const RecentPosts = ({ title, featured_image, date }) => {
  const titleSliced = title.slice(0, 50) + "...";
  return (
    <>
      <div className="flex items-center gap-y-[15px] gap-x-[15px] mb-[15px] ">
        <div className="w-[30%] md:w-[50%] ">
          <Image
            className=" w-full md:w-[130px] h-[78.1167px]  md:h-auto lg:w-full lg:h-auto"
            src={featured_image}
            width="130"
            height="78"
            alt="image"
          />
        </div>
        <div className=" w-[70%] md:w-[50%] ">
          <div>
            <Link href="/">
              <h3
                dangerouslySetInnerHTML={{ __html: titleSliced }}
                className=" text-xs lg:text-sm font-extrabold leading-[1.2] "
              ></h3>
            </Link>
          </div>
          <div>
            <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
              <time datetime="">
                <Moment format="DD/MM/YY">{date}</Moment>
              </time>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
