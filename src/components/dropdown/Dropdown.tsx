/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import RightArrow from "../../assets/svg/dropdown/chevron-right.svg?react";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { resetOrder, setSortOption } from "../../features/sortSlice";

import "./dropdown.scss";

export const Dropdown = () => {
  const { sortOption } = useAppSelector((state) => state.sortStore);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState("All");

  const toggleDropdown = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    dispatch(setSortOption(currentDropdown));
  }, [currentDropdown]);

  const handleSelect = (item: string) => {
    if (item === "All") {
      dispatch(resetOrder());
    }
    setCurrentDropdown(item);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center relative w-full max-w-120">
      <div
        className={classNames(
          "bg-primaryOrange text-white min-w-32 max-w-40 w-full text-s font-normal leading-4 tracking-normal text-left rounded-lg p-3 cursor-pointer md:leading-6"
        )}
      >
        <div
          className="flex max-w-full items-center justify-between gap-2"
          onClick={toggleDropdown}
        >
          <p>{sortOption}</p>
          <RightArrow
            color="#fff"
            className={classNames("dropdown__icon", {
              dropdown__icon_active: isOpen,
            })}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
              className={classNames(
                "w-full max-w-40 absolute top-dropdown text-black rounded-lg left-0 z-50 list-none shadow-customForDropdown",
                {
                  "is-active": isOpen,
                  dropdown__content: true,
                }
              )}
            >
              {["All", "Name", "Gender"].map((item) => (
                <li
                  className={classNames(
                    "flex items-center gap-2 text-s font-normal leading-6 text-left cursor-pointer bg-white p-3 md:text-base hover:bg-secondaryOrange",
                    {
                      "text-black	bg-secondaryOrange pointer-events-none":
                        sortOption === item,
                    }
                  )}
                  onClick={() => handleSelect(item)}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
