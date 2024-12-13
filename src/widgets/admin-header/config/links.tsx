interface IAdminLinks {
  title: string;
  to: string;
}

export const AdminLinks: IAdminLinks[] = [
  {
    title: 'Пользователи',
    to: '/admin/users',
  },
  {
    title: 'Выйгрыши',
    to: '/admin/spins',
  },
  {
    title: 'Призы',
    to: '/admin/prizes',
  },
];
