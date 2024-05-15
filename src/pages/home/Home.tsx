import { useState } from "react";
import { ChangeEvent } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { CharacterList } from "../../components/charlist/CharList";
import { SearchBar } from "../../components/search-bar";
import { Loader } from "../../components/loader";
import { Dropdown } from "../../components/dropdown/Dropdown";

import UpArrow from "../../assets/svg/home/up-arrow-icon.svg?react";
import DownArrow from "../../assets/svg/home/down-arrow-icon.svg?react";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { ICharacterType, IInfo } from "../../utils/types";
import { changeOrder } from "../../features/sortSlice";
import { Pagination } from "../../components/pagination/Pagination";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { sortOption, order } = useAppSelector((state) => state.sortStore);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [info, setInfo] = useState<IInfo | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["characters", { page: currentPage }],
    queryFn: async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      );
      const results = await response.json();
      setInfo(results.info);
      return results.results;
    },
    placeholderData: keepPreviousData,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event?.target.value);
  };

  const filtered = data
    ? data
        .filter((item: ICharacterType) => {
          if (query) {
            return (
              item.name.toLowerCase().includes(query.toLowerCase()) ||
              item.gender.toLowerCase().startsWith(query.toLowerCase()) ||
              item.species.toLowerCase().includes(query.toLowerCase())
            );
          } else {
            return item;
          }
        })
        .sort((a: ICharacterType, b: ICharacterType) => {
          switch (sortOption) {
            case "Name":
              return order === "ASC"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
            case "Gender":
              return order === "ASC"
                ? a.gender.localeCompare(b.gender)
                : b.gender.localeCompare(a.gender);
            case "Status":
              return order === "ASC"
                ? a.status.localeCompare(b.status)
                : b.status.localeCompare(a.status);
            default:
              return 0;
          }
        })
    : [];

  const searchMessage =
    "Oops! It seems we don`t have any products that match your search criteria".split(
      " "
    );

  const dataToShow =
    sortOption === "All" && order === "DESC" ? filtered.reverse() : filtered;

  return (
    <div>
      <div className="grid w-full max-w-6xl	m-auto">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="flex justify-center items-cetner flex-col py-0	pr-6 pl-6 md:flex-row justify-between">
              <SearchBar query={query} handleChange={handleChange} />
              <div className="flex justify-center items-center gap-2.5">
                <Dropdown />
                <div className="flex relative w-14 h-14">
                  <UpArrow
                    className={classNames(
                      "flex w-8 h-8 cursor-pointer relative top-3.5 text-defaultArrow transition all delay-50 hover:text-hoveredArrow left-0.5",
                      {
                        "text-activeArrow text-primaryOrange": order === "ASC",
                      }
                    )}
                    onClick={() => dispatch(changeOrder())}
                  />
                  <DownArrow
                    className={classNames(
                      "flex w-8 h-8 cursor-pointer relative top-3.5 text-defaultArrow transition all delay-50 hover:text-hoveredArrow right-0.5",
                      {
                        "text-activeArrow text-primaryOrange": order === "DESC",
                      }
                    )}
                    onClick={() => dispatch(changeOrder())}
                  />
                </div>
              </div>
            </div>
            <CharacterList list={dataToShow} />
          </>
        )}
        {!filtered.length && data && data.length > 0 && (
          <motion.div className="flex items-center justify-center flex-wrap gap-2.5 p-2.5">
            {searchMessage.map((word, i) => (
              <motion.span
                className="text-primaryOrange text-center text-xl md:text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: i / 15,
                }}
                key={i}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )}

        {data && filtered.length > 0 && (
          <Pagination
            currentPage={currentPage}
            info={info}
            handleCurrentPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};
