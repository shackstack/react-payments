import { memo } from "react";
import styled from "styled-components";
import { InputContainer, Input, Label } from "../common";
import { CardExpirationDate } from "../../types";
import { isNumeric, isValidMonth } from "../../validator/Validator";

type CardExpirationDateInputProps = {
  expirationDate: CardExpirationDate;
  expirationError: boolean;
  setExpirationDate: (value: CardExpirationDate) => void;
  setError: (value: boolean) => void;
};

const CardExpirationDateInput = ({
  expirationDate,
  expirationError,
  setExpirationDate,
  setError,
}: CardExpirationDateInputProps) => {
  const { month, year } = expirationDate;

  const onChangeExpirationDatehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (!isNumeric(value)) return;

    setExpirationDate({ ...expirationDate, [name]: value });

    if (name === "month") setError(isValidMonth(value) ? false : true);
  };

  return (
    <Label>
      만료일
      <InputContainer width="137px" border={expirationError ? "3px solid #f09c9c" : "none"}>
        <Input
          value={month}
          name="month"
          inputMode="numeric"
          textAlign="center"
          width="40px"
          placeholder="MM"
          type="text"
          autoComplete="cc-exp-month"
          minLength={2}
          maxLength={2}
          required
          onChange={onChangeExpirationDatehandler}
        />
        <Slash>/</Slash>
        <Input
          value={year}
          name="year"
          inputMode="numeric"
          textAlign="center"
          width="40px"
          placeholder="YY"
          type="text"
          autoComplete="cc-exp-year"
          minLength={2}
          maxLength={2}
          required
          onChange={onChangeExpirationDatehandler}
        />
      </InputContainer>
      {expirationError && <ErrorMessage>날짜 입력 형식이 잘못되었습니다.</ErrorMessage>}
    </Label>
  );
};

export const ErrorMessage = styled.div`
  border-radius: 4px;

  padding: 10px;
  margin-top: 4px;

  background-color: #f09c9c;

  font-size: 10px;
  color: rgb(33, 33, 33);
`;

const Slash = styled.span`
  color: #737373;
`;

export default memo(CardExpirationDateInput);
