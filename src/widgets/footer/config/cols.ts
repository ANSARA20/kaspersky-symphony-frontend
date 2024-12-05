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
        href: 'https://www.kaspersky.ru/standard',
      },
      {
        title: 'Kaspersky Plus',
        href: 'https://www.kaspersky.ru/plus',
      },
      {
        title: 'Kaspersky Premium',
        href: 'https://www.kaspersky.ru/premium',
      },
      {
        title: 'Kaspersky Safe Kids',
        href: 'https://www.kaspersky.ru/safe-kids',
      },
      {
        title: 'Kaspersky Who Calls',
        href: 'https://www.kaspersky.ru/caller-id',
      },
      {
        title: 'Kaspersky Password Manager',
        href: 'https://www.kaspersky.ru/password-manager',
      },
      {
        title: 'Все решения',
        href: 'https://www.kaspersky.ru/home-security',
      },
    ],
  },
  {
    title: 'Решения по типу устройств',
    rows: [
      {
        title: 'Антивирус для Android',
        href: 'https://www.kaspersky.ru/android-antivirus',
      },
      {
        title: 'Антивирус для Mac OS',
        href: 'https://www.kaspersky.ru/mac-antivirus',
      },
      {
        title: 'Антивирус для мобильных устройств',
        href: 'https://www.kaspersky.ru/mobile-security',
      },
      {
        title: 'Антивирус для Windows',
        href: 'https://www.kaspersky.ru/windows-antivirus',
      },
      {
        title: 'Все решения',
        href: 'https://www.kaspersky.ru/home-security',
      },
    ],
  },
  {
    title: 'Решения для малого и среднего бизнеса',
    rows: [
      {
        title: 'Kaspersky Small Office Security',
        href: 'https://www.kaspersky.ru/small-business-security/small-office-security',
      },
      {
        title: 'Kaspersky Endpoint Security Cloud',
        href: 'https://www.kaspersky.ru/small-to-medium-business-security/cloud',
      },
      {
        title: 'Все решения',
        href: 'https://www.kaspersky.ru/small-to-medium-business-security',
      },
    ],
  },
  {
    title: 'Корпоративные решения',
    rows: [
      {
        title: 'Сервисы кибербезопасности',
        href: 'https://www.kaspersky.ru/enterprise-security/cybersecurity-services',
      },
      {
        title: 'Kaspersky Anti Targeted Attack',
        href: 'https://www.kaspersky.ru/enterprise-security/anti-targeted-attack-platform',
      },
      {
        title: 'Защита конечных устройств',
        href: 'https://www.kaspersky.ru/enterprise-security/endpoint',
      },
      {
        title: 'Security для виртуальных и облачных сред',
        href: 'https://www.kaspersky.ru/enterprise-security/cloud-security',
      },
      {
        title: 'Все решения',
        href: 'https://www.kaspersky.ru/enterprise-security',
      },
    ],
  },
];
