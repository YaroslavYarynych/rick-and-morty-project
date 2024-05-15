/// <reference types="vite-plugin-svgr/client" />

import { motion } from "framer-motion";
import { ICharacterType } from "../../utils/types";
import { Modal } from "../modal/Modal";
import { useState } from "react";

type Props = {
  item: ICharacterType;
  index: number;
};

export const CharacterItem: React.FC<Props> = ({ item, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <motion.div
        className="cursor-pointer flex flex-col justify-between place-self-center w-[250px] h-[350px] rounded-lg p-[20px] bg-white"
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? 0 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.7,
          },
        }}
        viewport={{ once: true }}
        onClick={toggleModal}
      >
        <img
          src={item.image}
          alt={`${item.name} ${item.species} ${item.status}`}
          className="w-full max-h-[150px] rounded-lg mb-[10px] object-cover"
        />
        <h2 className="min-h-[40px] text-center text-base leading-20 mb-[15px]">{`${item.name}`}</h2>
        <div className="flex flex-col gap-[5px] mb-[15px]">
          <div className="flex justify-between w-full">
            <p className="text-base font-normal">Gender:</p>
            <p className="text-base font-normal">{item.gender}</p>
          </div>
          <div className="flex justify-between w-full">
            <p className="text-base font-normal">Species:</p>
            <p className="text-base font-normal">
              {item.species.split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base font-normal">Status:</p>
          <p className="text-base font-bold">{`${item.status}`}</p>
        </div>
      </motion.div>
      {isModalOpen && <Modal character={item} onClose={toggleModal} />}
    </>
  );
};
