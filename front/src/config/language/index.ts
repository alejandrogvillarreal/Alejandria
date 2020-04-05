import React from "react";

export const languages = {
  en: {
    menuDashboard: "Dashboard",
    menuAdministration: "Administration",
    menuBooks: "Books",
    menuAuthors: "Authors",
    menuGenres: "Genres",
    menuLoans: "Loans",
    menuUsers: "Users",
    menuHistory: "History",
    menuAccount: "Account",
    menuSearch: "Search",
    oopsPageNotFound: "Oops Page not found",
    dashboard: "Dashboard",
    administration: "Administration",
    books: "Books",
    authors: "Authors",
    genres: "Genres",
    loans: "Loans",
    users: "Users",
    history: "History",
    account: "Account",
    search: "Search",
    save: "Save",
    cancel: "Cancel",
  },
  es: {
    menuDashboard: "Dashboard",
    menuAdministration: "Administración",
    menuBooks: "Libros",
    menuAuthors: "Autores",
    menuGenres: "Generos",
    menuLoans: "Prestamos",
    menuUsers: "Usuarios",
    menuHistory: "Historial",
    menuAccount: "Cuenta",
    menuSearch: "Buscar",
    oopsPageNotFound: "Oops Página no encontrada",
    dashboard: "Dashboard",
    administration: "Administración",
    books: "Libros",
    authors: "Autores",
    genres: "Generos",
    loans: "Prestamos",
    users: "Usuarios",
    history: "Historial",
    account: "Cuenta",
    search: "Buscar",
    save: "Guardar",
    cancel: "Cancelar",
  }
};

export const languageContext = React.createContext(
  { languageContext: languages.es } // default value
);
