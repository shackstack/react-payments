import GlobalStyle from "../../styles/GlobalStyle";
import CardNumberInput from "./CardNumberInput";

export default {
  title: "CardNumberInput",
  component: CardNumberInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardNumberInput
      cardNumber={{ firstGroup: "", secondGroup: "", thirdGroup: "", fourthGroup: "" }}
      error={{ cardNumberError: false, expirationError: false }}
      setCardNumber={() => {}}
      setError={() => {}}
    ></CardNumberInput>
  </>
);
