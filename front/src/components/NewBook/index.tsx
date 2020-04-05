import React, { useContext } from "react";
import { languageContext } from "../../config/language";
import ModalActions from "../Common/ModalActions";

interface Props {
  handleClose: () => void;
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);

  const saveAndClose = () => {
    console.log("save and close");
    props.handleClose();
  };

  const handleClose = (param?: string) => {
    console.log("close");
    props.handleClose();
  };

  return (
    <div id="new-book-component">
      New Book Component
      <ModalActions
        handleClose={() => handleClose("preuba")}
        handleSave={saveAndClose}
        disabled={false}
      />
    </div>
  );
};
