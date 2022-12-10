import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const CategoryItem = ({ name, id }) => {
  const navigate = useNavigate();

  const handleCategoryOnClick = (event) => {
    navigate(`/categories/${id}`);
  };

  return <ListItem onClick={handleCategoryOnClick}>{name}</ListItem>;
};

export default CategoryItem;

const ListItem = styled.li`
  border: none;
  border-radius: 15px;
  padding: 1rem;
  background-color: #888888;
  width: 120px;
  height: 120px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #be5a5a;
    transition: 0.25s;
  }
`;
