import styled from "styled-components";

export const SelectOptionWrapper = styled.div`
  font-family: "Poppins", serif;
`;

export const StyledInputArea = styled.div`
  postition: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  border-radius: 5px;
  border: 1px solid var(--color-border-grey);
  width: 200px;
  height: 40px;

  .selection {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    width: 80%;
    color: black;
    padding: 0 5px 0 5px;
  }

  .control {
    padding: 0 2px 0 2px;
    display: flex;
    align-items: center;
  }
`;

export const StyledDropdown = styled.div`
  position: relative;
  top: 10px;
  min-width: 200px;
  max-width: 400px;
  min-height: 80px;
  max-height: 200px;
  overflow-y: scroll;
  box-shadow: 0px 0px 4px rgba(24, 25, 27, 0.3);
  border: 1px solid var(--color-border-grey);
  border-radius: 5px;

  .menuList {
    list-style: none;
    margin: 5px;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    cursor: pointer;
  }

  li {
    margin: 4px 0 4px 0;
  }

  li span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 10px 0 10px;
  }

  li:hover {
    background-color: var(--color-item-hover-background);
  }

  .boxShadow {
    box-shadow: 0px 0px 4px rgba(24, 25, 27, 0.3),
      0px 1px 6px rgba(24, 25, 27, 0.15);
  }
`;
