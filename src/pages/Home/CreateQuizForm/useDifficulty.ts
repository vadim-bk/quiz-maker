import { useCallback, useState } from "react";
import { DropdownOption } from "../../../types/dropdownOption";

const difficulties: DropdownOption[] = [
  { id: "easy", name: "Easy" },
  { id: "medium", name: "Medium" },
  { id: "hard", name: "Hard" },
];

export const useDifficulty = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  const selectDifficulty = useCallback((value: string | null) => {
    setSelectedDifficulty(value);
  }, []);

  return {
    difficulties,
    selectedDifficulty,
    selectDifficulty,
  };
};
