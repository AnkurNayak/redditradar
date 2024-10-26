"use client";
import { addSubreddit } from "@/redux/slices/subRedditSlice";
import { RootState } from "@/redux/store";
import { useState, ChangeEvent, useEffect } from "react";
import { HiMagnifyingGlass, HiPlus } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { subreddits } = useSelector((state: RootState) => state.subreddits);
  const [isTextOpen, setIsTextOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  console.log(subreddits.length);

  useEffect(() => {
    if (subreddits.length === 0) {
      setIsTextOpen(true);
    }
  }, [subreddits.length]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(e.target.value.length > 0);
  };

  const handleAddSubreddit = () => {
    if (searchTerm) {
      dispatch(addSubreddit(searchTerm));
      setSearchTerm("");
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`search-container ${subreddits.length > 0 ? "moved" : "mid"}`}
    >
      {isTextOpen && subreddits.length === 0 && (
        <div
          style={{
            fontWeight: 200,
            fontSize: 24,
            padding: "0 4px",
            textAlign: "center",
          }}
        >
          You haven&apos;t searched anything yet. Try searching for subreddit
          posts.
        </div>
      )}
      <div className="input-wrapper" style={{ padding: "8px 0" }}>
        <div className="display-flex input-box">
          <HiMagnifyingGlass size={40} className="search-icon" />
          <input
            type="text"
            placeholder="Search Subreddit"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(searchTerm.length > 0)}
          />
        </div>
        {isOpen && (
          <div className="search-result">
            <div className="search-opt border-top">
              <div className="add-reddit" onClick={handleAddSubreddit}>
                <div className="text-sm align-items-center display-flex flex-gap">
                  <HiPlus size={12} />
                  ADD SUBREDDIT FOR :
                </div>
                <div className="text-xl">{searchTerm}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
