import React, { useContext } from "react";
import { languageContext } from "../../config/language";

import CommonTitle from "../Common/Title";

const ComingSoon = (props: any) => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <div id="component-coming-soon">
      <CommonTitle component="h1" variant="h4" text={lang.oopsPageNotFound} />
    </div>
  );
};

export default ComingSoon;
