import { createContext, useState } from "react";
import { CARD_LOGO } from "../components/CardCompanyIcon/CardCompanyIcon";
import { CardCompany, CardExpirationDate, CardNumber, CardPassword } from "../types";

interface AddCardState {
  modalOpen: boolean;
  error: { cardNumberError: boolean; expirationError: boolean };
  cardCompany: CardCompany;
  cardNumber: CardNumber;
  expirationDate: CardExpirationDate;
  ownerName: string;
  securityCode: string;
  password: CardPassword;
  setModalOpen: (value: boolean) => void;
  setError: (value: { cardNumberError: boolean; expirationError: boolean }) => void;
  setCardCompany: (value: CardCompany) => void;
  setCardNumber: (value: CardNumber) => void;
  setExpirationDate: (value: CardExpirationDate) => void;
  setOwnerName: (value: string) => void;
  setSecurityCode: (value: string) => void;
  setPassword: (value: CardPassword) => void;
}

const initialValue = {
  modalOpen: false,
  error: {
    cardNumberError: false,
    expirationError: false,
  },
  cardCompany: undefined,
  cardNumber: {
    firstGroup: "",
    secondGroup: "",
    thirdGroup: "",
    fourthGroup: "",
  },
  expirationDate: {
    month: "",
    year: "",
  },
  ownerName: "",
  securityCode: "",
  password: { first: "", second: "" },
  setModalOpen: () => {},
  setError: () => {},
  setCardCompany: () => {},
  setCardNumber: () => {},
  setExpirationDate: () => {},
  setOwnerName: () => {},
  setSecurityCode: () => {},
  setPassword: () => {},
};

export const AddCardContext = createContext<AddCardState>(initialValue);

export const AddCardContextProvider = ({ children }: React.PropsWithChildren) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [error, setError] = useState<{ cardNumberError: boolean; expirationError: boolean }>({
    cardNumberError: false,
    expirationError: false,
  });
  const [cardCompany, setCardCompany] = useState<keyof typeof CARD_LOGO>();
  const [cardNumber, setCardNumber] = useState<CardNumber>({
    firstGroup: "",
    secondGroup: "",
    thirdGroup: "",
    fourthGroup: "",
  });
  const [expirationDate, setExpirationDate] = useState<CardExpirationDate>({
    month: "",
    year: "",
  });
  const [ownerName, setOwnerName] = useState<string>("");
  const [securityCode, setSecurityCode] = useState<string>("");
  const [password, setPassword] = useState<CardPassword>({
    first: "",
    second: "",
  });

  const value = {
    modalOpen,
    error,
    cardCompany,
    cardNumber,
    expirationDate,
    ownerName,
    securityCode,
    password,
    setModalOpen,
    setError,
    setCardCompany,
    setCardNumber,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
  };

  return <AddCardContext.Provider value={value}>{children}</AddCardContext.Provider>;
};
