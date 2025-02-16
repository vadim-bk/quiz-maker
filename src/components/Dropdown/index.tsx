import { css } from "@emotion/react";
import { ChangeEvent, useCallback, useMemo } from "react";
import { DropdownOption } from "../../types/dropdownOption";

const PLACEHOLDER_OPTION_ID = "placeholder";

const styles = {
  select: css`
    height: 30px;
    width: 200px;
  `,
};

type Props = {
  id: string;
  options: DropdownOption[];
  placeholder?: string;
  onChange: (value: string | null) => void;
};

export const Dropdown = ({ placeholder, options, onChange, id }: Props) => {
  const dropdownOptions = useMemo(() => {
    if (!placeholder) return options;

    return [{ id: PLACEHOLDER_OPTION_ID, name: placeholder }, ...options];
  }, [placeholder, options]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      if (event.target.value === PLACEHOLDER_OPTION_ID) {
        onChange(null);
        return;
      }

      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <select css={styles.select} id={id} onChange={handleChange}>
      {dropdownOptions.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
