export type NavItem = {
    label: string;
    href: string;
  }
  
  export const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      href:"/"
    },
    {
      label: "Students",
      href:"/Students"
    },
    {
      label: "Pending",
      href: "/Pending",
    },
    {
      label: "Active",
      href: "/Active",
    },
    {
      label: "Done",
      href: "/Done",
    },
    {
      label: "Wrong Username",
      href: "/Wrong_Username",
    },
  ];