import React from 'react';

import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


interface Props {
    tableConfig: any
}

export default (props: Props) => {
  return (
    <TableHead>
      <TableRow>
        {/* {tableConfig.map((column, index) => 
          <StyledTableCell key={index} align="center"> {column.headTitle && column.headTitle.toUpperCase()} </StyledTableCell>
        )} */}
        {props.tableConfig.map((column: any, index: number) => (
                <TableCell
                  key={index}
                //   align={column.align}
                  align="center"
                //   style={{ minWidth: column.minWidth }}
                >
                  {column.headTitle && column.headTitle.toUpperCase()}
                </TableCell>
              ))}
      </TableRow>
    </TableHead>
  );
}