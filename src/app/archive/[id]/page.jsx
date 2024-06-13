import Image from "next/image";
import Link from "next/link";
import archiveImg from "../../assets/images/archive.webp";
import Article from "@/components/articles/article/Article";
import LoadMore from "@/components/load-more/More";
import { Montserrat } from "@next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Archive() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <section className={`${font.className}`}>
        <div className="container mx-auto  px-4 md:px-0">
          <div className="mt-7 py-[30px]">
            <div>
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
                  <span className="text-sm font-bold">Acutalité</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="archive-bg container mx-auto">
          <div className="gradient mt-9 absolute bottom-0 p-10">
            <h3 className="text-white font-extrabold text-[30px] lg:text-[49px] leading-[1.2] ">
              <Link className="" href="/">
                Le Doc. : Voici comment Fally Ipupa a pu restaurer à lui seul
                les concerts congolais en Europe
              </Link>
            </h3>
          </div>
        </div>
      </section>
      <section className=" mt-[30px] ">
        <div className="container mx-auto px-4 md:px-0">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-x-[10px] gap-y-10">
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
          <LoadMore />
        </div>
      </section>
    </>
  );
}
