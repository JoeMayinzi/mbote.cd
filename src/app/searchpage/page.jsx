"use client";
import Image from "next/image";
import SearchImg from "../../assets/images/result-img.webp";
import Link from "next/link";
import LoadMore from "@/components/load-more/More";
import Router, { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import useFallySearchResults from "@/hooks/useFilteredPostsBySearchQuery";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect, useState } from "react";
import { fetchPosts } from "@/redux/slices/postsSlice";
import SearchedPosts from "@/components/articles/searchedPosts/SearchedPosts";

/* eslint-disable react/no-unescaped-entities */
export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [searchUpdate, setSearchUpdate] = useState("");
  const router = useRouter();

  const handleSearchUpadate = (event) => {
    setSearchUpdate(event.target.value);
    console.log(searchUpdate);
  };

  const handleClickUpdateSearch = () => {
    router.push(`/searchpage?q=${searchUpdate}`);
  };

  const handleClickUpdateSearchOnKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleClickUpdateSearch();
    }
  };

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <section>
        <div className="container mx-auto px-4 md:px-4 mt-5 p-[30px] ">
          <div className="w-full lg:w-[834px] ">
            <div>
              <h4 className=" text-xl md:text-[32px] font-bold mb-6">
                Résultats de recherche
              </h4>
            </div>
            <div className="search-shadaw px-5 mt-7">
              <div className="flex items-center">
                <div className=" w-[95%] h-[59px]">
                  <input
                    className=" w-full h-full focus:outline-none placeholder-color text-xl font-normal"
                    type="text"
                    placeholder="Search something here"
                    value={searchUpdate}
                    onChange={handleSearchUpadate}
                    onKeyDown={handleClickUpdateSearchOnKeyDown}
                  />
                </div>
                <div className=" mt-2">
                  <button onClick={handleClickUpdateSearch}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.3623 22.0692L18.9151 17.622C20.3282 15.9065 21.0389 13.8017 21.0374 11.7022C21.0389 9.31731 20.1245 6.92451 18.3046 5.10459C16.4851 3.2842 14.0921 2.37028 11.7082 2.37171C9.32305 2.37028 6.93048 3.28417 5.11105 5.10459C3.29113 6.92402 2.37674 9.31732 2.3777 11.7015C2.37674 14.0864 3.29113 16.4792 5.11105 18.2976C6.93048 20.1173 9.32329 21.0317 11.7082 21.0303C13.8074 21.0317 15.9127 20.3213 17.628 18.9092L22.075 23.3566L23.3623 22.0692ZM6.3984 17.0103C4.9296 15.5417 4.19905 13.626 4.19856 11.7015C4.19903 9.77739 4.9296 7.86124 6.3984 6.39194C7.86721 4.92386 9.78337 4.19329 11.7082 4.19259C13.632 4.19331 15.5482 4.92386 17.017 6.39194C18.4851 7.86051 19.2156 9.77737 19.2161 11.7022C19.2156 13.6263 18.4851 15.5422 17.017 17.0103C15.5482 18.4781 13.6325 19.2086 11.7082 19.2094C9.78337 19.2089 7.86721 18.4784 6.3984 17.0103Z"
                        fill="#494949"
                        fill-opacity="0.3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm">
                Si vous n'êtes pas satisfait du résultat, vous pouvez utiliser
                un autre terme de recherche.
              </p>
            </div>
            {posts != null ? (
              posts
                .filter((post) =>
                  post.title.rendered.toLowerCase().includes(searchQuery)
                )
                .map((post) => (
                  <SearchedPosts
                    key={post.id}
                    title={post.title.rendered}
                    content={post.content.rendered}
                    featured_image={post.featured_image}
                    category_names={post.category_names}
                    date={post.date}
                  />
                ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <LoadMore />
        </div>
      </section>
    </Suspense>
  );
}
