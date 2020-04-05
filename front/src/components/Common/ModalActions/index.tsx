import React, { useContext } from "react";
import { languageContext } from "../../../config/language";

//component core
import ModalButtons from "./ModalButtons";
import { ButtonsContainer } from "./ModalActions.styles";

interface Props {
  handleClose: (bool?: boolean) => void;
  handleSave: () => void;
  disabled: boolean;
  saveButtonText?: string;
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <ButtonsContainer>
      <ModalButtons
        text={lang.cancel.toUpperCase()}
        onClick={props.handleClose}
        buttonId={"button-cancel"}
        grayButton={true}
        disabled={false}
      />
      <ModalButtons
        text={
          props.saveButtonText
            ? props.saveButtonText.toUpperCase()
            : lang.save.toUpperCase()
        }
        onClick={props.handleSave}
        buttonId={"button-save"}
        disabled={props.disabled}
      />
    </ButtonsContainer>
  );
};
