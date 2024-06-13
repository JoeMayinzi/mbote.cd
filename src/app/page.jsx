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
import { useEffect } from "react";
import { fetchTodos } from "@/redux/slices/todoSlice";
import { fetchPosts } from "@/redux/slices/postsSlice";
import { fetchData } from "@/service/posts/postsService";

export default function Home() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  // id : post.id
  // title : post.title.rendered
  // content : post.content.rendered
  // categorie :

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {posts !== null ? (
        posts.map((post) => (
          <div key={post.id}>
            <span> {post.id} </span>
            <h2> {post.title.rendered} </h2>
            <p> {post.content.rendered} </p>
          </div>
        ))
      ) : (
        <div>No data avaible for the me moment please refresh your browser</div>
      )}
    </div>
  );
}
