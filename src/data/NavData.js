const NavData = [
  {
    label: "Products",
    childrens: [
      {
        label: "New Products",
        href: "/new-products",
      },
      {
        label: "Old Products",
        href: "/old-products",
      },
    ],
  },
  {
    label: "Services",
    childrens: [
      {
        label: "We Offer",
        href: "/we-offer",
      },
      {
        label: "Coming Soon",
        href: "/coming-soon",
      },
    ],
  },
  {
    label: "Contact",
    childrens: [
      {
        label: "Email",
        href: "/email",
      },
      {
        label: "Phone",
        childrens: [
          {
            label: "Landline",
            href: "/landline",
          },
          {
            label: "Mobile",
            childrens: [
              {
                label: "National",
                href: "/national",
              },
              {
                label: "International",
                href: "/international",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
];

export default NavData;
