import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { getCategory } from "../../api/category";

const Category = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCategory();
      setCategories(data.data);
    })();
  }, []);

  useEffect(() => {
    if (categories.length > 0 && !category) {
      setCategory(categories[0]["public_id"]);
    }
  }, [categories, category]);

  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };

  return (
    <Tabs
      aria-label="Category tabs"
      data-testid="category-tabs"
      value={category}
      onChange={handleChange}
    >
      {categories.map((category) => (
        <Tab
          key={category.public_id}
          label={category.name}
          onChange={handleChange}
          value={category.public_id}
        />
      ))}
    </Tabs>
  );
};

export default Category;
