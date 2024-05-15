import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-12 flex flex-col items-center gap-12">
      <div className="flex gap-2 justify-center items-center">
        {"Oh, page not found!".split(" ").map((word, i) => (
          <motion.span
            className="text-primaryOrange text-2xl md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: i / 15,
            }}
            key={i}
          >
            {word}
          </motion.span>
        ))}
      </div>
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={() => navigate("/")}
        className="px-10 py-4 text-white bg-primaryOrange rounded-lg cursor-pointer"
      >
        Go home
      </motion.button>
    </div>
  );
};
