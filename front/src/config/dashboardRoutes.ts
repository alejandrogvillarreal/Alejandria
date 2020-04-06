import Books from "../components/Books";
import SearchPage from "../components/SearchPage";

export default [
  {
    path: "/dashboard/search",
    component: SearchPage,
  },
  {
    path: "/dashboard/administration/books",
    component: Books,
    isRequiredBeAdmin: true
  }
  // {
  // 	path: "/dashboard/administration/authors",
  // 	component: Authors,
  // 	isRequiredBeAdmin: true,
  // },
  // {
  // 	path: "/dashboard/administration/genres",
  // 	component: Genres,
  // 	isRequiredBeAdmin: true,
  // },
  // {
  // 	path: "/dashboard/administration/loans",
  // 	component: Loans,
  // 	isRequiredBeAdmin: true,
  // },
  // {
  // 	path: "/dashboard/administration/users",
  // 	component: Users,
  // 	isRequiredBeAdmin: true,
  // },
  // {
  // 	path: "/dashboard/profile",
  // 	component: Profile,
  // },
];
