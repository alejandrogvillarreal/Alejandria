import React, { useContext, useState, useCallback } from "react";
import { languageContext } from "../../config/language";

import TableTitles from "../Common/TableTitles";
import Table from "../Common/Table";
import ExpansionFilters from "../Common/ExpansionFilters";
import RightDrawer from "../Common/RightDrawer";
import NewBook from "../NewBook";

// icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";

const Books = (props: any) => {
  const { languageContext: lang } = useContext(languageContext);

  const [bookSelected, setBookSelected] = useState(null);
  const [openNewBook, setOpenNewBook] = useState(false);

  const buttonAction = {
    onClick: () => handleOpenNewBook('book'),
    buttonId: "button-new-book",
  };

  const tableConfig = [
    {
      headTitle: "Titulo",
      rowValue: "title",
    },
    {
      headTitle: "Cantidad",
      rowValue: "quantity",
    },
    {
      headTitle: "Stock disponible",
      rowValue: "available_stock",
    },
    {
      headTitle: "Esta eliminado",
      rowValue: "is_deleted",
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
      quantity: 5,
      available_stock: 3,
      is_deleted: false,
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
      quantity: 2,
      available_stock: 1,
      is_deleted: false,
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
      quantity: 5,
      available_stock: 3,
      is_deleted: false,
      author: {
        name: "Autor 2",
      },
      genre: {
        name: "Genero 2",
      },
    },
    {
      id: 3,
      title: "Libro 3",
      quantity: 2,
      available_stock: 2,
      is_deleted: true,
      author: {
        name: "Autor 3",
      },
      genre: {
        name: "Genero 3",
      },
    },
    {
      id: 4,
      title: "Libro 4",
      quantity: 4,
      available_stock: 2,
      is_deleted: false,
      author: {
        name: "Autor 4",
      },
      genre: {
        name: "Genero 4",
      },
    },
  ];

  const handleOpenNewBook = useCallback(
    (book: any) => {
      book && setBookSelected(book);
      setOpenNewBook(true);
    },
    [setOpenNewBook, setBookSelected]
  );

  const handleCloseNewBook = useCallback(() => {
    setBookSelected(null);
    setOpenNewBook(false);
  }, [setOpenNewBook, setBookSelected]);

  return (
    <div id="books">
      <TableTitles title={"Listado de Libros"} buttonAction={buttonAction} />
      <ExpansionFilters />
      <Table tableConfig={tableConfig} data={data} />

      {openNewBook && (
        <RightDrawer open={openNewBook} title={"Nuevo libro"}>
          <NewBook 
            handleClose={handleCloseNewBook}
          />
        </RightDrawer>
      )}
    </div>
  );
};

export default Books;
