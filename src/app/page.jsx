/* eslint-disable react/no-unescaped-entities */
import "./styles/global.css";
import Background from "../assets/images/home-bg.webp";
import heroArtImg from "../assets/images/hero-art-img.webp";
import topStoryImg from "../assets/images/top-story-img.webp";
import videoArticle2 from "../assets/images/article-video.webp";
import Image from "next/image";
import Link from "next/link";
import articleImg from "../assets/images/article-img.png";
import lastBlocImg from "../assets/images/IMG_1556.webp";
import smallArticle from "../assets/images/osias-gola.webp";
import yourStars from "../assets/images/your-stars.webp";
import endImgSection from "../assets/images/end-img-section.webp";

export default function Home() {
  return (
    <>
      <section className="bg mt-2">
        <div className="px-4 md:px-0 pt-28 md:pt-0">
          <div className="  md:ps-[20px] md:pr-[600px] pb-[100px] ">
            <div className=" mb-5">
              <a
                className="bg-[#FDAB09] font-bold text-xs uppercase p-2"
                href="/"
              >
                sports
              </a>
            </div>
            <div>
              <h3 className=" text-[32px] md:text-5xl leading-[1.2] font-extrabold text-white ">
                Football : Jean-Philippe Mateta tourne définitivement le dos à
                la RD Congo pour rejoindre la FRANCE
              </h3>
            </div>
          </div>
        </div>
        <div className=" bg-black md:bg-transparent px-4 md:px-0 py-[30px] md:py-0 ">
          <div>
            <h3 className="mt-[10px] mb-[10px] text-white text-[15px] leading-[1.2] font-bold uppercase tracking-[.5px] ">
              toujours à la une !
            </h3>
          </div>
          <div className="border-t header-border pt-[30px] md:py-[30px] ">
            <div className=" block md:flex">
              <div className="flex gap-5">
                <div className="flex items-center md:items-start gap-y-[15px] gap-x-[15px] mb-[15px] ">
                  <div className=" w-[50%] md:w-full ">
                    <Image
                      className=" rounded-[5px] w-full h-auto"
                      src={smallArticle}
                      objectFit="contain"
                      alt="image"
                    />
                  </div>
                  <div className=" w-[50%] md:w-full ">
                    <div>
                      <h3 className=" text-white text-sm font-extrabold leading-[1.2] ">
                        <Link href="/">
                          Polémique sur les réseaux sociaux après l’entrée
                          spectaculaire sur scène de Moïse Mbiye au Sta...
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex items-center md:items-start gap-y-[15px] gap-x-[15px] mb-[15px] ">
                  <div className=" w-[50%] md:w-full ">
                    <Image
                      className=" rounded-[5px] w-full h-auto"
                      src={smallArticle}
                      objectFit="contain"
                      alt="image"
                    />
                  </div>
                  <div className=" w-[50%] md:w-full ">
                    <div>
                      <h3 className=" text-white text-sm font-extrabold leading-[1.2] ">
                        <Link href="/">
                          Polémique sur les réseaux sociaux après l’entrée
                          spectaculaire sur scène de Moïse Mbiye au Sta...
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex items-center md:items-start gap-y-[15px] gap-x-[15px] mb-[15px] ">
                  <div className=" w-[50%] md:w-full ">
                    <Image
                      className=" rounded-[5px] w-full h-auto"
                      src={smallArticle}
                      objectFit="contain"
                      alt="image"
                    />
                  </div>
                  <div className=" w-[50%] md:w-full ">
                    <div>
                      <h3 className=" text-white text-sm font-extrabold leading-[1.2] ">
                        <Link href="/">
                          Polémique sur les réseaux sociaux après l’entrée
                          spectaculaire sur scène de Moïse Mbiye au Sta...
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex items-center md:items-start gap-y-[15px] gap-x-[15px] mb-[15px] ">
                  <div className=" w-[50%] md:w-full ">
                    <Image
                      className=" rounded-[5px] w-full h-auto"
                      src={smallArticle}
                      objectFit="contain"
                      alt="image"
                    />
                  </div>
                  <div className=" w-[50%] md:w-full ">
                    <div>
                      <h3 className=" text-white text-sm font-extrabold leading-[1.2] ">
                        <Link href="/">
                          Polémique sur les réseaux sociaux après l’entrée
                          spectaculaire sur scène de Moïse Mbiye au Sta...
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <div className="container mx-auto px-4 md:px-0">
          <div>
            <h4 className="mb-4 text-[32px] font-bold  ">Top Stories</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col-reverse md:flex-row md:h-[195px] lg:h-full">
              <div className="bg-[#000] py-10 md:py-1 lg:py-10 px-10 md:px-5 lg:px-10 w-full md:w-[50%] lg:w-[50%] ">
                <Link
                  href="/"
                  className="text-white text-xs font-normal uppercase tracking-[.5px] "
                >
                  A la une
                </Link>
                <h3 className="text-white text-xl md:text-xs lg:text-xl leading-[1.2] font-extrabold mt-[15px]  lg:mt-[15px]  ">
                  <Link href="/">
                    Réaction Naomi Campbell après avoir vue les images de la
                    prestation d’Innoss’B à Kindu
                  </Link>
                </h3>
              </div>
              <div className="article-bg md:h-auto lg:h-full w-full md:w-[50%] lg:w-[50%]">
                <p className=" invisible">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt adipisci, ex molestiae odit accusamus laudantium
                  iure, amet nemo aut culpa dolores praesentium. Ea architecto
                  possimus assumenda ratione nam magni incidunt?
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:h-[195px] lg:h-full">
              <div className="bg-[#000] py-10 md:py-1 lg:py-10 px-10 md:px-5 lg:px-10 w-full md:w-[50%] lg:w-[50%] ">
                <Link
                  href="/"
                  className="text-white text-xs font-normal uppercase tracking-[.5px] "
                >
                  A la une
                </Link>
                <h3 className="text-white text-xl md:text-xs lg:text-xl leading-[1.2] font-extrabold mt-[15px]  lg:mt-[15px]  ">
                  <Link href="/">
                    Réaction Naomi Campbell après avoir vue les images de la
                    prestation d’Innoss’B à Kindu
                  </Link>
                </h3>
              </div>
              <div className="article-bg md:h-auto lg:h-full w-full md:w-[50%] lg:w-[50%]">
                <p className=" invisible">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt adipisci, ex molestiae odit accusamus laudantium
                  iure, amet nemo aut culpa dolores praesentium. Ea architecto
                  possimus assumenda ratione nam magni incidunt?
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:h-[195px] lg:h-full">
              <div className="bg-[#000] py-10 md:py-1 lg:py-10 px-10 md:px-5 lg:px-10 w-full md:w-[50%] lg:w-[50%] ">
                <Link
                  href="/"
                  className="text-white text-xs font-normal uppercase tracking-[.5px] "
                >
                  A la une
                </Link>
                <h3 className="text-white text-xl md:text-xs lg:text-xl leading-[1.2] font-extrabold mt-[15px]  lg:mt-[15px]  ">
                  <Link href="/">
                    Réaction Naomi Campbell après avoir vue les images de la
                    prestation d’Innoss’B à Kindu
                  </Link>
                </h3>
              </div>
              <div className="article-bg md:h-auto lg:h-full w-full md:w-[50%] lg:w-[50%]">
                <p className=" invisible">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt adipisci, ex molestiae odit accusamus laudantium
                  iure, amet nemo aut culpa dolores praesentium. Ea architecto
                  possimus assumenda ratione nam magni incidunt?
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:h-[195px] lg:h-full">
              <div className="bg-[#000] py-10 md:py-1 lg:py-10 px-10 md:px-5 lg:px-10 w-full md:w-[50%] lg:w-[50%] ">
                <Link
                  href="/"
                  className="text-white text-xs font-normal uppercase tracking-[.5px] "
                >
                  A la une
                </Link>
                <h3 className="text-white text-xl md:text-xs lg:text-xl leading-[1.2] font-extrabold mt-[15px]  lg:mt-[15px]  ">
                  <Link href="/">
                    Réaction Naomi Campbell après avoir vue les images de la
                    prestation d’Innoss’B à Kindu
                  </Link>
                </h3>
              </div>
              <div className="article-bg md:h-auto lg:h-full w-full md:w-[50%] lg:w-[50%]">
                <p className=" invisible">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt adipisci, ex molestiae odit accusamus laudantium
                  iure, amet nemo aut culpa dolores praesentium. Ea architecto
                  possimus assumenda ratione nam magni incidunt?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[5px] lg:gap-0 ">
            <div className="article-bg-2">
              <div className=" p-4 text-center absolute bottom-0">
                <div className="mb-4">
                  <a
                    class="rounded-[5px] bg-[#FDAB09] px-4 py-2 font-bold text-xs uppercase"
                    href="/"
                  >
                    Célébrités
                  </a>
                </div>
                <div>
                  <Link
                    href="/"
                    className="text-white text-xl md:text-base lg:text-xl leading-[1.2] font-extrabold mt-[15px]"
                  >
                    Osée Gola, le fils de Ferre Gola aperçu dans un studio
                    d’enregistrement, prépare-t-il un projet ?
                  </Link>
                </div>
              </div>
            </div>
            <div className="article-bg-2">
              <div className=" p-4 text-center absolute bottom-0">
                <div className="mb-4">
                  <a
                    class="rounded-[5px] bg-[#FDAB09] px-4 py-2 font-bold text-xs uppercase"
                    href="/"
                  >
                    Célébrités
                  </a>
                </div>
                <div>
                  <Link
                    href="/"
                    className="text-white text-xl md:text-base lg:text-xl leading-[1.2] font-extrabold mt-[15px]"
                  >
                    Osée Gola, le fils de Ferre Gola aperçu dans un studio
                    d’enregistrement, prépare-t-il un projet ?
                  </Link>
                </div>
              </div>
            </div>
            <div className="article-bg-2">
              <div className=" p-4 text-center absolute bottom-0">
                <div className="mb-4">
                  <a
                    class="rounded-[5px] bg-[#FDAB09] px-4 py-2 font-bold text-xs uppercase"
                    href="/"
                  >
                    Célébrités
                  </a>
                </div>
                <div>
                  <Link
                    href="/"
                    className="text-white text-xl md:text-base lg:text-xl leading-[1.2] font-extrabold mt-[15px]"
                  >
                    Osée Gola, le fils de Ferre Gola aperçu dans un studio
                    d’enregistrement, prépare-t-il un projet ?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 py-[30px] mb-0 md:mb-[60px] bg-[#121212] ">
        <div className="container mx-auto px-4 md:px-0">
          <div>
            <h4 className="text-[32px] font-bold mb-4 text-white ">
              Vidéos tendances
            </h4>
          </div>
          <div>
            <div className="block md:flex">
              <div className="w-full">
                <Link href="/">
                  <div className=" relative top-[2px] ">
                    <Image
                      className="w-full"
                      src={videoArticle2}
                      width="390"
                      height="240"
                      alt="article img"
                    />
                    <div class=" absolute top-[20%] md:top-[40%] left-[30%] md:left-[45%] ">
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
                          ></rect>
                          <g clip-path="url(#clip0_1_22)">
                            <path
                              d="M54.7812 47.6376V82.6376L83.2188 65.1376L54.7812 47.6376Z"
                              fill="white"
                            ></path>
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
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            ></feColorMatrix>
                            <feOffset></feOffset>
                            <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                            <feComposite
                              in2="hardAlpha"
                              operator="out"
                            ></feComposite>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                            ></feColorMatrix>
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1_22"
                            ></feBlend>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1_22"
                              result="shape"
                            ></feBlend>
                          </filter>
                          <clipPath id="clip0_1_22">
                            <rect
                              width="28.44"
                              height="35"
                              fill="white"
                              transform="matrix(1 0 0 -1 54.78 82.33)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </Link>
                <div className="py-4">
                  <h3 className="text-white text-lg md:text-[32px] font-extrabold leading-[1.2]  ">
                    Le Doc. : Voici comment Fally Ipupa a pu restaurer à lui
                    seul les concerts congolais en Europe
                  </h3>
                </div>
              </div>
              <div className="">
                <div className="bg-black h-fit flex items-center gap-5 py-[15px] px-[10px] ">
                  <div>
                    <Link href="/">
                      <div className=" relative top-[2px] ">
                        <Image
                          className="rounded-[5px] w-full"
                          src={videoArticle2}
                          width="135"
                          height="94"
                          alt="article img"
                        />
                        <div className=" absolute top-[10%] md:top-[20%] left-[30%] md:left-[35%] ">
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
                              ></rect>
                              <g clip-path="url(#clip0_1_38)">
                                <path
                                  d="M22.8925 18.9331V32.9331L34.2675 25.9331L22.8925 18.9331Z"
                                  fill="white"
                                ></path>
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
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                ></feFlood>
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                ></feColorMatrix>
                                <feOffset></feOffset>
                                <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                                <feComposite
                                  in2="hardAlpha"
                                  operator="out"
                                ></feComposite>
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                                ></feColorMatrix>
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_1_38"
                                ></feBlend>
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_1_38"
                                  result="shape"
                                ></feBlend>
                              </filter>
                              <clipPath id="clip0_1_38">
                                <rect
                                  width="11.38"
                                  height="14"
                                  fill="white"
                                  transform="matrix(1 0 0 -1 22.89 32.8101)"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <h3 className="  text-white text-sm leading-[1.4] font-extrabold ">
                      <Link href="/">
                        KS Bloom à Kinshasa – Résumé du concert 
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="px-6 bg-[#515151] ">
                  <h3 className="text-white pt-[10px] pb-[7px] tracking-[.5px] uppercase font-bold text-[15px] ">
                    Voir aussi
                  </h3>
                </div>
                <div className=" bg-[#353535] py-[15px] px-[10px] ">
                  <div className="h-fit flex items-center gap-5 mb-1 ">
                    <div>
                      <Link href="/">
                        <div className=" relative top-[2px] ">
                          <Image
                            className="rounded-[5px] w-full"
                            src={videoArticle2}
                            width="135"
                            height="94"
                            alt="article img"
                          />
                          <div class=" absolute top-[200%] left-[36%] ">
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
                                ></rect>
                                <g clip-path="url(#clip0_1_38)">
                                  <path
                                    d="M22.8925 18.9331V32.9331L34.2675 25.9331L22.8925 18.9331Z"
                                    fill="white"
                                  ></path>
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
                                  <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                                  <feComposite
                                    in2="hardAlpha"
                                    operator="out"
                                  ></feComposite>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_1_38"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_38"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <clipPath id="clip0_1_38">
                                  <rect
                                    width="11.38"
                                    height="14"
                                    fill="white"
                                    transform="matrix(1 0 0 -1 22.89 32.8101)"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h3 className="  text-white text-sm leading-[1.4] font-extrabold ">
                        <Link href="/">
                          KS Bloom à Kinshasa – Résumé du concert 
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <div className="h-fit flex items-center gap-5 mb-1">
                    <div>
                      <Link href="/">
                        <div className=" relative top-[2px] ">
                          <Image
                            className="rounded-[5px] w-full"
                            src={videoArticle2}
                            width="135"
                            height="94"
                            alt="article img"
                          />
                          <div className=" absolute top-[10%] md:top-[20%] left-[30%] md:left-[35%] ">
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
                                ></rect>
                                <g clip-path="url(#clip0_1_38)">
                                  <path
                                    d="M22.8925 18.9331V32.9331L34.2675 25.9331L22.8925 18.9331Z"
                                    fill="white"
                                  ></path>
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
                                  <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                                  <feComposite
                                    in2="hardAlpha"
                                    operator="out"
                                  ></feComposite>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_1_38"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_38"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <clipPath id="clip0_1_38">
                                  <rect
                                    width="11.38"
                                    height="14"
                                    fill="white"
                                    transform="matrix(1 0 0 -1 22.89 32.8101)"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h3 className="  text-white text-sm leading-[1.4] font-extrabold ">
                        <Link href="/">
                          KS Bloom à Kinshasa – Résumé du concert 
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <div className="h-fit flex items-center gap-5">
                    <div>
                      <Link href="/">
                        <div className=" relative top-[2px] ">
                          <Image
                            className="rounded-[5px] w-full"
                            src={videoArticle2}
                            width="135"
                            height="94"
                            alt="article img"
                          />
                          <div className=" absolute top-[10%] md:top-[20%] left-[30%] md:left-[35%] ">
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
                                ></rect>
                                <g clip-path="url(#clip0_1_38)">
                                  <path
                                    d="M22.8925 18.9331V32.9331L34.2675 25.9331L22.8925 18.9331Z"
                                    fill="white"
                                  ></path>
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
                                  <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                                  <feComposite
                                    in2="hardAlpha"
                                    operator="out"
                                  ></feComposite>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_1_38"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_38"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <clipPath id="clip0_1_38">
                                  <rect
                                    width="11.38"
                                    height="14"
                                    fill="white"
                                    transform="matrix(1 0 0 -1 22.89 32.8101)"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h3 className="  text-white text-sm leading-[1.4] font-extrabold ">
                        <Link href="/">
                          KS Bloom à Kinshasa – Résumé du concert 
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="bg-[#171717] py-2">
                  <div className=" text-center">
                    <h4 className="">
                      <Link
                        href="/"
                        className=" font-bold uppercase text-sm text-white"
                      >
                        Voir toutes les vidéos
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full order-2 mt-5 md:mt-0 md:w-[25%] px-4 md:px-0 md:order-none">
              <div className="flex items-center gap-y-[15px] gap-x-[15px] mb-[15px] ">
                <div className=" w-[50%] md:w-full ">
                  <Image src={smallArticle} objectFit="contain" alt="image" />
                </div>
                <div className=" w-[50%] md:w-full ">
                  <div>
                    <h3 className=" text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
                      <time datetime="">mai 19, 2024</time>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-y-[15px] gap-x-[15px] mb-[15px] ">
                <div className=" w-[50%] md:w-full ">
                  <Image src={smallArticle} objectFit="contain" alt="image" />
                </div>
                <div className=" w-[50%] md:w-full ">
                  <div>
                    <h3 className=" text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
                      <time datetime="">mai 19, 2024</time>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-y-[15px] gap-x-[15px] mb-[15px] ">
                <div className=" w-[50%] md:w-full ">
                  <Image src={smallArticle} objectFit="contain" alt="image" />
                </div>
                <div className=" w-[50%] md:w-full ">
                  <div>
                    <h3 className=" text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
                      <time datetime="">mai 19, 2024</time>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-y-[15px] gap-x-[15px] mb-[15px] ">
                <div className=" w-[50%] md:w-full ">
                  <Image src={smallArticle} objectFit="contain" alt="image" />
                </div>
                <div className=" w-[50%] md:w-full ">
                  <div>
                    <h3 className=" text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
                      <time datetime="">mai 19, 2024</time>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-y-[15px] gap-x-[15px] mb-[15px] ">
                <div className=" w-[50%] md:w-full ">
                  <Image src={smallArticle} objectFit="contain" alt="image" />
                </div>
                <div className=" w-[50%] md:w-full ">
                  <div>
                    <h3 className=" text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
                      <time datetime="">mai 19, 2024</time>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-y-[15px] gap-x-[15px] mb-[15px] ">
                <div className=" w-[50%] md:w-full ">
                  <Image src={smallArticle} objectFit="contain" alt="image" />
                </div>
                <div className=" w-[50%] md:w-full ">
                  <div>
                    <h3 className=" text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
                      <time datetime="">mai 19, 2024</time>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4  md:px-5 mt-0 md:mt-9 w-full md:w-[50%] ">
              <div>
                <div>
                  <div className="relative mt-16 md:mt-0">
                    <h4 className="absolute top-[-30px] md:top-[-53px] left-[10px] md:left-0 text-center  text-[#f3f3f3] uppercase tracking-[10px] text-[40px] md:text-[52px] font-normal ">
                      Vos stars
                    </h4>
                    <h4 className=" relative z-10 text-center text-[32px] font-extrabold mb-[26px] tracking-[-.6px] ">
                      Célébrités
                    </h4>
                  </div>
                </div>
                <div className="relative">
                  <div className=" w-full">
                    <Image
                      className="w-full"
                      src={yourStars}
                      objectFit="contain"
                      alt="image"
                    />
                  </div>
                  <div className=" p-4 text-center absolute bottom-0">
                    <div className="mb-4 flex justify-center">
                      <a
                        class="rounded-[5px] bg-[#FDAB09] px-4 py-2 font-bold text-xs uppercase"
                        href="/"
                      >
                        Célébrités
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-[13px]  mb-5">
                  <h3>
                    <Link
                      href="/"
                      className="text-xl leading-[1.2] font-extrabold mt-[15px]"
                    >
                      Didistone voit un air de famille avec le fils de Rihanna
                    </Link>
                  </h3>
                  <div>
                    <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
                      <time datetime="">mai 19, 2024</time>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-0  md:px-5 w-full md:w-[25%] ">
              <div className="article-bg-2">
                <div className=" p-4 text-center absolute bottom-0">
                  <div className="mb-4">
                    <a
                      class="rounded-[5px] bg-[#FDAB09] px-4 py-2 font-bold text-xs uppercase"
                      href="/"
                    >
                      Célébrités
                    </a>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="text-white text-xl leading-[1.2] font-extrabold mt-[15px]"
                    >
                      Osée Gola, le fils de Ferre Gola aperçu dans un studio
                      d’enregistrement, prépare-t-il un projet ?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <div className="container mx-auto">
          <div>
            <h4 className="mb-4 text-[32px] font-bold  px-4 md:px-0">
              International
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="article-bg-2">
              <div className=" p-4 text-center absolute bottom-0">
                <div className="mb-4">
                  <a
                    class="rounded-[5px] bg-[#FDAB09] px-4 py-2 font-bold text-xs uppercase"
                    href="/"
                  >
                    Célébrités
                  </a>
                </div>
                <div>
                  <Link
                    href="/"
                    className="text-white text-xl leading-[1.2] font-extrabold mt-[15px]"
                  >
                    Osée Gola, le fils de Ferre Gola aperçu dans un studio
                    d’enregistrement, prépare-t-il un projet ?
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0 ">
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className="relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5  ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className="relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5  ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className="relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5 ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className=" relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5 ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <div className="container mx-auto">
          <div>
            <h4 className="mb-4 text-[32px] font-bold  px-4 md:px-0">
              Musique
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="article-bg-2">
              <div className=" p-4 text-center absolute bottom-0">
                <div className="mb-4">
                  <a
                    class="rounded-[5px] bg-[#FDAB09] px-4 py-2 font-bold text-xs uppercase"
                    href="/"
                  >
                    Célébrités
                  </a>
                </div>
                <div>
                  <Link
                    href="/"
                    className="text-white text-xl leading-[1.2] font-extrabold mt-[15px]"
                  >
                    Osée Gola, le fils de Ferre Gola aperçu dans un studio
                    d’enregistrement, prépare-t-il un projet ?
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0 ">
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className="relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5  ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className="relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5  ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className="relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5 ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className=" relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5 ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <div className="container mx-auto">
          <div>
            <h4 className="mb-4 text-[32px] font-bold  px-4 md:px-0">Sports</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="article-bg-2">
              <div className=" p-4 text-center absolute bottom-0">
                <div className="mb-4">
                  <a
                    class="rounded-[5px] bg-[#FDAB09] px-4 py-2 font-bold text-xs uppercase"
                    href="/"
                  >
                    Célébrités
                  </a>
                </div>
                <div>
                  <Link
                    href="/"
                    className="text-white text-xl leading-[1.2] font-extrabold mt-[15px]"
                  >
                    Osée Gola, le fils de Ferre Gola aperçu dans un studio
                    d’enregistrement, prépare-t-il un projet ?
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0 ">
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className="relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5 ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className="relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5 ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className="relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5 ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
              <article className="w-full md:w-[288px] mb-4 ">
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
                <div className="relative bg-[#000000] px-[10px] pt-[50px] pb-[20px] ">
                  <div className="relative mt-[-60px] mb-5 ">
                    <a
                      class="bg-[#FDAB09] font-bold text-xs uppercase px-4 py-2"
                      href="/"
                    >
                      cameroun
                    </a>
                  </div>
                  <h3 className="text-white text-base font-extrabold">
                    <Link className="transition-all .2s ease" href="/">
                      Gaz Mawete dévoile le teaser du clip « Fondi lifindi »
                    </Link>
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center">
            <h4 className="mb-4 text-[40px] md:text-[50px] font-bold  ">
              Dans l'actu !
            </h4>
            <div className="flex justify-center  in-actu"></div>
          </div>
          <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 gap-[30px]  ">
            <div className=" pb-[18px] w-full ">
              <div>
                <Image
                  className=" w-full h-[223px] md:h-full "
                  src={lastBlocImg}
                  width="581"
                  height="348"
                  alt="lorem"
                />
              </div>
              <div className="relative mt-[-80px] md:mt-[-80px] w-[267px] md:w-[424.8px] mx-auto bg-white last-block-shadaw py-[10px] md:py-10 px-[15px] md:px-5 rounded-[5px] ">
                <div>
                  <h3 className=" text-lg md:text-xl font-extrabold leading-[1.2] mb-[6px] ">
                    <Link href="/">
                      Denis Lessie sur le concert de Moïse Mbiye : « Beaucoup de
                      gens ont réclamé qu’il n’y avait pas d’exhortation, or
                      notre objectif est de gagner des âmes à Dieu »
                    </Link>
                  </h3>
                </div>
                <div className="flex mb-5">
                  <span className=" text-xs text-[#000] ">
                    <Link href="/">Redaction Mbote</Link>
                  </span>
                  <span className="text-xs text-[#767676]">-</span>
                  <span className="text-xs text-[#767676]">mai 22, 2024</span>
                </div>
                <div className="flex">
                  <a
                    class="bg-[#FDAB09] text-xs font-bold px-[15px] p-[10px] "
                    href="/"
                  >
                    Lire la suite
                  </a>
                </div>
              </div>
            </div>
            <div className=" pb-[18px] w-full ">
              <div>
                <Image
                  className=" w-full h-[223px] md:h-full "
                  src={lastBlocImg}
                  width="581"
                  height="348"
                  alt="lorem"
                />
              </div>
              <div className="relative mt-[-55px] md:mt-[-80px] w-[267px] md:w-[424.8px] mx-auto bg-white last-block-shadaw py-[10px] md:py-10 px-[15px] md:px-5 rounded-[5px] ">
                <div>
                  <h3 className=" text-lg md:text-xl font-extrabold leading-[1.2] mb-[6px] ">
                    <Link href="/">
                      Denis Lessie sur le concert de Moïse Mbiye : « Beaucoup de
                      gens ont réclamé qu’il n’y avait pas d’exhortation, or
                      notre objectif est de gagner des âmes à Dieu »
                    </Link>
                  </h3>
                </div>
                <div className="flex mb-5">
                  <span className=" text-xs text-[#000] ">
                    <Link href="/">Redaction Mbote</Link>
                  </span>
                  <span className="text-xs text-[#767676]">-</span>
                  <span className="text-xs text-[#767676]">mai 22, 2024</span>
                </div>
                <div className="flex">
                  <a
                    class="bg-[#FDAB09] text-xs font-bold px-[15px] p-[10px] "
                    href="/"
                  >
                    Lire la suite
                  </a>
                </div>
              </div>
            </div>
            <div className=" pb-[18px] w-full ">
              <div>
                <Image
                  className=" w-full h-[223px] md:h-full "
                  src={lastBlocImg}
                  width="581"
                  height="348"
                  alt="lorem"
                />
              </div>
              <div className="relative mt-[-55px] md:mt-[-80px] w-[267px] mt:w-[424.8px] mx-auto bg-white last-block-shadaw py-[10px] md:py-10 px-[15px] md:px-5 rounded-[5px] ">
                <div>
                  <h3 className=" text-lg md:text-xl font-extrabold leading-[1.2] mb-[6px] ">
                    <Link href="/">
                      Denis Lessie sur le concert de Moïse Mbiye : « Beaucoup de
                      gens ont réclamé qu’il n’y avait pas d’exhortation, or
                      notre objectif est de gagner des âmes à Dieu »
                    </Link>
                  </h3>
                </div>
                <div className="flex mb-5">
                  <span className=" text-xs text-[#000] ">
                    <Link href="/">Redaction Mbote</Link>
                  </span>
                  <span className="text-xs text-[#767676]">-</span>
                  <span className="text-xs text-[#767676]">mai 22, 2024</span>
                </div>
                <div className="flex">
                  <a
                    class="bg-[#FDAB09] text-xs font-bold px-[15px] p-[10px] "
                    href="/"
                  >
                    Lire la suite
                  </a>
                </div>
              </div>
            </div>
            <div className=" pb-[18px] w-full ">
              <div>
                <Image
                  className=" w-full h-[223px] md:h-full "
                  src={lastBlocImg}
                  width="581"
                  height="348"
                  alt="lorem"
                />
              </div>
              <div className="relative mt-[-55px] md:mt-[-80px] w-[267px] md:w-[424.8px] mx-auto bg-white last-block-shadaw py-[10px] md:py-10 px-[15px] md:px-5 rounded-[5px] ">
                <div>
                  <h3 className=" text-lg md:text-xl font-extrabold leading-[1.2] mb-[6px] ">
                    <Link href="/">
                      Denis Lessie sur le concert de Moïse Mbiye : « Beaucoup de
                      gens ont réclamé qu’il n’y avait pas d’exhortation, or
                      notre objectif est de gagner des âmes à Dieu »
                    </Link>
                  </h3>
                </div>
                <div className="flex mb-5">
                  <span className=" text-xs text-[#000] ">
                    <Link href="/">Redaction Mbote</Link>
                  </span>
                  <span className="text-xs text-[#767676]">-</span>
                  <span className="text-xs text-[#767676]">mai 22, 2024</span>
                </div>
                <div className="flex">
                  <a
                    class="bg-[#FDAB09] text-xs font-bold px-[15px] p-[10px] "
                    href="/"
                  >
                    Lire la suite
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
