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
        href: 'https://www.kaspersky.ru/standard?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kstand____b0c5668d44937986',
      },
      {
        title: 'Kaspersky Plus',
        href: 'https://www.kaspersky.ru/plus?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kplus____ab6a6486210217bb',
      },
      {
        title: 'Kaspersky Premium',
        href: 'https://www.kaspersky.ru/premium?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kprem____005f593a5df5b0c0',
      },
      {
        title: 'Kaspersky Safe Kids',
        href: 'https://www.kaspersky.ru/safe-kids?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___ksk____9cb1783b4dfb46ef',
      },
      {
        title: 'Kaspersky Who Calls',
        href: 'https://www.kaspersky.ru/caller-id?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kwc____f82077514ac662f4',
      },
      {
        title: 'Kaspersky Password Manager',
        href: 'https://www.kaspersky.ru/password-manager?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kpm____90b437e32ccd6376',
      },
      {
        title: 'Все решения',
        href: 'https://www.kaspersky.ru/home-security?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kbasic____4b9e903414e4d7c1',
      },
    ],
  },
  {
    title: 'Решения по типу устройств',
    rows: [
      {
        title: 'Антивирус для Android',
        href: 'https://www.kaspersky.ru/android-antivirus?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kav____72f13e9f23adfd4a',
      },
      {
        title: 'Антивирус для Mac OS',
        href: 'https://www.kaspersky.ru/mac-antivirus?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kav____dee552c007e58e78',
      },
      {
        title: 'Антивирус для мобильных устройств',
        href: 'https://www.kaspersky.ru/mobile-security?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kav____e3d9ed5e8875eef4',
      },
      {
        title: 'Антивирус для Windows',
        href: 'https://www.kaspersky.ru/windows-antivirus?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kav____010c8891b308b70c',
      },
      {
        title: 'Все решения',
        href: 'https://www.kaspersky.ru/home-security?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kbasic____4b9e903414e4d7c1',
      },
    ],
  },
  {
    title: 'Решения для малого и среднего бизнеса',
    rows: [
      {
        title: 'Kaspersky Small Office Security',
        href: 'https://www.kaspersky.ru/small-business-security/small-office-security?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___sbs____4f731d09390fce9f',
      },
      {
        title: 'Kaspersky Endpoint Security Cloud',
        href: 'https://www.kaspersky.ru/small-to-medium-business-security/cloud?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kescloud____5c152759809b8873',
      },
      {
        title: 'Все решения',
        href: 'https://www.kaspersky.ru/small-to-medium-business-security?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___sbs____52344d0cdcbe4f35',
      },
    ],
  },
  {
    title: 'Корпоративные решения',
    rows: [
      {
        title: 'Сервисы кибербезопасности',
        href: 'https://www.kaspersky.ru/enterprise-security/cybersecurity-services?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kprofs____f3f42fa817c9f1b7',
      },
      {
        title: 'Kaspersky Anti Targeted Attack',
        href: 'https://www.kaspersky.ru/enterprise-security/anti-targeted-attack-platform?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kata____d8f2143c3706be2a',
      },
      {
        title: 'Защита конечных устройств',
        href: 'https://www.kaspersky.ru/enterprise-security/endpoint?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kesbs____51d20da58aa2f4dd',
      },
      {
        title: 'Security для виртуальных и облачных сред',
        href: 'https://www.kaspersky.ru/enterprise-security/cloud-security?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team___kescloud____945a257f3b9d6b24',
      },
      {
        title: 'Все решения',
        href: 'https://www.kaspersky.ru/enterprise-security?icid=kl-ru_kas-memedog-sp_acq_ona_oth__onl_b2b_kasp-dogs-sp_footer_sm-team_______50379dc31a698667',
      },
    ],
  },
];
