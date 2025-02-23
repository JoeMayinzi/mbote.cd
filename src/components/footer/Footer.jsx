/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import LogoFooter from "../../assets/images/logo-footer.png";
import GooglePlay from "../../assets/images/playstore.png";
import Link from "next/link";
import { Montserrat } from "@next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  adjustFontFallback: false,
});

export default function Footer() {
  return (
    <footer className={`${font.className} bg-[#000000] pt-[83px] `}>
      <div className="container-fluid mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 pb-[26px] gap-6">
          <div>
            <div>
              <Image src={LogoFooter} objectFit="contain" alt="footer logo" />
            </div>
            <div>
              <div className=" mt-[10px] mb-[26px] ">
                <p className=" text-white text-sm leading-[28px] font-bold ">
                  MBOTE.CD, est un site web divertissement congolais axé sur les
                  tendances jeunes, buzz célébrités, Musiques, Sports et autres.
                </p>
              </div>
              <div>
                <div>
                  <p className=" text-sm font-normal mb-[26px] text-white">
                    Tél.: +243 858 117 284 Whatsapp : +243 858 117 284
                  </p>
                  <p className=" text-sm font-normal mb-[26px] text-white">
                    E-mail : infos@mbote.cd
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-[10px] mb-[26px] ">
              <h3 className=" text-white text-[22px] font-bold leading-[28px] ">
                Support
              </h3>
            </div>
            <div>
              <ul>
                <li className=" mb-2 text-sm text-white hover:text-[#a2a2a2] ">
                  <Link href="/">Qui sommes-nous</Link>
                </li>
                <li className=" mb-2 text-sm text-white hover:text-[#a2a2a2] ">
                  <Link href="/"> Rédacteurs et auteurs </Link>
                </li>
                <li className=" mb-2 text-sm text-white hover:text-[#a2a2a2] ">
                  <Link href="/"> Condition générale d'utilisation</Link>
                </li>
                <li className=" mb-2 text-sm text-white hover:text-[#a2a2a2] ">
                  <Link href="/"> Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="mt-[10px] mb-[26px] ">
              <h3 className=" text-white text-[22px] font-bold leading-[28px] ">
                Rejoignez nous
              </h3>
            </div>
            <div className="flex gap-[10px] ">
              <div className=" w-[39px] h-[39px] ">
                <Link href="/">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 9 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 4.11719H6.45117C6.27539 4.11719 6.12305 4.20508 5.99414 4.38086C5.86523 4.56836 5.80078 4.79102 5.80078 5.04883V6.89453H9V9.54883H5.80078V17.5117H2.74219V9.54883H0V6.89453H2.74219V5.34766C2.74219 4.21094 3.09375 3.25586 3.79688 2.48242C4.5 1.69727 5.38477 1.30469 6.45117 1.30469H9V4.11719Z"
                      fill="white"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className=" w-[39px] h-[39px] ">
                <Link href="/">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 17 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_46)">
                      <path
                        d="M11.0664 9.4082C11.0664 8.70508 10.8145 8.10156 10.3105 7.59766C9.80664 7.09375 9.20312 6.8418 8.5 6.8418C7.78516 6.8418 7.17871 7.09375 6.68066 7.59766C6.18262 8.10156 5.93359 8.70508 5.93359 9.4082C5.93359 10.123 6.18262 10.7295 6.68066 11.2275C7.17871 11.7256 7.78516 11.9746 8.5 11.9746C9.20312 11.9746 9.80664 11.7256 10.3105 11.2275C10.8145 10.7295 11.0664 10.123 11.0664 9.4082ZM12.4551 9.4082C12.4551 9.95898 12.3496 10.4746 12.1387 10.9551C11.9395 11.4355 11.6611 11.8545 11.3037 12.2119C10.9463 12.5693 10.5273 12.8535 10.0469 13.0645C9.56641 13.2637 9.05078 13.3633 8.5 13.3633C7.94922 13.3633 7.43359 13.2637 6.95312 13.0645C6.47266 12.8535 6.05371 12.5693 5.69629 12.2119C5.33887 11.8545 5.05469 11.4355 4.84375 10.9551C4.64453 10.4746 4.54492 9.95898 4.54492 9.4082C4.54492 8.85742 4.64453 8.3418 4.84375 7.86133C5.05469 7.38086 5.33887 6.96191 5.69629 6.60449C6.05371 6.24707 6.47266 5.96875 6.95312 5.76953C7.43359 5.55859 7.94922 5.45312 8.5 5.45312C9.05078 5.45312 9.56641 5.55859 10.0469 5.76953C10.5273 5.96875 10.9463 6.24707 11.3037 6.60449C11.6611 6.96191 11.9395 7.38086 12.1387 7.86133C12.3496 8.3418 12.4551 8.85742 12.4551 9.4082ZM13.5449 5.29492C13.5449 5.55273 13.4541 5.76953 13.2725 5.94531C13.0908 6.12109 12.8711 6.20898 12.6133 6.20898C12.3555 6.20898 12.1387 6.12109 11.9629 5.94531C11.7871 5.76953 11.6992 5.55273 11.6992 5.29492C11.6992 5.03711 11.7871 4.81738 11.9629 4.63574C12.1387 4.4541 12.3555 4.36328 12.6133 4.36328C12.8711 4.36328 13.0908 4.4541 13.2725 4.63574C13.4541 4.81738 13.5449 5.03711 13.5449 5.29492ZM8.5 3.08008C8.21875 3.08008 7.87305 3.08008 7.46289 3.08008C7.04102 3.06836 6.61328 3.07129 6.17969 3.08887C5.74609 3.10645 5.33008 3.13281 4.93164 3.16797C4.5332 3.21484 4.20508 3.29102 3.94727 3.39648C3.77148 3.4668 3.61328 3.5459 3.47266 3.63379C3.33203 3.72168 3.19727 3.83594 3.06836 3.97656C2.92773 4.11719 2.81348 4.25488 2.72559 4.38965C2.6377 4.52441 2.55859 4.67969 2.48828 4.85547C2.38281 5.11328 2.30664 5.44141 2.25977 5.83984C2.21289 6.23828 2.18359 6.6543 2.17188 7.08789C2.16016 7.52148 2.1543 7.94922 2.1543 8.37109C2.16602 8.78125 2.17188 9.12695 2.17188 9.4082C2.17188 9.68945 2.16602 10.0352 2.1543 10.4453C2.1543 10.8672 2.16016 11.2949 2.17188 11.7285C2.18359 12.1621 2.21289 12.5781 2.25977 12.9766C2.30664 13.375 2.38281 13.7031 2.48828 13.9609C2.55859 14.1367 2.6377 14.2949 2.72559 14.4355C2.81348 14.5762 2.92773 14.7109 3.06836 14.8398C3.19727 14.9805 3.33203 15.0947 3.47266 15.1826C3.61328 15.2705 3.77148 15.3496 3.94727 15.4199C4.20508 15.5254 4.5332 15.6016 4.93164 15.6484C5.33008 15.6953 5.74609 15.7246 6.17969 15.7363C6.61328 15.748 7.04102 15.7539 7.46289 15.7539C7.87305 15.7422 8.21875 15.7363 8.5 15.7363C8.78125 15.7363 9.12695 15.7422 9.53711 15.7539C9.95898 15.7539 10.3867 15.748 10.8203 15.7363C11.2539 15.7246 11.6699 15.6953 12.0684 15.6484C12.4668 15.6016 12.7949 15.5254 13.0527 15.4199C13.2285 15.3496 13.3838 15.2705 13.5186 15.1826C13.6533 15.0947 13.791 14.9805 13.9316 14.8398C14.0723 14.7109 14.1865 14.5762 14.2744 14.4355C14.3623 14.2949 14.4414 14.1367 14.5117 13.9609C14.6172 13.7031 14.6934 13.375 14.7402 12.9766C14.7754 12.5781 14.8018 12.1621 14.8193 11.7285C14.8369 11.2949 14.8398 10.8672 14.8281 10.4453C14.8281 10.0352 14.8281 9.68945 14.8281 9.4082C14.8281 9.12695 14.8281 8.78125 14.8281 8.37109C14.8398 7.94922 14.8369 7.52148 14.8193 7.08789C14.8018 6.6543 14.7754 6.23828 14.7402 5.83984C14.6934 5.44141 14.6172 5.11328 14.5117 4.85547C14.4414 4.67969 14.3623 4.52441 14.2744 4.38965C14.1865 4.25488 14.0723 4.11719 13.9316 3.97656C13.791 3.83594 13.6533 3.72168 13.5186 3.63379C13.3838 3.5459 13.2285 3.4668 13.0527 3.39648C12.7949 3.29102 12.4668 3.21484 12.0684 3.16797C11.6699 3.13281 11.2539 3.10645 10.8203 3.08887C10.3867 3.07129 9.95898 3.06836 9.53711 3.08008C9.12695 3.08008 8.78125 3.08008 8.5 3.08008ZM16.2168 9.4082C16.2168 9.94727 16.2139 10.4805 16.208 11.0078C16.2021 11.5352 16.1875 12.0625 16.1641 12.5898C16.1289 13.2109 16.0264 13.7939 15.8564 14.3389C15.6865 14.8838 15.373 15.3789 14.916 15.8242C14.459 16.2812 13.9609 16.5977 13.4219 16.7734C12.8828 16.9492 12.3027 17.0488 11.6816 17.0723C11.1543 17.1074 10.624 17.125 10.0908 17.125C9.55762 17.125 9.02734 17.125 8.5 17.125C7.96094 17.125 7.42773 17.125 6.90039 17.125C6.37305 17.125 5.8457 17.1074 5.31836 17.0723C4.69727 17.0488 4.11426 16.9492 3.56934 16.7734C3.02441 16.5977 2.5293 16.2812 2.08398 15.8242C1.62695 15.3789 1.31055 14.8838 1.13477 14.3389C0.958984 13.7939 0.859375 13.2109 0.835938 12.5898C0.800781 12.0625 0.783203 11.5352 0.783203 11.0078C0.783203 10.4805 0.783203 9.94727 0.783203 9.4082C0.783203 8.88086 0.783203 8.35059 0.783203 7.81738C0.783203 7.28418 0.800781 6.75391 0.835938 6.22656C0.859375 5.60547 0.958984 5.02539 1.13477 4.48633C1.31055 3.94727 1.62695 3.44922 2.08398 2.99219C2.5293 2.53516 3.02441 2.22168 3.56934 2.05176C4.11426 1.88184 4.69727 1.7793 5.31836 1.74414C5.8457 1.7207 6.37305 1.70605 6.90039 1.7002C7.42773 1.69434 7.96094 1.69141 8.5 1.69141C9.02734 1.69141 9.55762 1.69434 10.0908 1.7002C10.624 1.70605 11.1543 1.7207 11.6816 1.74414C12.3027 1.7793 12.8828 1.88184 13.4219 2.05176C13.9609 2.22168 14.459 2.53516 14.916 2.99219C15.373 3.44922 15.6865 3.94727 15.8564 4.48633C16.0264 5.02539 16.1289 5.60547 16.1641 6.22656C16.1875 6.75391 16.2021 7.28418 16.208 7.81738C16.2139 8.35059 16.2168 8.88086 16.2168 9.4082Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_46">
                        <rect
                          width="15.44"
                          height="18"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.780029 18.25)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
              <div className=" w-[39px] h-[39px] ">
                <Link href="/">
                  <svg
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6733 3.00293H22.7026L16.0639 10.5654L23.8627 20.8779H17.7612L12.9917 14.626L7.51314 20.8779H4.48384L11.5737 12.7783L4.09712 3.00293H10.3491L14.6674 8.71777L19.6733 3.00293ZM18.5991 19.0732H20.2749L9.44673 4.72168H7.64204L18.5991 19.0732Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className=" w-[39px] h-[39px] ">
                <Link href="/">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_49)">
                      <path
                        d="M13.3496 9.4082C13.3496 9.16211 13.2559 8.98047 13.0684 8.86328L7.91799 5.64648C7.70706 5.51758 7.49026 5.51172 7.2676 5.62891C7.04495 5.74609 6.93362 5.93359 6.93362 6.19141V12.625C6.93362 12.8828 7.04495 13.0703 7.2676 13.1875C7.37307 13.2344 7.47268 13.2578 7.56643 13.2578C7.70706 13.2578 7.82424 13.2285 7.91799 13.1699L13.0684 9.95312C13.2559 9.84766 13.3496 9.66602 13.3496 9.4082ZM18.5 9.4082C18.5 10.0527 18.4942 10.5566 18.4824 10.9199C18.4707 11.2832 18.4473 11.7402 18.4121 12.291C18.377 12.8418 18.3008 13.334 18.1836 13.7676C18.0664 14.2598 17.8379 14.6758 17.4981 15.0156C17.1465 15.3437 16.7246 15.5312 16.2324 15.5781C14.7559 15.7539 12.5117 15.8418 9.50002 15.8418C6.48831 15.8418 4.24417 15.7539 2.7676 15.5781C2.28713 15.5312 1.86526 15.3437 1.50198 15.0156C1.15042 14.6758 0.91604 14.2598 0.798853 13.7676C0.716821 13.334 0.646509 12.8418 0.587915 12.291C0.529321 11.7402 0.505884 11.2832 0.517603 10.9199C0.529321 10.5566 0.523462 10.0527 0.500024 9.4082C0.476587 8.76367 0.482446 8.25977 0.517603 7.89648C0.552759 7.5332 0.576196 7.07617 0.587915 6.52539C0.599634 5.97461 0.675806 5.48242 0.816431 5.04883C0.933618 4.55664 1.16213 4.14648 1.50198 3.81836C1.85354 3.47852 2.27542 3.28516 2.7676 3.23828C4.24417 3.07422 6.48831 2.99219 9.50002 2.99219C12.5117 2.99219 14.7559 3.07422 16.2324 3.23828C16.7129 3.28516 17.1348 3.47852 17.4981 3.81836C17.8496 4.14648 18.084 4.55664 18.2012 5.04883C18.2949 5.48242 18.3653 5.97461 18.4121 6.52539C18.459 7.07617 18.4824 7.5332 18.4824 7.89648C18.4824 8.25977 18.4883 8.76367 18.5 9.4082Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_49">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.5 18.25)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src={GooglePlay}
                objectFit="contain"
                alt="google play image"
              />
            </div>
          </div>
        </div>
        <div className="py-[10px] border-t border-[rgba(255,255,255,.12)]">
          <div className=" block text-center md:flex justify-between px-6">
            <div>
              <p className=" text-xs leading-[28px] font-normal text-[#828282] uppercase ">
                © MBOTE.CD - MBOTE AFRICA SARL
              </p>
            </div>
            <div>
              <p className=" text-xs leading-[28px] font-normal text-[#828282] uppercase ">
                by &nbsp;
                <Link className=" text-[#fdab09] " href="https://mbote.africa/">
                  mbote africa
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
