import classNames from "classnames";
import { IInfo } from "../../utils/types";
import { useEffect, useState } from "react";

type Props = {
  currentPage: number;
  info: IInfo | null;
  handleCurrentPageChange: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination: React.FC<Props> = ({
  currentPage,
  info,
  handleCurrentPageChange,
}) => {
  const [pagesToShow, setPagesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setPagesToShow(5);
      } else {
        setPagesToShow(0);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pagesToShow]);

  const handleClick = (page: number) => {
    handleCurrentPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (info) {
      for (
        let i = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
        i <= Math.min(info.pages, currentPage + Math.floor(pagesToShow / 2));
        i++
      ) {
        pageNumbers.push(
          <button
            key={i}
            className={`${
              currentPage === i ? "font-bold" : ""
            } mx-1 py-1 px-3 border rounded-lg ${
              currentPage === i ? "bg-white border-primaryOrange" : ""
            }`}
            onClick={() => handleClick(i)}
          >
            {i}
          </button>
        );
      }

      if (currentPage > Math.floor(pagesToShow / 2) + 1) {
        pageNumbers.unshift(
          <button
            key="prevDots"
            className="mx-1 py-1 px-3 border border-gray-300 rounded-lg bg-transparent cursor-default"
            disabled
          >
            ...
          </button>
        );
      }
      if (currentPage < info.pages - Math.floor(pagesToShow / 2)) {
        pageNumbers.push(
          <button
            key="nextDots"
            className="mx-1 py-1 px-3 border border-gray-300 rounded-lg bg-transparent cursor-default"
            disabled
          >
            ...
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() =>
          handleCurrentPageChange((old: number) => Math.max(old - 1, 1))
        }
        disabled={currentPage === 1}
        className={classNames(
          "mx-1 py-1 px-3 border border-gray-300 rounded-lg hover:border-primaryOrange hover:text-[#000] transition all delay-100",
          {
            "text-defaultArrow hover:border-gray-300 hover:text-defaultArrow":
              currentPage === 1,
          }
        )}
      >
        Previous
      </button>
      {pagesToShow > 0 ? renderPageNumbers() : null}
      <button
        onClick={() =>
          handleCurrentPageChange((old: number) =>
            Math.min(old + 1, info?.pages || 1)
          )
        }
        disabled={currentPage === info?.pages}
        className={classNames(
          "mx-1 py-1 px-3 border border-gray-300 rounded-lg hover:border-primaryOrange hover:text-[#000] transition all delay-100",
          {
            "text-defaultArrow": currentPage === info?.pages,
          }
        )}
      >
        Next
      </button>
    </div>
  );
};
