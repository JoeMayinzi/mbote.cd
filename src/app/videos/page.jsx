import Image from "next/image";
import Link from "next/link";
import videoArticle from "../../assets/images/article-video.webp";
import VideoArticle from "@/components/articles/videoArticle/VideoArticle";
import LoadMore from "@/components/load-more/More";
export default function Videos() {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="mt-7 py-[30px]">
            <div className=" px-6">
              <div className=" p-[5px] mb-3 bg-[rgba(73,73,73,.2)] flex items-center w-fit">
                <div>
                  <Link className="text-sm font-bold" href="/">
                    Accueil
                  </Link>
                </div>
                <span className="mt-[2px] mx-[5px] ">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_8)">
                      <path
                        d="M2.40235 12.1555C2.31641 12.1555 2.23047 12.1203 2.14454 12.05C2.0586 11.9797 1.97266 11.8976 1.88672 11.8039C1.71485 11.7258 1.65821 11.5793 1.7168 11.3644C1.7754 11.1496 1.88672 10.9562 2.05079 10.7844L7.3711 5.99139L2.05079 1.52655C1.88672 1.35468 1.7754 1.16327 1.7168 0.952332C1.65821 0.741394 1.71485 0.592957 1.88672 0.507019C2.0586 0.335144 2.23047 0.249207 2.40235 0.249207C2.57422 0.249207 2.7461 0.335144 2.91797 0.507019L8.91798 5.63983C9.00391 5.72577 9.08204 5.81171 9.15235 5.89764C9.22266 5.98358 9.25782 6.06952 9.25782 6.15546C9.25782 6.24139 9.22266 6.32733 9.15235 6.41327C9.08204 6.49921 9.00391 6.58514 8.91798 6.67108L2.91797 11.9914C2.83204 12.0773 2.7461 12.1262 2.66016 12.1379C2.57422 12.1496 2.48829 12.1555 2.40235 12.1555Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_8">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 12.05)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div>
                  <Link className="text-sm font-bold" href="/author">
                    Video
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <aside className="bg-[#000] w-[450px] ">
              <div className="p-5">
                <div className="pt-4 border-b border-[#888888] w-[180px] ">
                  <h2 className="mb-4  text-white font-bold text-3xl">
                    Catégories
                  </h2>
                </div>
                <div>
                  <ul className=" ps-3 py-[32px] ">
                    <li className=" mb-3">
                      <Link
                        className="text-white text-[18px] text-lg font-bold"
                        href="/"
                      >
                        Dilemme
                      </Link>
                    </li>
                    <li className=" mb-3">
                      <Link
                        className="text-white text-[18px] text-lg font-bold"
                        href="/"
                      >
                        Foire aux questions (FAQ)
                      </Link>
                    </li>
                    <li className=" mb-3">
                      <Link
                        className="text-white text-[18px] text-lg font-bold"
                        href="/"
                      >
                        Follow, follow back
                      </Link>
                    </li>
                    <li className=" mb-3">
                      <Link
                        className="text-white text-[18px] text-lg font-bold"
                        href="/"
                      >
                        Lyrics verifié
                      </Link>
                    </li>
                    <li className=" mb-3">
                      <Link
                        className="text-white text-[18px] text-lg font-bold"
                        href="/"
                      >
                        Mbote Original
                      </Link>
                    </li>
                    <li className=" mb-3">
                      <Link
                        className="text-white text-[18px] text-lg font-bold"
                        href="/"
                      >
                        Top story
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
            <div className="w-full relative">
              <Link href="/">
                <Image
                  className=" w-full h-auto"
                  src={videoArticle}
                  width="894"
                  height="545"
                  alt="video article"
                />
              </Link>
              <div className=" absolute top-[40%] left-[45%] ">
                <svg
                  width="130"
                  height="131"
                  viewBox="0 0 130 131"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_22)">
                    <rect
                      x="15"
                      y="15.83"
                      width="100"
                      height="100"
                      rx="50"
                      fill="black"
                      fill-opacity="0.86"
                      shape-rendering="crispEdges"
                    />
                    <g clip-path="url(#clip0_1_22)">
                      <path
                        d="M54.7812 47.6376V82.6376L83.2188 65.1376L54.7812 47.6376Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_22"
                      x="0"
                      y="0.829956"
                      width="130"
                      height="130"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_22"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_22"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_1_22">
                      <rect
                        width="28.44"
                        height="35"
                        fill="white"
                        transform="matrix(1 0 0 -1 54.78 82.33)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="gradient mt-9 absolute bottom-0 p-10">
                <h3 className="text-white font-extrabold text-[49px] leading-[1.2] ">
                  <Link className="" href="/">
                    Le Doc. : Voici comment Fally Ipupa a pu restaurer à lui
                    seul les concerts congolais en Europe
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-[30px] ">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-x-[10px] gap-y-10">
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
          </div>
          <LoadMore />
        </div>
      </section>
    </>
  );
}
