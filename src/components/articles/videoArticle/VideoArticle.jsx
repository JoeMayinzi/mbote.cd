import Image from "next/image";
import Link from "next/link";
import videoArticle2 from "../../../assets/images/article-video-2.webp";

export default function VideoArticle() {
  return (
    <article>
      <Link href="/">
        <div className=" relative top-[2px] ">
          <Image
            className="w-full"
            src={videoArticle2}
            width="390"
            height="240"
            alt="article img"
          />
          <div className=" absolute top-[40%] left-[40%] ">
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_38)">
                <rect
                  x="6.97998"
                  y="6.31006"
                  width="40"
                  height="40"
                  rx="20"
                  fill="black"
                  fill-opacity="0.86"
                  shape-rendering="crispEdges"
                />
                <g clip-path="url(#clip0_1_38)">
                  <path
                    d="M22.8925 18.9331V32.9331L34.2675 25.9331L22.8925 18.9331Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_1_38"
                  x="0.97998"
                  y="0.310059"
                  width="52"
                  height="52"
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
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_38"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_38"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_1_38">
                  <rect
                    width="11.38"
                    height="14"
                    fill="white"
                    transform="matrix(1 0 0 -1 22.89 32.8101)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
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
