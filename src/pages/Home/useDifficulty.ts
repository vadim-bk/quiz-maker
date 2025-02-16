import { useCallback, useState } from "react";
import { DropdownOption } from "../../types/dropdownOption";

const difficulties: DropdownOption[] = [
  { id: "Easy", name: "Easy" },
  { id: "Medium", name: "Medium" },
  { id: "Hard", name: "Hard" },
];

export const useDifficulty = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    DropdownOption["id"] | null
  >(null);

  const selectDifficulty = useCallback((value: string | null) => {
    setSelectedDifficulty(value);
  }, []);

  return {
    difficulties,
    selectedDifficulty,
    selectDifficulty,
  };
};
