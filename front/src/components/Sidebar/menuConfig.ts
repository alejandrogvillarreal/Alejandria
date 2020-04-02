import { Dashboard, Settings } from "@material-ui/icons";

let menuConfig = (lang: any) => [
  {
    label: lang.menuDashboard,
    path: "/dashboard",
    icon: Dashboard,
    // permissionsRequired: []
  },
  {
    label: lang.menuAdministration,
    icon: Settings,
    subMenus: [
      {
        label: lang.menuBooks,
        path: "/dashboard/administration/books",
        isRequiredBeAdmin: true
      },
      {
        label: lang.menuAuthors,
        path: "/dashboard/administration/authors",
        isRequiredBeAdmin: true
      },
      {
        label: lang.menuGenres,
        path: "/dashboard/administration/genres",
        isRequiredBeAdmin: true
      },
      {
        label: lang.menuLoans,
        path: "/dashboard/administration/loans",
        isRequiredBeAdmin: true
      },
      {
        label: lang.menuUsers,
        path: "/dashboard/administration/users",
        isRequiredBeAdmin: true
      }
    ],
    isRequiredBeAdmin: true
  }
];

export default menuConfig;
