import { ICharacterType } from "../../utils/types";

type Props = {
  character: ICharacterType;
  onClose: () => void;
};

export const Modal: React.FC<Props> = ({ character, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="bg-white p-8 rounded-lg z-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">{character.name}</h1>
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={onClose} // Call onClose function when button is clicked
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 12.707a1 1 0 0 1-1.414 0L10 10.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L8.586 9 7.293 7.707a1 1 0 0 1 1.414-1.414L10 7.586l1.293-1.293a1 1 0 0 1 1.414 1.414L11.414 9l1.293 1.293a1 1 0 0 1 0 1.414z"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2">
            <img
              src={character.image}
              alt={character.name}
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-1/2 pl-4">
            <p>
              <span className="font-semibold">Gender:</span> {character.gender}
            </p>
            <p>
              <span className="font-semibold">Species:</span>{" "}
              {character.species}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {character.status}
            </p>
            <p>
              <span className="font-semibold">Type:</span> {character.type}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {character.location.name}
            </p>
            <p>
              <span className="font-semibold">Origin:</span>{" "}
              {character.origin.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
