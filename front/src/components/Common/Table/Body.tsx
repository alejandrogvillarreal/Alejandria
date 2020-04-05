import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import MoreMenus from "./MoreMenus"

interface Props {
  tableConfig: any;
  rows: any;
  page: number;
  rowsPerPage: number;
  loading?: boolean;
}

export default function Body(props: Props) {
  const getValue = (obj: any, arrayValues: any): any => {
    const currentValue = arrayValues.shift();
    if (!arrayValues.length) return obj && obj[currentValue];

    return getValue(obj[currentValue], arrayValues);
  };

  return (
    <TableBody>
      {props.rows
        .slice(
          props.page * props.rowsPerPage,
          props.page * props.rowsPerPage + props.rowsPerPage
        )
        .map((row: any, rowIndex: number) => {
          return (
            <TableRow hover key={rowIndex}>
              {props.tableConfig.map((column: any, columnIndex: number) => {
                if (column.custom) {
                  return (
                    <TableCell key={columnIndex} align="center">
                      {column.custom(
                        getValue(row, column.rowValue.split(".")),
                        row
                      )}
                    </TableCell>
                  );
                } else if(column.isActions) {
                  return (
                    <TableCell key={columnIndex} align="center">
                      {
                            column.actions && <MoreMenus options={column.actions} row={row}/>
                          }
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell key={columnIndex} align="center">
                      {getValue(row, column.rowValue.split("."))}
                    </TableCell>
                  );
                }
              })}
            </TableRow>
          );
        })}
    </TableBody>
  );
}
