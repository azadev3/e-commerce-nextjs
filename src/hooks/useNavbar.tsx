export type DrodpownType = {
  id: number;
  title: string;
  href: string;
};
export interface NavbarInterface {
  id: number;
  title: string;
  href?: string;
  dropdown?: DrodpownType[];
}
export const useNavbar = () => {
  const navbarEl: NavbarInterface[] = [
    {
      id: 1,
      title: 'Shop',
      dropdown: [
        { id: 2, title: 'Accessuar', href: '' },
        { id: 3, title: 'Mobile telephones', href: '' },
        { id: 4, title: 'Electronics', href: '' },
        { id: 5, title: 'Wearing', href: '' },
        { id: 6, title: 'Joke', href: '' },
        { id: 7, title: 'Tshirts & Shirts', href: '' },
      ],
    },
    {
      id: 2,
      title: 'On sale',
      href: '',
    },
    {
      id: 3,
      title: 'New arrivals',
      href: '',
    },
    {
      id: 4,
      title: 'Brands',
      href: '',
    },
  ];

  return { navbarEl };
};
