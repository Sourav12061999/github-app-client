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
      label: "Active",
      href: "/Active",
    },
    {
      label: "Done",
      href: "/Done",
    },
  ];