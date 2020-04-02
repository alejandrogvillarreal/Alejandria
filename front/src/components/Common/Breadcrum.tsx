import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { languageContext } from "../../config/language";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function BreadcrumbsComponent(props: any) {
  const { languageContext: lang } = useContext<any>(languageContext);

  const routes = props.location.pathname
    .split("/")
    .filter((path: string) => path.length > 0);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {routes.map((route: string, index: number) =>
        Boolean(routes.length === index + 1) ? (
          <Typography key={index} color="textPrimary">
            {lang[route]}
          </Typography>
        ) : (
          <Typography key={index} color="inherit">
            {lang[route]}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}

export default withRouter(BreadcrumbsComponent);
