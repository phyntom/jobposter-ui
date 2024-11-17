import PostCard from "./PostCard";
import { JobPost } from "../schema";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import PaginationBox from "./PaginationBox";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { debounce } from "lodash";
import { LuSearch } from "react-icons/lu";

type PostCardListProps = {
  isHome?: boolean;
};

async function fetchJobs(searchText: string): Promise<JobPost[]> {
  const apiUrl =
    searchText.trim() !== ""
      ? `/api/jobs?q=${searchText}&_limit=6`
      : "/api/jobs?_limit=6";
  const res = await fetch(`${apiUrl}`);
  return res.json();
}

const PostCardList = ({ isHome = false }: PostCardListProps) => {
  const [searchText, setSearchText] = useState("");
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const { isLoading, error, data } = useQuery<JobPost[]>({
    queryKey: ["jobs", searchText],
    queryFn: () => fetchJobs(searchText),
  });

  const delayedSetSearchText = debounce(setSearchText, 100);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setInputValue(value);
  };

  const handleKeyDonw = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.currentTarget as HTMLInputElement;
    const text = target.value;
    if (event.key === "Enter") {
      delayedSetSearchText(text);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  if (isLoading) return <Spinner loading={isLoading} />;

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <section className="px-4 py-10">
        <motion.div
          className="container-xl lg:container m-auto"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 3, type: "spring" }}
        >
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Featured Jobs" : "Jobs Listing"}
          </h2>
          <div className="my-4">
            {!isHome && (
              <div className="relative">
                <LuSearch className="absolute left-2.5 top-2.5 size-4" />
                <Input
                  ref={inputRef}
                  value={inputValue}
                  type="text"
                  placeholder="Type and press enter to search..."
                  className="w-full pl-8 border border-gray-300 rounded-lg py-4"
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDonw}
                />
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-2 xl:grid-cols-3 gap-6">
            {isLoading ? (
              <Spinner loading={isLoading} />
            ) : error ? (
              <div>Something went wrong...</div>
            ) : (
              <>
                {data?.map((jobPost) => (
                  <PostCard
                    key={jobPost.id}
                    jobPost={jobPost}
                    showFullDescription={false}
                  />
                ))}
              </>
            )}
          </div>
          {!isHome && <PaginationBox className="my-2" />}
        </motion.div>
      </section>
    </>
  );
};

export default PostCardList;
