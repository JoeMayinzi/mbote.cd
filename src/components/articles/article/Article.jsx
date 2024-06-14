"use client";
import Image from "next/image";
import Link from "next/link";
import articleImg from "../../../assets/images/article-img.png";

const media_api_url = "https://backend.mbote.cd/wp-json/wp/v2/media/161140";
console.log(media_api_url);

export default function Article({
  title,
  featured_image,
  id,
  category_names,
  slug,
}) {
  const titleScliced = title.slice(0, 55) + "...";
  return (
    <article>
      <Link href={`/posts/${category_names}/${slug}/${id}`}>
        <div className=" relative top-[2px] ">
          <Image
            className="w-full h-[240px] "
            src={featured_image}
            width="390"
            height="240"
            alt="article img"
          />
        </div>
      </Link>
      <div className="bg-[#000000] px-[10px] py-5">
        <Link className="transition-all .2s ease" href="/">
          <h3
            dangerouslySetInnerHTML={{ __html: titleScliced }}
            className="text-white text-xl font-extrabold"
          ></h3>
        </Link>
      </div>
    </article>
  );
}
