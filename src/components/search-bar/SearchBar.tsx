import { ChangeEventHandler } from "react";

type Props = {
  query: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

export const SearchBar: React.FC<Props> = ({ query, handleChange }) => (
  <div className="flex justify-between items-center w-fit	h-custom">
    <input
      className="
      block 
      outline-none 
      border-2 
      border-secondaryOrange
      w-[180px] 
      h-1/2 
      rounded-[15px] 
      text-[12px] 
      p-[12px] 
      bg-white 
      focus:border-primaryOrange 
      focus:placeholder:text-black 
      md:w-[400px] 
      md:text-[16px] 
      md:p-[20px]
    "
      type="text"
      placeholder="Search a character"
      value={query}
      onChange={handleChange}
    />
  </div>
);
