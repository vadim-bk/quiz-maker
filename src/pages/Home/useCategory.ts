import { useState, useCallback, useEffect } from "react";

type Category = {
  id: number;
  name: string;
};

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [selectedCategoryId, setSelectedCategoryId] = useState<
    Category["id"] | null
  >(null);

  const selectCategory = useCallback((value: string | null) => {
    setSelectedCategoryId(Number(value));
  }, []);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories));
  }, []);

  return {
    categories,
    selectedCategoryId,
    selectCategory,
  };
};
