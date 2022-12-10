import React from "react";

import styled from "styled-components";
import CategoriesList from "../components/Categories/CategoriesList";

import { CATEGORIES_LIST } from "../consts/categories";

const Categories = () => {
  return (
    <CategoriesBox>
      <CategoriesList categories={CATEGORIES_LIST} />
    </CategoriesBox>
  );
};

export default Categories;

const CategoriesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 2rem;
`;
