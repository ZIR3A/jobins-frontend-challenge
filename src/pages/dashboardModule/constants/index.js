import { BoxIcon, CirclePlusIcon, ShoppingCartIcon, SmartHomeIcon, StarIcon } from "../../../utils";

export const _filterStatusOptions = [
  {
    label: "All",
    active: true,
    slug: "all",
  },
  {
    label: "Completed",
    active: false,
    slug: "completed",
  },
  {
    label: "Canceled",
    active: false,
    slug: "canceled",
  },
];
export const _filterDateRangeOptions = [
  {
    label: "Daily",
    active: true,
    slug: "days",
  },
  {
    label: "Weekly",
    active: false,
    slug: "weeks",
  },
  {
    label: "Monthly",
    active: false,
    slug: "months",
  },
];
export const _tableHeaders = [
  {
    label: "ID",
  },
  {
    label: "Customer",
  },
  {
    label: "Date",
  },
  {
    label: "Total",
  },
  {
    label: "Method",
  },
  {
    label: "Status",
  },
  {
    label: "Actions",
  },
];
export const _mockOrdersData = {
  data: [
    {
      id: "5089",
      customer: "Saran Baral",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5089",
      customer: "Saran Baral",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5090",
      customer: "Saran Baral",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5091",
      customer: "Saran Baral",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5092",
      customer: "Saran Baral",
      date: "6 April, 2023",
      total: "$2,544",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5093",
      customer: "Saran Baral",
      date: "6 April, 2023",
      total: "$1,564",
      method: "CC",
      status: "Pending",
    },
  ],
};
export const _sideNavMenuLists = [
  {
    name: "Main Menu",
    isTitle: true,
  },
  {
    name: "Dashboard",
    active: true,
    icon: SmartHomeIcon,
  },
  {
    name: "Order Management",
    icon: ShoppingCartIcon,
  },
  {
    name: "Brand",
    active: false,
    icon: StarIcon,
  },
  {
    name: "Products",
    isTitle: true,
  },
  {
    name: "Add Products",
    icon: CirclePlusIcon,
  },
  {
    name: "Product List",
    icon: BoxIcon,
  },
];
