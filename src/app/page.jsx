/* eslint-disable react/no-unescaped-entities */
"use client";
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
import { useDispatch, useSelector } from "react-redux";
import { useFetchPostsWithBasicAuth } from "@/hooks/hooks";
import { useEffect } from "react";
import { fetchPosts } from "@/redux/slices/postsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam illo
      doloribus veniam facere maiores obcaecati ullam adipisci culpa tenetur
      nulla et debitis numquam architecto consequuntur hic, nobis inventore
      excepturi dolorem?
    </div>
  );
}
