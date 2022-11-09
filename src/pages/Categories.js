import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const Categories = () => {
  const username = useSelector((el) => el.user.username);

  return (
    <>
      Categories <p>{username}</p>
    </>
  );
};

export default Categories;
