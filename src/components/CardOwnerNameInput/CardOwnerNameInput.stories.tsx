import GlobalStyle from "../../styles/GlobalStyle";
import CardOwnerNameInput from "./CardOwnerNameInput";

export default {
  title: "CardOwnerNameInput",
  component: CardOwnerNameInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardOwnerNameInput ownerName="" nameLength={0} setOwnerName={() => {}}></CardOwnerNameInput>
  </>
);
