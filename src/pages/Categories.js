import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import CategoriesList from "../components/Categories/CategoriesList";
import Button from "../components/UI/Button";

const CATEGORIES_LIST = [
  {
    id: 9,
    name: "General Knowledge",
  },
  {
    id: 10,
    name: "Books",
  },
  {
    id: 11,
    name: "Film",
  },
  {
    id: 15,
    name: "Video Games",
  },
  {
    id: 20,
    name: "Mythology",
  },
  {
    id: 21,
    name: "Sports",
  },
  {
    id: 22,
    name: "Geography",
  },
  {
    id: 23,
    name: "History",
  },
  {
    id: 27,
    name: "Animals",
  },
];

const Categories = () => {
  const username = useSelector((el) => el.user.username);

  return (
    <CategoriesBox>
      <CategoriesList categories={CATEGORIES_LIST} />
      <Button>Last tries</Button>
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
