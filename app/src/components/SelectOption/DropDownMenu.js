import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// dropdown menu component
const DropDownMenu = (props) => {
  const { listItems, onSelectHandler } = props;
  const [show, setShow] = useState(false); // menu show/hide control

  const handleShowHideToggle = () => {
    setShow(!show);
  };

  return <></>;
};

DropDownMenu.propTypes = {
  listItems: PropTypes.array.isRequired,
  onSelectHandler: PropTypes.func.isRequired,
};

export default DropDownMenu;
