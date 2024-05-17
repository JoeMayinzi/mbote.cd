/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Montserrat } from "@next/font/google";

const Montserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <main className={`${Montserat.className}`}>
      <div className="container mx-auto  mb-5 py-[50px]  not-found-shadaw mt-10">
        <div className="flex pb-52">
          <div className="w-[50%] "></div>
          <div className="w-[50%] ">
            <div className="ml-auto text-center pt-[50px]  ">
              <h2 className="font-bold text-[56px] ">Erreur 404</h2>
              <p className="my-[30px] text-[#666] text-lg">
                Oops ! Page non trouvée.
              </p>
              <div className="flex justify-center">
                <Link
                  className="block w-[210px] px-[36px] py-5 bg-[#fdab09] font-bold text-sm "
                  href="/"
                >
                  Revenir à l'accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
