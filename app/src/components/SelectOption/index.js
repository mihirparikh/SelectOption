// Entrypoint to Selectoption

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyledDropdown, StyledInputArea } from "./styles";
import Icon from "../Icon";

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
        <div className="selection">{selectedItem}</div>
        <div>
          <Icon name={"close"} fill={"black"} size={24} />
        </div>
      </StyledInputArea>
      <Icon name={"close"} fill={"black"} size={24} />
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
