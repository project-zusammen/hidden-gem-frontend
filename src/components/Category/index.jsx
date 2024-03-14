import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { getCategory } from "../../api/category";

const Category = () => {
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCategory();
      setCategories(data.data);
    })();
  }, []);

  useEffect(() => {
    if (categories.length > 0 && !categoryId) {
      setCategoryId(categories[0]["public_id"]);
    }
  }, [categories, categoryId]);

  const handleChange = (event, newValue) => {
    setCategoryId(newValue);
  };

  return (
    <Tabs
      aria-label="Category tabs"
      data-testid="category-tabs"
      value={categoryId}
      onChange={handleChange}
    >
      {categories.length > 0 &&
        categories.map((each) => (
          <Tab
            data-testid={`category-tab-${each.public_id}`}
            key={each.public_id}
            label={each.name}
            value={each.public_id}
            onChange={handleChange}
            aria-selected={each.public_id === categoryId}
          />
        ))}
    </Tabs>
  );
};

export default Category;
