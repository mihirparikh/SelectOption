import styled from "styled-components";

export const StyledInputArea = styled.div`
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
    padding: 0 5px 0 5px;
    display: block;
    width: 80%;
    overflow: none;
    text-overfow: ellipsis;
    color: black;
  }

  .control {
    padding: 0 2px 0 2px;
    display: block;
    width: 20%;
  }
`;

export const StyledDropdown = styled.div`
  .primary {
    color: var(--color-primary-blue);
  }

  .boxShadow {
    box-shadow: 0px 0px 4px rgba(24, 25, 27, 0.3),
      0px 1px 6px rgba(24, 25, 27, 0.15);
  }
`;
