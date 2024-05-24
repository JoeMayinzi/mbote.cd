import Link from "next/link";

export default function LoadMore() {
  return (
    <div className="mt-5 flex justify-center">
      <Link
        className=" bg-[#FDAB09] w-[105px] h-9 font-bold text-xs uppercase flex justify-center items-center gap-[6px] "
        href="/"
      >
        Voir plus
        <svg
          width="9"
          height="10"
          viewBox="0 0 9 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_80)">
            <path
              d="M2.54156 8.59009C2.48427 8.59009 2.42697 8.56665 2.36968 8.51978C2.31239 8.4729 2.2551 8.41821 2.19781 8.35571C2.08322 8.30363 2.04546 8.20597 2.08453 8.06274C2.12359 7.91951 2.19781 7.79061 2.30718 7.67603L5.85406 4.48071L2.30718 1.50415C2.19781 1.38957 2.12359 1.26196 2.08453 1.12134C2.04546 0.980713 2.08322 0.881754 2.19781 0.824463C2.31239 0.709879 2.42697 0.652588 2.54156 0.652588C2.65614 0.652588 2.77072 0.709879 2.88531 0.824463L6.88531 4.24634C6.9426 4.30363 6.99468 4.36092 7.04156 4.41821C7.08843 4.4755 7.11187 4.5328 7.11187 4.59009C7.11187 4.64738 7.08843 4.70467 7.04156 4.76196C6.99468 4.81925 6.9426 4.87655 6.88531 4.93384L2.88531 8.48071C2.82802 8.538 2.77072 8.57056 2.71343 8.57837C2.65614 8.58618 2.59885 8.59009 2.54156 8.59009Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_80">
              <rect
                width="8"
                height="9"
                fill="white"
                transform="matrix(1 0 0 -1 0.939995 9.01978)"
              />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </div>
  );
}
