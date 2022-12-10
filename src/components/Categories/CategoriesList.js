import React from "react";
import styled from "styled-components";

import CategoryItem from "./CategoryItem";

const CategoriesList = ({ categories }) => {
  return (
    <CategoriesWrapper>
      {categories.map((category) => {
        return <CategoryItem {...category} />;
      })}
    </CategoriesWrapper>
  );
};

export default CategoriesList;

const CategoriesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
`;
