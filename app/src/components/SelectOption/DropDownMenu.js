import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StyledDropdown } from "./styles";

// dropdown menu component
const DropDownMenu = ({ listItems, onSelectHandler, id = null }) => {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setSelectedId(id);
  }, [id]);

  const handleSelection = (item) => {
    setSelectedId(item.id);
    onSelectHandler(item);
  };

  return (
    <StyledDropdown>
      <ul className="menuList">
        {listItems.map((item, idx) => (
          <li
            onClick={() => handleSelection(item)}
            style={{
              color:
                item.id === selectedId ? "var(--color-primary-blue)" : "black",
            }}
            key={idx}
          >
            <span
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {item.title ?? ""}
            </span>
          </li>
        ))}
      </ul>
    </StyledDropdown>
  );
};

DropDownMenu.propTypes = {
  listItems: PropTypes.array.isRequired,
  onSelectHandler: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
};

export default DropDownMenu;
