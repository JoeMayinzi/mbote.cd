import Image from "next/image";
import Link from "next/link";
import articleImg from "../../../assets/images/article-img.png";

export default function Article() {
  return (
    <article>
      <Link href="/">
        <div className=" relative top-[2px] ">
          <Image
            className="w-full"
            src={articleImg}
            width="390"
            height="240"
            alt="article img"
          />
        </div>
      </Link>
      <div className="bg-[#000000] px-[10px] py-5">
        <h3 className="text-white text-xl font-extrabold">
          <Link className="transition-all .2s ease" href="/">
            Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
          </Link>
        </h3>
      </div>
    </article>
  );
}
