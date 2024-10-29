interface IFooterColRow {
  title: string;
  href: string;
}

interface IFooterCol {
  title: string;
  rows: IFooterColRow[];
}

export const FooterColsConst: IFooterCol[] = [
  {
    title: 'Решения для дома',
    rows: [
      {
        title: 'Kaspersky Standard',
        href: '',
      },
      {
        title: 'Kaspersky Plus',
        href: '',
      },
      {
        title: 'Kaspersky Premium',
        href: '',
      },
      {
        title: 'Kaspersky Safe Kids',
        href: '',
      },
      {
        title: 'Kaspersky Who Calls',
        href: '',
      },
      {
        title: 'Kaspersky Password Manager',
        href: '',
      },
      {
        title: 'Все решения',
        href: '',
      },
    ],
  },
  {
    title: 'Решения для дома',
    rows: [
      {
        title: 'Антивирус для Android',
        href: '',
      },
      {
        title: 'Антивирус для Mac OS',
        href: '',
      },
      {
        title: 'Антивирус для мобильных устройств',
        href: '',
      },
      {
        title: 'Антивирус для Windows',
        href: '',
      },
      {
        title: 'Все решения',
        href: '',
      },
    ],
  },
  {
    title: 'Решения для малого и среднего бизнеса',
    rows: [
      {
        title: 'Kaspersky Small Office Security',
        href: '',
      },
      {
        title: 'Kaspersky Endpoint Security Cloud',
        href: '',
      },
      {
        title: 'Все решения',
        href: '',
      },
    ],
  },
  {
    title: 'Корпоративные решения',
    rows: [
      {
        title: 'Сервисы кибербезопасности',
        href: '',
      },
      {
        title: 'Kaspersky Anti Targeted Attack',
        href: '',
      },
      {
        title: 'Защита конечных устройств',
        href: '',
      },
      {
        title: 'Security для виртуальных и облачных сред',
        href: '',
      },
      {
        title: 'Все решения',
        href: '',
      },
    ],
  },
];
