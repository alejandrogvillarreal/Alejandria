import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

interface Props {
  tableConfig: any;
}

export default (props: Props) => {
  return (
    <TableHead>
      <TableRow>
        {props.tableConfig.map((column: any, index: number) => (
          <TableCell key={index} align="center">
            {column.headTitle && column.headTitle.toUpperCase()}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
