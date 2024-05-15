import { CharacterItem } from "../charItem";
import { ICharacterType } from "../../utils/types";

type Props = {
  list: ICharacterType[];
};

export const CharacterList: React.FC<Props> = ({ list }) => {
  return (
    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mx-auto mt-[20px]">
      {list.map((item, index) => (
        <CharacterItem item={item} key={item.id} index={index} />
      ))}
    </div>
  );
};
