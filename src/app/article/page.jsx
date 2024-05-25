import Image from "next/image";
import Link from "next/link";
import avatar2 from "../../assets/images/avatar3.jpg";
import avatar3 from "../../assets/images/avatar3.jpg";
import articleBG from "../../assets/images/article-bg.jpeg";
import smallArticle from "../../assets/images/small-article.webp";
import smilaryImg from "../../assets/images/smilary-article.webp";
import LastArticlesImg from "../../assets/images/last-articles-img.png";

export default function Article() {
  return (
    <>
      <section>
        <div className="container mx-auto py-[30px]">
          <div className=" w-full md:w-[953px] ">
            <div class=" mb-5 ">
              <a class="bg-[#FDAB09] font-bold text-xs uppercase p-2" href="/">
                Buzz
              </a>
            </div>
            <div>
              <h1 className="font-extrabold text-[36px] lg:text-[52px] leading-[1.2] ">
                Michel Bakenda sur le concert de moïse mbiye : « Je prie pour
                que ce concert soit une réussite et que le Dieu de ta vie
                t’honore devant 80 000 personnes »
              </h1>
            </div>
          </div>
          <div className=" block md:flex gap-[20px] ">
            <div className="px-[10px]">
              <div>
                <time class=" text-xs">mai 16, 2023</time>
              </div>
              <div className="flex gap-[6px] mt-4">
                <div>
                  <Image
                    className="rounded-full"
                    src={avatar2}
                    width="30"
                    height="30"
                    alt="avatar"
                  />
                </div>
                <div>
                  <span className="text-xs">
                    Par
                    <Link className="ms-[3px] font-bold" href="/">
                      Redaction Mbote
                    </Link>
                  </span>
                </div>
              </div>
              <div className=" mt-5 mb-5">
                <Image
                  className="w-full h-auto"
                  src={articleBG}
                  width="554"
                  height="554"
                  alt="article-bg img"
                />
              </div>
              <div>
                <p className="text-2xl leading-[1.4] mb-[26px] ">
                  <strong>
                    Annoncé comme l’un des invités d’honneur du grand concert du
                    pasteur Moïse Mbiye prévu ce dimanche au stade des Martyrs,
                    Michel Bakenda se montre de plus en plus impliqué dans la
                    promotion de cet événement.
                  </strong>
                </p>
                <p className=" text-[22px] mb-[26px] ">
                  Pour marquer sa présence et encourager le public à venir
                  nombreux, le frère Michel a adressé un message vibrant sur les
                  réseaux sociaux.
                </p>
                <p className=" text-[22px] mb-[26px] ">
                  « Il y a des moments dans la vie de l’homme où le Dieu de son
                  parcours décide de l’honorer aux yeux de tous. Il y a des
                  phases où le ciel se résout à apaiser les tempêtes. Je prie
                  pour que ce concert soit une réussite et que le Dieu de ta vie
                  t’honore devant 80 000 personnes » a-t-il déclaré
                </p>
                <p className=" text-[22px] mb-[26px] ">
                  Michel Bakenda invite ainsi l’Eglise du Christ au Congo à
                  soutenir le pasteur Moïse Mbiye pour son concert prévu le 19
                  mai au stade des Martyrs. « C’est toujours passionnant lorsque
                  nous faisons corps », souligne-t-il.
                </p>
                <p className=" text-[22px] mb-[26px] ">
                  Il conclut en souhaitant que Dieu bénisse le Congo et que
                  l’amour l’emporte au delà de divergences et différends.
                </p>
              </div>
              <div className="p-3 bg-white rounded-[5px] mt-10   h-full md:h-[141px] border border-[#000]">
                <div className=" block mx-auto md:flex gap-10">
                  <div className="  pb-[21px] ">
                    <Image
                      className="mx-auto md:mx-0 rounded-[5px] "
                      src={avatar3}
                      width="120"
                      height="120"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <div className="mb-5 text-center md:text-start">
                      <span className="text-[22px] font-semibold mb-5">
                        Redaction Mbote
                      </span>
                      <div className="mt-5">
                        <Link
                          href="/"
                          className=" text-[#fdab09] text-lg flex justify-center md:justify-start items-center"
                        >
                          See Full Bio
                          <span className=" mt-1 ms-1">
                            <svg
                              width="10"
                              height="10"
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
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-center">
                  <h4 className="text-[32px] font-bold mb-4">
                    Articles similaires
                  </h4>
                </div>
                <div className="grid grid-cols-3 gap-[10px] ">
                  <div>
                    <div>
                      <Image
                        className=" w-full h-auto"
                        src={smilaryImg}
                        objectFit="contain"
                        alt="similary image"
                      />
                    </div>
                    <div>
                      <h3 className="mt-[10px] mb-[5px] text-xs lg:text-sm leading-[1.2] font-extrabold ">
                        Micheline Shabani affiche son soutien à Mike Kalambay
                        pour s...
                      </h3>
                      <div>
                        <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
                          <time datetime="">mai 19, 2024</time>
                        </span>
                      </div>
                      <div className="hidden md:block mt-5">
                        <p className=" text-xs leading-[1.2] text-[#767676] ">
                          La star de la musique chrétienne congolaise, Micheline
                          Shabani, a apporté son soutien au pasteur Mike
                          Kalambay pour son prochain concert. Ce dernier se
                          produira le 26 mai prochain au Zénith de Paris....
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Image
                        className=" w-full h-auto"
                        src={smilaryImg}
                        objectFit="contain"
                        alt="similary image"
                      />
                    </div>
                    <div>
                      <h3 className="mt-[10px] mb-[5px] text-xs lg:text-sm leading-[1.2] font-extrabold ">
                        Micheline Shabani affiche son soutien à Mike Kalambay
                        pour s...
                      </h3>
                      <div>
                        <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
                          <time datetime="">mai 19, 2024</time>
                        </span>
                      </div>
                      <div className="hidden md:block mt-5">
                        <p className=" text-xs leading-[1.2] text-[#767676] ">
                          La star de la musique chrétienne congolaise, Micheline
                          Shabani, a apporté son soutien au pasteur Mike
                          Kalambay pour son prochain concert. Ce dernier se
                          produira le 26 mai prochain au Zénith de Paris....
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Image
                        className=" w-full h-auto"
                        src={smilaryImg}
                        objectFit="contain"
                        alt="similary image"
                      />
                    </div>
                    <div>
                      <h3 className="mt-[10px] mb-[5px] text-xs lg:text-sm leading-[1.2] font-extrabold ">
                        Micheline Shabani affiche son soutien à Mike Kalambay
                        pour s...
                      </h3>
                      <div>
                        <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
                          <time datetime="">mai 19, 2024</time>
                        </span>
                      </div>
                      <div className="hidden md:block mt-5">
                        <p className=" text-xs leading-[1.2] text-[#767676] ">
                          La star de la musique chrétienne congolaise, Micheline
                          Shabani, a apporté son soutien au pasteur Mike
                          Kalambay pour son prochain concert. Ce dernier se
                          produira le 26 mai prochain au Zénith de Paris....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-[10px] py-[10px] border-y border-[#ebebeb] ">
                  <div class=" text-center mt-4">
                    <h2 class=" font-bold text-xl md:text-3xl mb-[10px] ">
                      Partager la publication
                    </h2>
                  </div>
                  <div class=" flex justify-center gap-1">
                    <a
                      class="w-[40px] h-[40px] bg-[#516EAB]  rounded-full flex justify-center items-center "
                      href="/"
                    >
                      <svg
                        width="8"
                        height="15"
                        viewBox="0 0 8 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_102)">
                          <path
                            d="M7.5 3.73779H5.51758C5.38086 3.73779 5.26237 3.80615 5.16211 3.94287C5.06185 4.0887 5.01172 4.26188 5.01172 4.4624V5.89795H7.5V7.9624H5.01172V14.1558H2.63281V7.9624H0.5V5.89795H2.63281V4.69482C2.63281 3.81071 2.90625 3.06787 3.45312 2.46631C4 1.85563 4.68815 1.55029 5.51758 1.55029H7.5V3.73779Z"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_102">
                            <rect
                              width="7"
                              height="14"
                              fill="white"
                              transform="matrix(1 0 0 -1 0.5 14.73)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a
                      class="w-[40px] h-[40px] bg-[#29C5F6] rounded-full flex justify-center items-center "
                      href="/"
                    >
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.238 2.04248H14.1658L9.94116 6.85498L14.9041 13.4175H11.0212L7.98608 9.43896L4.49976 13.4175H2.57202L7.08374 8.26318L2.32593 2.04248H6.30444L9.05249 5.6792L12.238 2.04248ZM11.5544 12.269H12.6208L5.73022 3.13623H4.58179L11.5544 12.269Z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>
                    <a
                      class="w-[40px] h-[40px] bg-[#7BBF6A] rounded-full flex justify-center items-center "
                      href="/"
                    >
                      <svg
                        width="16"
                        height="19"
                        viewBox="0 0 16 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_110)">
                          <path
                            d="M9.89969 10.6792C9.98172 10.6792 10.3098 10.8257 10.8841 11.1187C11.4466 11.4116 11.7454 11.5874 11.7805 11.646C11.7923 11.6812 11.7981 11.7339 11.7981 11.8042C11.7981 12.0269 11.7395 12.2788 11.6223 12.5601C11.5169 12.8179 11.2825 13.0405 10.9192 13.228C10.5442 13.4038 10.1985 13.4917 9.88211 13.4917C9.50711 13.4917 8.8743 13.2808 7.98367 12.8589C7.32742 12.5659 6.75906 12.1733 6.27859 11.6812C5.78641 11.189 5.28836 10.5679 4.78445 9.81787C4.30399 9.10303 4.06375 8.45264 4.06375 7.8667V7.79639C4.08719 7.18701 4.33914 6.65381 4.81961 6.19678C4.97195 6.05615 5.14188 5.98584 5.32938 5.98584C5.37625 5.98584 5.4407 5.9917 5.52274 6.00342C5.60477 6.01514 5.66922 6.021 5.71609 6.021C5.83328 6.021 5.92117 6.03857 5.97977 6.07373C6.02664 6.12061 6.07938 6.21436 6.13797 6.35498C6.18484 6.48389 6.29031 6.77686 6.45438 7.23389C6.63016 7.69092 6.71805 7.94287 6.71805 7.98975C6.71805 8.13037 6.60086 8.32373 6.36649 8.56982C6.13211 8.81592 6.01492 8.97412 6.01492 9.04443C6.01492 9.09131 6.0325 9.13818 6.06766 9.18506C6.30203 9.67725 6.64188 10.1343 7.08719 10.5562C7.46219 10.9194 7.97195 11.2593 8.61649 11.5757C8.69852 11.6226 8.76883 11.646 8.82742 11.646C8.93289 11.646 9.11453 11.4819 9.37234 11.1538C9.63016 10.8374 9.80594 10.6792 9.89969 10.6792ZM7.86063 16.0054C8.70438 16.0054 9.51883 15.8354 10.304 15.4956C11.0891 15.1558 11.763 14.7046 12.3255 14.1421C12.888 13.5796 13.3333 12.9116 13.6614 12.1382C14.0013 11.353 14.1712 10.5386 14.1712 9.69482C14.1712 8.83936 14.0013 8.0249 13.6614 7.25146C13.3333 6.46631 12.888 5.79248 12.3255 5.22998C11.763 4.66748 11.0891 4.21631 10.304 3.87646C9.51883 3.54834 8.70438 3.38428 7.86063 3.38428C7.00516 3.38428 6.1907 3.54834 5.41727 3.87646C4.63211 4.21631 3.95828 4.66748 3.39578 5.22998C2.83328 5.79248 2.38797 6.46631 2.05984 7.25146C1.72 8.0249 1.55008 8.83936 1.55008 9.69482C1.55008 11.0542 1.95438 12.2847 2.76297 13.3862L1.95438 15.7241L4.39774 14.9507C5.45242 15.6538 6.60672 16.0054 7.86063 16.0054ZM7.86063 2.11865C8.88016 2.11865 9.85867 2.31787 10.7962 2.71631C11.7337 3.11475 12.5364 3.65381 13.2044 4.3335C13.8841 5.01318 14.4231 5.82178 14.8216 6.75928C15.2317 7.68506 15.4368 8.66357 15.4368 9.69482C15.4368 10.7144 15.2317 11.6929 14.8216 12.6304C14.4231 13.5679 13.8841 14.3706 13.2044 15.0386C12.5364 15.7183 11.7337 16.2573 10.7962 16.6558C9.85867 17.0659 8.88016 17.271 7.86063 17.271C6.54813 17.271 5.32352 16.9546 4.1868 16.3218L0.00320435 17.6577L1.3743 13.5972C0.647736 12.4019 0.284454 11.1011 0.284454 9.69482C0.284454 8.66357 0.483673 7.68506 0.882111 6.75928C1.29227 5.82178 1.83133 5.01318 2.4993 4.3335C3.17899 3.65381 3.98758 3.11475 4.92508 2.71631C5.85086 2.31787 6.82938 2.11865 7.86063 2.11865Z"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_110">
                            <rect
                              width="15.44"
                              height="18"
                              fill="white"
                              transform="matrix(1 0 0 -1 0 18.73)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a
                      class="w-[40px] h-[40px] bg-[#000000] rounded-full flex justify-center items-center "
                      href="/"
                    >
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_114)">
                          <path
                            d="M13.9307 12.9448V6.52881C13.7549 6.72412 13.5596 6.90967 13.3447 7.08545C11.8604 8.22803 10.6738 9.16553 9.78516 9.89795C9.50195 10.1421 9.27246 10.3325 9.09668 10.4692C8.91113 10.6157 8.66699 10.7524 8.36426 10.8794C8.07129 11.0063 7.78809 11.0698 7.51465 11.0698H7.48535C7.22168 11.0698 6.93848 11.0063 6.63574 10.8794C6.32324 10.7524 6.0791 10.6157 5.90332 10.4692C5.73731 10.3325 5.50781 10.1421 5.21485 9.89795C4.33594 9.16553 3.14942 8.22803 1.65528 7.08545C1.44043 6.90967 1.24512 6.72412 1.06934 6.52881V12.9448C1.06934 13.0229 1.09863 13.0913 1.15723 13.1499C1.21582 13.1987 1.27442 13.2231 1.33301 13.2231H13.667C13.7354 13.2231 13.7939 13.1987 13.8428 13.1499C13.8916 13.0913 13.9209 13.0229 13.9307 12.9448ZM13.9307 4.15576V3.95068L13.916 3.84814C13.9063 3.77979 13.9014 3.74561 13.9014 3.74561C13.9014 3.74561 13.8867 3.71631 13.8574 3.65771C13.8281 3.60889 13.8037 3.58936 13.7842 3.59912C13.7647 3.60889 13.7256 3.59912 13.667 3.56982H1.33301C1.26465 3.56982 1.20606 3.59912 1.15723 3.65771C1.1084 3.72607 1.0791 3.78955 1.06934 3.84814C1.06934 4.78564 1.47949 5.58154 2.29981 6.23584C3.37403 7.08545 4.49219 7.96924 5.6543 8.88721C5.69336 8.90674 5.7959 8.98486 5.96192 9.12158C6.11817 9.2583 6.24024 9.36572 6.32813 9.44385C6.41602 9.51221 6.54297 9.6001 6.70899 9.70752C6.86524 9.81494 7.00195 9.88818 7.11914 9.92725C7.2461 9.97607 7.36817 10.0054 7.48535 10.0151H7.51465C7.62207 10.0151 7.74414 9.98584 7.88086 9.92725C8.00781 9.87842 8.14453 9.80518 8.29102 9.70752C8.44727 9.60986 8.57422 9.52197 8.67188 9.44385C8.76953 9.35596 8.8916 9.24854 9.03809 9.12158C9.19434 8.99463 9.29688 8.9165 9.3457 8.88721C10.5078 7.96924 11.626 7.08545 12.7002 6.23584C13.0029 5.9917 13.2861 5.66455 13.5498 5.25439C13.8037 4.84424 13.9307 4.47803 13.9307 4.15576ZM15 3.84814V12.9448C15 13.3159 14.8682 13.6333 14.6045 13.897C14.3506 14.1509 14.0381 14.2827 13.667 14.2925H1.33301C0.971681 14.2925 0.659181 14.1606 0.395509 13.897C0.122072 13.6235 -0.00976405 13.3062 1.57849e-06 12.9448V3.84814C1.57849e-06 3.47705 0.131838 3.15967 0.395509 2.896C0.649416 2.64209 0.961916 2.51514 1.33301 2.51514H13.667C14.0381 2.51514 14.3506 2.64209 14.6045 2.896C14.8682 3.15967 15 3.47705 15 3.84814Z"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_114">
                            <rect
                              width="15"
                              height="15"
                              fill="white"
                              transform="matrix(1 0 0 -1 0 15.23)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a
                      class="w-[40px] h-[40px] bg-[#333333] rounded-full flex justify-center items-center "
                      href="/"
                    >
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_513)">
                          <path
                            d="M3.43268 13.6333H10.9327V11.4946H3.43268V13.6333ZM3.43268 8.27197H10.9327V5.06396H9.59967C9.37506 5.06396 9.18463 4.98584 9.02838 4.82959C8.87213 4.67334 8.79401 4.48291 8.79401 4.2583V2.91064H3.43268V8.27197ZM13.086 8.81396C13.086 8.66748 13.0323 8.54053 12.9249 8.43311C12.8174 8.32568 12.6905 8.27197 12.544 8.27197C12.3975 8.27197 12.273 8.32568 12.1705 8.43311C12.0679 8.54053 12.0167 8.66748 12.0167 8.81396C12.0167 8.96045 12.0679 9.08496 12.1705 9.1875C12.273 9.29004 12.3975 9.34131 12.544 9.34131C12.6905 9.34131 12.8174 9.29004 12.9249 9.1875C13.0323 9.08496 13.086 8.96045 13.086 8.81396ZM14.1553 8.81396V12.2856C14.1553 12.3638 14.1285 12.4297 14.0748 12.4834C14.0211 12.5371 13.96 12.564 13.8917 12.564H12.0167V13.897C12.0167 14.1216 11.9361 14.312 11.775 14.4683C11.6138 14.6245 11.4258 14.7026 11.211 14.7026H3.16901C2.9444 14.7026 2.75397 14.6245 2.59772 14.4683C2.44147 14.312 2.36334 14.1216 2.36334 13.897V12.564H0.488342C0.419983 12.564 0.358948 12.5371 0.305237 12.4834C0.251526 12.4297 0.22467 12.3638 0.22467 12.2856V8.81396C0.22467 8.37451 0.383362 7.99609 0.700745 7.67871C1.01813 7.36133 1.39655 7.20264 1.836 7.20264H2.36334V2.64697C2.36334 2.42236 2.44147 2.23193 2.59772 2.07568C2.75397 1.91943 2.9444 1.84131 3.16901 1.84131H8.79401C9.01862 1.84131 9.2652 1.89746 9.53375 2.00977C9.80231 2.12207 10.0147 2.25635 10.171 2.4126L11.4454 3.68701C11.6016 3.84326 11.7359 4.05566 11.8482 4.32422C11.9605 4.59277 12.0167 4.83936 12.0167 5.06396V7.20264H12.544C12.9835 7.20264 13.3619 7.36133 13.6793 7.67871C13.9966 7.99609 14.1553 8.37451 14.1553 8.81396Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_513">
                            <rect
                              width="13.94"
                              height="15"
                              fill="white"
                              transform="matrix(1 0 0 -1 0.220001 15.6401)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a
                      class="w-[40px] h-[40px] bg-[#179CDE] rounded-full flex justify-center items-center "
                      href="/"
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_122)">
                          <path
                            d="M10.6094 12.5425L11.9219 6.35498C11.9844 6.08415 11.9531 5.89665 11.8281 5.79248C11.7031 5.68831 11.5521 5.66748 11.375 5.72998L3.65625 8.69873C3.39583 8.8029 3.26302 8.91748 3.25781 9.04248C3.2526 9.16748 3.35938 9.26644 3.57812 9.33936L5.54688 9.94873L10.125 7.07373C10.2292 7.00081 10.3177 6.97738 10.3906 7.00342C10.4635 7.02946 10.4583 7.07894 10.375 7.15186L6.67188 10.4956L6.53125 12.5269C6.63542 12.5269 6.71354 12.5086 6.76562 12.4722C6.81771 12.4357 6.86979 12.3914 6.92188 12.3394L7.89062 11.4019L9.89062 12.8862C10.0781 12.9904 10.2344 13.0138 10.3594 12.9565C10.4844 12.8993 10.5677 12.7612 10.6094 12.5425ZM16 8.87061C16 9.97477 15.7917 11.0112 15.375 11.98C14.9583 12.9591 14.388 13.8107 13.6641 14.5347C12.9401 15.2586 12.0885 15.8289 11.1094 16.2456C10.1406 16.6623 9.10417 16.8706 8 16.8706C6.89583 16.8706 5.85938 16.6623 4.89062 16.2456C3.91146 15.8289 3.0599 15.2586 2.33594 14.5347C1.61198 13.8107 1.04167 12.9591 0.625 11.98C0.208333 11.0112 0 9.97477 0 8.87061C0 7.76644 0.208333 6.72998 0.625 5.76123C1.04167 4.79248 1.61198 3.94613 2.33594 3.22217C3.0599 2.49821 3.91146 1.92269 4.89062 1.49561C5.85938 1.07894 6.89583 0.870605 8 0.870605C9.10417 0.870605 10.1406 1.07894 11.1094 1.49561C12.0885 1.92269 12.9401 2.49821 13.6641 3.22217C14.388 3.94613 14.9583 4.79248 15.375 5.76123C15.7917 6.72998 16 7.76644 16 8.87061Z"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_122">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="matrix(1 0 0 -1 0 16.73)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a
                      class="w-[40px] h-[40px] bg-[#000000] rounded-full flex justify-center items-center "
                      href="/"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.75182 11.2036C9.66327 11.2036 9.57473 11.1981 9.48619 11.187C8.93281 11.1427 8.42369 10.9906 7.95885 10.7305C7.494 10.4704 7.10663 10.1356 6.79674 9.72607V9.70947C6.75247 9.6652 6.71926 9.60986 6.69713 9.54346C6.67499 9.47705 6.66393 9.41064 6.66393 9.34424C6.66393 9.17822 6.7248 9.03434 6.84654 8.9126C6.96829 8.79085 7.11217 8.72998 7.27818 8.72998C7.37779 8.72998 7.47187 8.75212 7.56041 8.79639C7.64895 8.84066 7.72089 8.90153 7.77623 8.979C8.00865 9.27783 8.29641 9.51579 8.63951 9.69287C8.98261 9.86995 9.35338 9.9585 9.75182 9.9585C10.0949 9.9585 10.4159 9.89486 10.7147 9.76758C11.0135 9.6403 11.2736 9.46598 11.495 9.24463L13.3378 7.38525C13.5702 7.1639 13.7528 6.90104 13.8856 6.59668C14.0184 6.29232 14.0848 5.96859 14.0848 5.62549C14.0848 4.93929 13.8441 4.35547 13.3627 3.87402C12.8812 3.39258 12.3029 3.15186 11.6278 3.15186C11.2847 3.15186 10.961 3.22103 10.6566 3.35938C10.3522 3.49772 10.0838 3.68311 9.85143 3.91553L8.78893 4.96143C8.73359 5.01676 8.66995 5.06104 8.59801 5.09424C8.52607 5.12744 8.44583 5.14404 8.35728 5.14404C8.19127 5.14404 8.04739 5.08317 7.92564 4.96143C7.8039 4.83968 7.74303 4.6958 7.74303 4.52979C7.74303 4.44124 7.75963 4.361 7.79283 4.28906C7.82603 4.21712 7.87031 4.15348 7.92564 4.09814L8.98814 3.03564C9.32018 2.70361 9.70754 2.44352 10.1503 2.25537C10.593 2.06722 11.0689 1.97314 11.578 1.97314C12.0871 1.97314 12.5685 2.07275 13.0223 2.27197C13.465 2.46012 13.8552 2.72298 14.1927 3.06055C14.5303 3.39811 14.7932 3.78825 14.9813 4.23096C15.1805 4.68473 15.2801 5.16618 15.2801 5.67529C15.2801 6.17334 15.1833 6.64648 14.9896 7.09473C14.7959 7.54297 14.5386 7.93311 14.2176 8.26514L12.3583 10.1079C12.0262 10.451 11.6361 10.7194 11.1879 10.9131C10.7396 11.1068 10.2609 11.2036 9.75182 11.2036ZM5.43541 15.5034C4.92629 15.5034 4.44485 15.4093 3.99107 15.2212C3.5373 15.022 3.14439 14.7563 2.81236 14.4243C2.48033 14.0923 2.22024 13.6994 2.03209 13.2456C1.83287 12.8029 1.73326 12.3215 1.73326 11.8013C1.73326 11.2922 1.8301 10.8135 2.02379 10.3652C2.21747 9.91699 2.48033 9.52686 2.81236 9.19482L4.67174 7.35205C5.00377 7.00895 5.39391 6.74056 5.84215 6.54688C6.29039 6.35319 6.76907 6.25635 7.27818 6.25635C7.88691 6.25635 8.44859 6.39193 8.96324 6.66309C9.47789 6.93424 9.90123 7.29118 10.2333 7.73389V7.75049C10.2775 7.79476 10.3107 7.8501 10.3329 7.9165C10.355 7.98291 10.3661 8.04932 10.3661 8.11572C10.3661 8.28174 10.3052 8.42562 10.1835 8.54736C10.0617 8.66911 9.91783 8.72998 9.75182 8.72998C9.65221 8.72998 9.55813 8.70785 9.46959 8.66357C9.38105 8.6193 9.30911 8.55843 9.25377 8.48096C9.03241 8.18213 8.75019 7.94417 8.40709 7.76709C8.06399 7.59001 7.68769 7.50146 7.27818 7.50146C6.93508 7.50146 6.61412 7.5651 6.31529 7.69238C6.01646 7.81966 5.75637 7.99398 5.53502 8.21533L3.69225 10.0581C3.45982 10.2905 3.27721 10.5589 3.14439 10.8633C3.01158 11.1676 2.94518 11.4914 2.94518 11.8345C2.94518 12.5207 3.1859 13.1045 3.66734 13.5859C4.14879 14.0674 4.72708 14.3081 5.40221 14.3081C5.74531 14.3081 6.0718 14.2389 6.3817 14.1006C6.69159 13.9622 6.95722 13.7769 7.17857 13.5444L8.22447 12.4985C8.27981 12.4432 8.34622 12.3989 8.42369 12.3657C8.50116 12.3325 8.57864 12.3159 8.65611 12.3159C8.8332 12.3159 8.98261 12.3768 9.10435 12.4985C9.2261 12.6203 9.28697 12.7642 9.28697 12.9302C9.28697 13.0187 9.27037 13.099 9.23717 13.1709C9.20396 13.2428 9.15969 13.3065 9.10435 13.3618L8.04185 14.4243C7.70982 14.7563 7.31969 15.0192 6.87144 15.2129C6.4232 15.4066 5.94452 15.5034 5.43541 15.5034Z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className=" mb-4">
                  <div className="flex gap-x-[15px] gap-y-[15px] ">
                    <div className="w-[30%] md:w-fit ">
                      <div>
                        <Image
                          className=" w-full h-auto"
                          src={LastArticlesImg}
                          objectFit="contain"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="w-[70%] md:w-fit py-0 md:py-4">
                      <div>
                        <h3 className="text-xs md:text-sm font-extrabold leading-[1.2]">
                          Kérozene : « Il renversa le stade des martyrs, bravo
                          au pasteur Moise Mbiye, bravo à tous les congol...
                        </h3>
                      </div>
                      <div>
                        <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase">
                          <time datetime="">mai 20, 2024</time>
                        </span>
                      </div>
                      <div className="hidden md:block mt-4">
                        <p className="text-xs leading-[1.2] text-[#767676] ">
                          Le méga concert donné hier par le pasteur gospel Moïse
                          Mbiye au stade des Martyrs de Kinshasa a fait le tour
                          des réseaux sociaux. Parmi les nombreuses réactions,
                          celle de la star ivoirienne Kerozene ...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mb-4">
                  <div className="flex gap-x-[15px] gap-y-[15px] ">
                    <div className="w-[30%] md:w-fit ">
                      <div>
                        <Image
                          className=" w-full h-auto"
                          src={LastArticlesImg}
                          objectFit="contain"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="w-[70%] md:w-fit py-0 md:py-4">
                      <div>
                        <h3 className="text-xs md:text-sm font-extrabold leading-[1.2]">
                          Kérozene : « Il renversa le stade des martyrs, bravo
                          au pasteur Moise Mbiye, bravo à tous les congol...
                        </h3>
                      </div>
                      <div>
                        <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase">
                          <time datetime="">mai 20, 2024</time>
                        </span>
                      </div>
                      <div className="hidden md:block mt-4">
                        <p className="text-xs leading-[1.2] text-[#767676] ">
                          Le méga concert donné hier par le pasteur gospel Moïse
                          Mbiye au stade des Martyrs de Kinshasa a fait le tour
                          des réseaux sociaux. Parmi les nombreuses réactions,
                          celle de la star ivoirienne Kerozene ...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mb-4">
                  <div className="flex gap-x-[15px] gap-y-[15px] ">
                    <div className="w-[30%] md:w-fit ">
                      <div>
                        <Image
                          className=" w-full h-auto"
                          src={LastArticlesImg}
                          objectFit="contain"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="w-[70%] md:w-fit py-0 md:py-4">
                      <div>
                        <h3 className="text-xs md:text-sm font-extrabold leading-[1.2]">
                          Kérozene : « Il renversa le stade des martyrs, bravo
                          au pasteur Moise Mbiye, bravo à tous les congol...
                        </h3>
                      </div>
                      <div>
                        <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase">
                          <time datetime="">mai 20, 2024</time>
                        </span>
                      </div>
                      <div className="hidden md:block mt-4">
                        <p className="text-xs leading-[1.2] text-[#767676] ">
                          Le méga concert donné hier par le pasteur gospel Moïse
                          Mbiye au stade des Martyrs de Kinshasa a fait le tour
                          des réseaux sociaux. Parmi les nombreuses réactions,
                          celle de la star ivoirienne Kerozene ...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-0 mt-24 ">
              <div className="flex gap-y-[15px] gap-x-[15px] mb-[15px] ">
                <div className=" w-full">
                  <Image
                    className=" w-full md:w-[130px] h-[78.1167px]  md:h-auto"
                    src={smallArticle}
                    width="130px"
                    height="78.1167"
                    alt="image"
                  />
                </div>
                <div>
                  <div>
                    <h3 className=" text-xs lg:text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire sur scène de Moïse Mbiye au Sta...
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
              <div className="flex gap-y-[15px] gap-x-[15px] mb-[15px]">
                <div className=" w-full">
                  <Image
                    className=" w-full md:w-[130px] h-[78.1167px] md:h-auto"
                    src={smallArticle}
                    objectFit="contain"
                    alt="image"
                  />
                </div>
                <div>
                  <div>
                    <h3 className=" text-xs lg:text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire sur scène de Moïse Mbiye au Sta...
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
              <div className="flex gap-y-[15px] gap-x-[15px] mb-[15px]">
                <div className=" w-full">
                  <Image
                    className="w-full md:w-[130px] h-[78.1167px] md:h-auto"
                    src={smallArticle}
                    objectFit="contain"
                    alt="image"
                  />
                </div>
                <div>
                  <div>
                    <h3 className=" text-xs lg:text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire sur scène de Moïse Mbiye au Sta...
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
              <div className="flex gap-y-[15px] gap-x-[15px] mb-[15px]">
                <div className=" w-full">
                  <Image
                    className="w-full md:w-[130px] h-[78.1167px] md:h-auto"
                    src={smallArticle}
                    objectFit="contain"
                    alt="image"
                  />
                </div>
                <div>
                  <div>
                    <h3 className="text-xs lg:text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire sur scène de Moïse Mbiye au Sta...
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
              <div className="flex gap-y-[15px] gap-x-[15px] mb-[15px]">
                <div className=" w-full">
                  <Image
                    className="w-full md:w-[130px] h-[78.1167px] md:h-auto"
                    src={smallArticle}
                    objectFit="contain"
                    alt="image"
                  />
                </div>
                <div>
                  <div>
                    <h3 className=" text-xs lg:text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire sur scène de Moïse Mbiye au Sta...
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
              <div className="flex gap-y-[15px] gap-x-[15px]">
                <div className=" w-full">
                  <Image
                    className="w-full md:w-[130px] h-[78.1167px] md:h-auto"
                    src={smallArticle}
                    objectFit="contain"
                    alt="image"
                  />
                </div>
                <div>
                  <div>
                    <h3 className="text-xs lg:text-sm font-extrabold leading-[1.2] ">
                      <Link href="/">
                        Polémique sur les réseaux sociaux après l’entrée
                        spectaculaire sur scène de Moïse Mbiye au Sta...
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
          </div>
        </div>
      </section>
    </>
  );
}
