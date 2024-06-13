"use client";
import Image from "next/image";
import React from "react";
import Moment from "react-moment";
const Relatedposts = ({ title, content, featured_image, date }) => {
  const titleScliced = title.slice(0, 60) + "...";
  const contentScliced = content.slice(0, 250) + "...";
  return (
    <>
      <div className=" w-full h-full ">
        <div>
          <Image
            className=" h-auto md:h-[161px] "
            src={featured_image}
            width="269"
            height="161"
            alt="similary image"
          />
        </div>
        <div>
          <h3
            dangerouslySetInnerHTML={{ __html: titleScliced }}
            className="mt-[10px] mb-[5px] text-xs lg:text-sm leading-[1.2] font-extrabold "
          ></h3>
          <div>
            <span className="text-[#e3382b] text-xs  font-medium tracking-[.5px] uppercase ">
              <time datetime="">
                <Moment format="DD/MM/YY">{date}</Moment>
              </time>
            </span>
          </div>
          <div className="hidden md:block mt-5">
            <p
              dangerouslySetInnerHTML={{ __html: contentScliced }}
              className=" text-xs leading-[1.2] text-[#767676] "
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Relatedposts;
