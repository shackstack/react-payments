import { Link } from "react-router-dom";
import styled from "styled-components";
import { PAGE } from "../../constant";

const AddCardButton = () => {
  return (
    <Link to={PAGE.ADD_CARD}>
      <Button>✚</Button>
    </Link>
  );
};

const Button = styled.button`
  height: 123px;
  width: 208px;

  border: none;

  background-color: #e5e5e5;

  border-radius: 5px;

  box-shadow: 5px 5px 5px #adadad;

  transition: all 0.3s ease;

  &:hover {
    transform: translate(2px, 2px);
  }

  cursor: pointer;
`;
export default AddCardButton;
