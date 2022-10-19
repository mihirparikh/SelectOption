// Entrypoint to Selectoption

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SelectOptionWrapper, StyledInputArea } from "./styles";
import { Arrow, Close } from "../assets/icons/Icons";
import DropDownMenu from "./DropDownMenu";

const SelectOption = ({ data, onChangeHandler }) => {
  const [menuData, setMenuData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    setMenuData(data);
    console.log(data);
  }, [data]);

  const handleSelectionChange = (value) => {
    setSelectedItem(value);
    onChangeHandler(value);
    setMenuVisible(false); // close the menu on select
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const clearSelection = () => {
    setSelectedItem(null);
    setMenuVisible(false);
    onChangeHandler(null);
  };

  return (
    <SelectOptionWrapper>
      <StyledInputArea>
        <span className="selection">{selectedItem?.title ?? ""}</span>
        {selectedItem !== null && (
          <span className="control" onClick={clearSelection}>
            <Close />
          </span>
        )}
        <span
          className="control"
          style={{ transform: menuVisible ? "rotate(180deg)" : "rotate(0deg)" }}
          onClick={toggleMenu}
        >
          <Arrow />
        </span>
      </StyledInputArea>
      {menuVisible && (
        <DropDownMenu
          listItems={menuData}
          onSelectHandler={handleSelectionChange}
          id={selectedItem?.id ?? null}
        />
      )}
    </SelectOptionWrapper>
  );
};

SelectOption.propTypes = {
  data: PropTypes.array.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default SelectOption;
