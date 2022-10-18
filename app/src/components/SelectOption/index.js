// Entrypoint to Selectoption

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyledDropdown, StyledInputArea } from "./styles";
import { Arrow, Close } from "../assets/icons/Icons";

const SelectOption = (data, onChangeHandler, onSelectHandler) => {
  const [menuData, setMenuData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    setMenuData(data);
  }, [data]);

  const handleSelectionChange = (e, value) => {
    setSelectedItem(value);
    onChangeHandler(value);
  };

  return (
    <>
      <StyledInputArea>
        <span className="selection">This is an input</span>
        <span className="control">
          <Arrow />
        </span>
      </StyledInputArea>
      <StyledDropdown>
        <div className="primary boxShadow">This is the dropdown</div>
      </StyledDropdown>
    </>
  );
};

SelectOption.propTypes = {
  data: PropTypes.array.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default SelectOption;
