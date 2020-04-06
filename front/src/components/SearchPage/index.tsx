import React, { useContext, useState, useCallback } from "react";
import { languageContext } from "../../config/language";

import TableTitles from "../Common/TableTitles";
import Table from "../Common/Table";
import ExpansionFilters from "../Common/ExpansionFilters";
import SearchInput from "../Common/SearchInput";
import { SearchBox } from "./SearchPage.styles";

// icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";

const Books = (props: any) => {
  const { languageContext: lang } = useContext(languageContext);

  const [bookSelected, setBookSelected] = useState(null);

  const tableConfig = [
    {
      headTitle: "Titulo",
      rowValue: "title",
    },
    {
      headTitle: "Stock disponible",
      rowValue: "available_stock",
    },
    {
      headTitle: "Autor / Autores",
      rowValue: "author.name",
    },
    {
      headTitle: "Genero / Generos",
      rowValue: "genre.name",
    },
    {
      headTitle: "acciones",
      isActions: true,
      actions: [
        {
          type: "edit",
          id: "button-books-edit-book",
          title: "editar",
          onClick: () => console.log("editar libro"),
          icon: <EditIcon />,
        },
        {
          type: "delete",
          id: "button-books-delete-book",
          title: "eliminar",
          // disabled: (book: Silo) => !props.bookDeleteAllowed(book),
          onClick: () => console.log("eliminar libro"),
          icon: <DeleteIcon />,
        },
      ],
    },
  ];

  const data = [
    {
      id: 1,
      title: "Libro 1",
      available_stock: 3,
      author: {
        name: "Autor 1",
      },
      genre: {
        name: "Genero 1",
      },
    },
    {
      id: 1,
      title: "Libro 1",
      available_stock: 1,
      author: {
        name: "Autor 1",
      },
      genre: {
        name: "Genero 1",
      },
    },
    {
      id: 2,
      title: "Libro 2",
      available_stock: 3,
      author: {
        name: "Autor 2",
      },
      genre: {
        name: "Genero 2",
      },
    },
  ];

  const handleOpenNewBook = useCallback(
    (book: any) => {
      book && setBookSelected(book);
      //   setOpenNewBook(true);
    },
    [setBookSelected]
  );

  return (
    <div id="search-page">
      <TableTitles title={"Buscador"} />
      <SearchBox>
        <SearchInput />
      </SearchBox>
      <ExpansionFilters />
      <Table tableConfig={tableConfig} data={data} />
    </div>
  );
};

export default Books;
