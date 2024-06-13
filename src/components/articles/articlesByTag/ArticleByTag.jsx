import Image from "next/image";
import Moment from "react-moment";

const ArticlesByTag = ({ title, content, featured_image, date }) => {
  const titleScliced = title.sclice(0, 100) + "...";
  const contentScliced = title.sclice(0, 100) + "...";
  return (
    <>
      <div className="flex gap-x-[15px] gap-y-[15px] ">
        <div className="w-[30%] md:w-fit ">
          <div>
            <Image
              className=" w-full h-auto"
              src={featured_image}
              width="269"
              height="161"
              alt="img"
            />
          </div>
        </div>
        <div className="w-[70%] md:w-fit py-0 md:py-4">
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: titleScliced }}
              className="text-xs md:text-sm font-extrabold leading-[1.2]"
            ></h3>
          </div>
          <div>
            <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase">
              <time datetime="">
                <Moment format="DD/MM/YY">{date}</Moment>
              </time>
            </span>
          </div>
          <div className="hidden md:block mt-4">
            <p
              dangerouslySetInnerHTML={{ __html: contentScliced }}
              className="text-xs leading-[1.2] text-[#767676] "
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesByTag;
