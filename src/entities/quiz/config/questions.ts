import { QuizQuestion } from '../model/types';

import { ESymphonyLevels } from '@/shared/model/types';

const SecurityQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      'Тебе прислали файл с названием «Очень важный документ.docx», но когда ты его открыл на рабочем компьютере, там оказалась картинка Доге. Твой следующий шаг?',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title: 'Сохраню на будущее — пригодится',
      },
      {
        variant: 2,
        title: 'А я и не знал, что там Доге — ведь я не открывал файл',
        description: 'Мемы с Доге забавны, но неожиданные файлы могут скрывать угрозы',
      },
      {
        variant: 3,
        title: 'Спрячу файл среди других документов, чтобы никто не знал, что я его открыл',
      },
      {
        variant: 4,
        title: 'Погуглю, что это значит. Может быть, я стал криптомиллионером!',
      },
    ],
  },
  {
    id: 2,
    question: 'Подруга прислала тебе ссылку на «крутой новый фильм» в мессенджере. Что сделаешь?',
    correctVariant: 3,
    variants: [
      {
        variant: 1,
        title: 'Открою ссылку и проверю на вирусы',
      },
      {
        variant: 2,
        title: 'Не буду открывать и заблокирую подругу. Ее точно взломали!',
      },
      {
        variant: 3,
        title: 'Позвоню подруге и спрошу, откуда она взяла эту ссылку',
        description:
          'Важно всегда проверять подозрительные ссылки перед открытием, даже если они от знакомых. Желательно через другие каналы связи, чтобы не пообщаться с мошенником',
      },
      {
        variant: 4,
        title: 'Открою ссылку в инкогнито-режиме браузера',
      },
    ],
  },
  {
    id: 3,
    question:
      'Что нужно сделать в первую очередь, если в корпоративной учетке — подозрительная активность?',
    correctVariant: 1,
    variants: [
      {
        variant: 1,
        title: 'Сообщить в ИТ-отдел, чтобы они заблокировали доступ и провели расследование',
        description:
          'При подозрительной активности важно немедленно сообщить об этом специалистам, чтобы они могли заблокировать учетную запись и предотвратить дальнейшие действия злоумышленников',
      },
      {
        variant: 2,
        title: 'Удалить подозрительные файлы и продолжить пользоваться учеткой, проверив на вирусы',
      },
      {
        variant: 3,
        title: 'Обновить антивирус и провести полную проверку системы',
      },
      {
        variant: 4,
        title: 'Попытаться восстановить учетку из резервной копии',
      },
    ],
  },
  {
    id: 6,
    question: 'ИБ-шники нашли эксплойт. Стоит ли беспокоиться?',
    correctVariant: 4,
    variants: [
      {
        variant: 1,
        title: 'Надо переписать код, чтобы хакеры не смогли найти уязвимость',
      },
      {
        variant: 2,
        title:
          'Нужно временно заблокировать доступ к уязвимому участку системы, чтобы обмануть хакеров',
      },
      {
        variant: 3,
        title: 'Надо скачать эксплойт из интернета, чтобы понять, как он работает',
      },
      {
        variant: 4,
        title:
          'Нужно заблокировать эксплойт и проверить, на всех ли устройствах были установлены последние обновления',
        description:
          '«Эксплойт» — это вредоносная программа, которая эксплуатирует уязвимость. Задача ИБ-шника— оперативно предотвратить его использование, чтобы минимизировать риск атаки',
      },
    ],
  },
  {
    id: 7,
    question: 'Коллега жалуется, что «нас дудосит ботнет». Что он имеет в виду?',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title: 'Мы заразились вирусом, который автоматически запускает вредоносные программы',
      },
      {
        variant: 2,
        title:
          'Мы подверглись атаке, при которой сеть зараженных устройств отправляет слишком много запросов, чтобы наша система перестала работать',
        description:
          'Ботнет — это сеть устройств, зараженных вредоносным ПО, которая используется для DDoS-атак, перегружающих системы избыточным трафиком',
      },
      {
        variant: 3,
        title: 'Вирус из ботнета шифрует наши данные и требует выкуп за их разблокировку',
      },
      {
        variant: 4,
        title:
          'Хакеры пытаются получить доступ к нашим внутренним данным через зараженные устройства',
      },
    ],
  },
  {
    id: 8,
    question: 'Что поможет защитить устройства от вирусов?',
    correctVariant: 4,
    variants: [
      {
        variant: 1,
        title: 'Установить антивирус — этого хватит',
      },
      {
        variant: 2,
        title: 'Заклеить все USB-порты скотчем. Так ни один вирус не проникнет',
      },
      {
        variant: 3,
        title: 'Переписать пароли на бумажку и спрятать ее под клавиатуру — безопасно и удобно',
      },
      {
        variant: 4,
        title: 'Вовремя обновлять антивирус',
        description:
          'Без постоянных обновлений ваш компьютер останется уязвимым. А в корпоративной инфраструктуре должно быть настроено централизованное автоматическое обновление',
      },
    ],
  },
  {
    id: 9,
    question: 'В разговоре вы услышали: «Эндпойнт — это святое. Всегда его защищай». О чем речь?',
    correctVariant: 3,
    variants: [
      {
        variant: 1,
        title:
          'Увлечения ИБ-шника не определяют его как профи. Даже, если он любит молочную пенку и чайный гриб…',
      },
      {
        variant: 2,
        title: 'Кликнуть по всем ссылкам на незнакомом сайте — лучшая русская рулетка',
      },
      {
        variant: 3,
        title: '21 век, дог. Безопасность рабочего десктопа — это база',
        description:
          'Эндпойнт — конечное защищаемое устройство, например, компьютер или мобильник с корпоративным антивирусом. Передовая защита конечных точек — неотъемлемая часть всех уровней Symphony',
      },
      {
        variant: 4,
        title: 'Твоя точка зрения в вопросе безопасности — самая правильная!',
      },
    ],
  },
  {
    id: 10,
    question:
      'Не только зумеры любят выдумывать слова, у хакеров тоже есть свой сленг. Найдите одно настоящее слово среди выдуманных:',
    correctVariant: 4,
    variants: [
      {
        variant: 1,
        title:
          'Кликбот — сотрудник, который действует как бот и кликает на любые ссылки, не задумываясь',
      },
      {
        variant: 2,
        title:
          'Багдилер — тот, кто намеренно оставляет баги в коде, чтобы потом исправить их за деньги',
      },
      {
        variant: 3,
        title: 'Битхант — хакер, который находит и эксплуатирует уязвимости в системах',
      },
      {
        variant: 4,
        title:
          'Бэкдор — тип вредоносной программы, который позволяет получить несанкционированный доступ к данным',
        description: 'Symphony как раз поможет обнаружить такую угрозу',
      },
    ],
  },
  {
    id: 11,
    question:
      'Думаешь, только у зумеров есть свои модные словечки? А вот и нет! Ниже приведены сленговые слова, среди которых только одно настоящее. Найди его!',
    correctVariant: 4,
    variants: [
      {
        variant: 1,
        title:
          'Багозавр — особо злостный баг, который вылезает в самый неподходящий момент и ломает все',
      },
      {
        variant: 2,
        title:
          'Кодблокер — программа, которая блокирует часть кода, чтобы прекратить его выполнение',
      },
      {
        variant: 3,
        title:
          'Скриптджампер — разработчик, который постоянно перескакивает между шрифтами, пытаясь понять, где ошибка',
      },
      {
        variant: 4,
        title: 'Спуфинг — метод хакеров, когда они, чтобы выдать себя за кого-то другого',
        description: 'Конечно же это спуфинг. И creas тут ни при чем',
      },
    ],
  },
];

// const MdrQuestions: QuizQuestion[] = [];

const EdrQuestions: QuizQuestion[] = [
  {
    id: 12,
    question:
      'Коллега говорит, что «этот файл какой-то мутный, надо закинуть его в песочницу». Что он имеет в виду?',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title: 'Предлагает переместить файл в облачное хранилище',
      },
      {
        variant: 2,
        title: 'Хочет изолировать его и посмотреть, не начнет ли он чудить',
        description:
          'Песочница создает изолированную среду, где можно безопасно запустить подозрительные файлы, чтобы они не нанесли вреда системе',
      },
      {
        variant: 3,
        title: 'Планирует хакерскую ловушку, куда заманивают вирусы, чтобы потом над ними поржать',
      },
      {
        variant: 4,
        title:
          'Собирается устроить файлу квест: спрячем его в виртуальной песочнице, и пусть ищет выход сам',
      },
    ],
  },
  {
    id: 13,
    question: '«Надо срочно поднять граф расследования по этой атаке». Что это значит?',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title: 'Разбудить самого опытного и заслуженного ИБ-шника, чтобы он во всем разобрался',
      },
      {
        variant: 2,
        title:
          'Сделать визуальную карту всех подозрительных движух: кто, что и когда натворил. Помогает быстро найти виновных',
        description:
          'Граф расследования — это визуальный инструмент, который показывает все подозрительные действия в системе и их взаимосвязи, чтобы быстро понять, как произошла атака и кто в этом замешан',
      },
      {
        variant: 3,
        title:
          'Подключить искусственный интеллект, чтобы тот сам нашел все угрозы и быстро все решил',
      },
      {
        variant: 4,
        title:
          'Прокрутить список всех подозрительных файлов и решить, кто из них выглядит особенно подозрительно',
      },
    ],
  },
  {
    id: 14,
    question:
      'Начальник поставил задачу: «Похоже, к нам вломились. Разберитесь с точкой входа». Что это значит?',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title: 'Хакеры уже стоят у двери офиса и пытаются войти с отмычками',
      },
      {
        variant: 2,
        title:
          'Кто-то пытается пробраться в нашу сеть через незащищенный сервер или уязвимое приложение',
        description:
          'Точка входа — это уязвимое место в инфраструктуре, через которое злоумышленники могут проникнуть в систему. Это может быть сервер, устройство или программа, которую стоит лучше защитить',
      },
      {
        variant: 3,
        title: 'Кто-то пытается войти в систему, но явно не знает паролей',
      },
      {
        variant: 4,
        title:
          'Хакеры ищут самый длинный и сложный путь, чтобы проникнуть в систему и устроить хаос',
      },
    ],
  },
  {
    id: 15,
    question: 'Оркестрация в кибербезопасности — это:',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title: 'Когда все системы безопасности работают как часы',
      },
      {
        variant: 2,
        title:
          'Это технология, которая позволяет системам безопасности самостоятельно координировать свои действия',
        description:
          'Оркестрация — это объединение и централизованное управление системами кибербезопасности так, чтобы они синхронизировались и работали как единая команда',
      },
      {
        variant: 3,
        title:
          'Это специальная настройка, которая позволяет разным системам безопасности отпугивать хакеров',
      },
      {
        variant: 4,
        title:
          'Когда каждый компонент системы работает автономно, но при этом выполняет свою часть работы идеально',
      },
    ],
  },
  {
    id: 16,
    question:
      'Коллега рекомендует проверить телеметрию — «может она нам что-то подскажет». О чем он говорит?',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title:
          'Хочет проверить, не запрашивала ли система помощи у инопланетян через скрытые сигналы',
      },
      {
        variant: 2,
        title: 'Предлагает посмотреть данные, которые собираются с устройств',
        description:
          'Телеметрия — это данные о событиях и активности устройств в сети, которые помогают анализировать происходящее и находить потенциальные угрозы',
      },
      {
        variant: 3,
        title: 'Хочет посмотреть рабочий чат между ИБ-шниками',
      },
      {
        variant: 4,
        title: 'Предлагает расшифровать отчеты о работе систем',
      },
    ],
  },
  {
    id: 17,
    question:
      'Коллега сказал: «С XDR мы теперь видим все, что происходит в нашей сети, и можем защититься от угроз». Что он имеет в виду?',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title:
          'XDR автоматически блокирует подозрительные подключения, даже если они происходят на самом низком уровне сети',
      },
      {
        variant: 2,
        title:
          'Это система, которая собирает данные с разных источников, анализирует их, дает представление обо всех возможных угрозах и помогает избавиться от них',
        description:
          'XDR (Extended Detection and Response) интегрирует данные из различных источников для всестороннего анализа и обнаружения угроз, а также реагирования на них',
      },
      {
        variant: 3,
        title:
          'С помощью XDR можно отслеживать не только кибератаки, но и любые странные действия пользователей',
      },
      {
        variant: 4,
        title: 'С помощью XDR можно следить за каждым движением мышки сотрудников',
      },
    ],
  },
  {
    id: 18,
    question:
      'У Symphony разные уровни защиты. На одном из них можно передать мониторинг и обнаружение угроз команде экспертов Kaspersky. О каком уровне речь?',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title: 'Security',
      },
      {
        variant: 2,
        title: 'MDR',
        description:
          'Уровень MDR предназначен для компаний, которые выбрали путь построения системы кибербезопасности с привлечением внешней экспертизы',
      },
      {
        variant: 3,
        title: 'EDR',
      },
      {
        variant: 4,
        title: 'XDR',
      },
    ],
  },
  {
    id: 19,
    question:
      'В разговоре вы услышали: «Symphony выдала активность на серваке, кинули задачку в Сок». Что сделали с задачей?',
    correctVariant: 3,
    variants: [
      {
        variant: 1,
        title: 'Поставили задачу на автоматическое исполнение — алгоритм сам разберется',
      },
      {
        variant: 2,
        title:
          'Провели совещание с командой и решили, что задача отправится в архив как «хорошая попытка, но нет»',
      },
      {
        variant: 3,
        title: 'Отправили в ИБ, чтобы спецы все прочекали',
        description:
          'SOC (Security Operation Center) — центр информационной безопасности, отвечающий за обнаружение и реагирование на киберугрозы',
      },
      {
        variant: 4,
        title: 'Присвоили задаче статус «под наблюдением»',
      },
    ],
  },
  {
    id: 20,
    question:
      '«Нужно прочекать странный файл. Закинь его ________, после этого решим — открыть или скипануть». Какое слово пропущено?',
    correctVariant: 1,
    variants: [
      {
        variant: 1,
        title: 'В песочницу',
        description:
          '«Песочница» — инструмент, при помощи которого можно безопасно открыть подозрительный файл в изолированной среде без риска заразить рабочую систему. Кстати, в Symphony песочница есть на уровне XDR (и XDR Core)',
      },
      {
        variant: 2,
        title: 'В фаерволл',
      },
      {
        variant: 3,
        title: 'В резервную копию',
      },
      {
        variant: 4,
        title: 'В прокси-сервер',
      },
    ],
  },
  {
    id: 21,
    question: 'KUMA — это важная часть Symphony, которая используется для:',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title: 'Построения предсказательной модели поведения пользователей',
      },
      {
        variant: 2,
        title: 'Управления и нормализации событий безопасности',
        description:
          'KUMA — это SIEM-система. Она предназначена для сбора, корреляции, анализа и мониторинга данных безопасности. KUMA помогает обнаруживать киберугрозы и правильно на них реагировать',
      },
      {
        variant: 3,
        title: 'Мониторинга времени простоя сотрудников',
      },
      {
        variant: 4,
        title: 'Архивации всех файлов',
      },
    ],
  },
  {
    id: 22,
    question: 'Как Symphony XDR помогает команде реагировать на киберинциденты?',
    correctVariant: 3,
    variants: [
      {
        variant: 1,
        title: 'Автоматически пересылает логи в архив для последующего анализа',
      },
      {
        variant: 2,
        title: 'Симулирует инциденты, чтобы проверить, как сотрудники справятся',
      },
      {
        variant: 3,
        title: 'Собирает телеметрию, коррелирует события и реагирует на инциденты',
        description:
          'Symphony XDR помогает не только обнаруживать угрозы, но и реагировать на них с помощью автоматизированных сценариев реагирования',
      },
      {
        variant: 4,
        title: 'Устанавливает будильник, чтобы сотрудники не забыли проверить сервера',
      },
    ],
  },
];

const XdrQuestions: QuizQuestion[] = [
  {
    id: 23,
    question: 'Если KUMA начинает «затягивать» телеметрию, то что происходит?',
    correctVariant: 1,
    variants: [
      {
        variant: 1,
        title: 'KUMA как пылесос собирает все данные о киберугрозах',
        description:
          'Когда KUMA собирает телеметрию, она аккумулирует данные о действиях и событиях на устройствах для более глубокого анализа и обнаружения угроз в системе',
      },
      {
        variant: 2,
        title: 'KUMA создает резервную копию всех данных',
      },
      {
        variant: 3,
        title: 'KUMA замедляет трафик, чтобы выявить атаки',
      },
      {
        variant: 4,
        title: 'KUMA ищет уязвимости на уровне сетевых протоколов',
      },
    ],
  },
  {
    id: 24,
    question:
      'Коллега говорит: «Эта атака разнесла наш периметр, патчить такое — все равно что чинить шину на скорости 100 км/ч». О чем речь?',
    correctVariant: 1,
    variants: [
      {
        variant: 1,
        title:
          'Атака позволила злоумышленникам проникнуть во внутреннюю сеть, и это создает высокий риск для дальнейших атак',
        description:
          'Попытка исправить ситуацию без остановки работы может привести к более серьезным проблемам',
      },
      {
        variant: 2,
        title:
          'Атака использует многокомпонентное вредоносное ПО, и каждый его элемент нужно изолировать и патчить по отдельности',
      },
      {
        variant: 3,
        title:
          'Уязвимость связана с сетевым трафиком, и закрытие требует остановки всех внешних соединений на время',
      },
      {
        variant: 4,
        title:
          'Вредоносная активность глубоко внедрилась в систему, и патч может вызвать цепную реакцию отказов других компонентов',
      },
    ],
  },
  {
    id: 25,
    question: 'Что делает XDR, когда обнаруживает сложную многоэтапную атаку?',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title: 'Блокирует весь интернет-трафик, чтобы остановить все действия злоумышленников',
      },
      {
        variant: 2,
        title: 'Уведомляет ответственных и автоматически выполняет заданные действия',
        description:
          'XDR уведомляет ответственных и реагирует на инциденты по заранее прописанным правилам. Например, изолирует сегменты, отключает устройства, удаляет подозрительные файлы — в зависимости от настроек. В сложных случаях требуется участие ИБ-специалиста',
      },
      {
        variant: 3,
        title:
          'Уведомляет все подключенные устройства и изолирует каждое из них до завершения анализа',
      },
      {
        variant: 4,
        title: 'Запускает автоматический откат всех систем к предыдущей точке восстановления',
      },
    ],
  },
  {
    id: 26,
    question:
      'Начальник говорит: «Кажется, ты опять забыл обновить базы антивируса». Почему это плохо?',
    correctVariant: 1,
    variants: [
      {
        variant: 1,
        title: 'Антивирус не сможет обнаружить новые угрозы',
        description:
          'Без регулярного обновления сигнатур антивирус не сможет распознавать новые угрозы, что может привести к компрометации системы',
      },
      {
        variant: 2,
        title: 'Все подозрительные файлы будут автоматически считаться безопасными',
      },
      {
        variant: 3,
        title:
          'Система начнет удалять все неизвестные файлы, так как они не соответствуют текущим базам',
      },
      {
        variant: 4,
        title:
          'Антивирус автоматически переходит в «спящий режим», прекращая все проверки до следующего обновления',
      },
    ],
  },
  {
    id: 27,
    question: 'Наша система дала сбой из-за плохой корреляции событий в SIEM. Что случилось?',
    correctVariant: 2,
    variants: [
      {
        variant: 1,
        title: 'SIEM перепутал события так и отправил не то сообщение в чат',
      },
      {
        variant: 2,
        title:
          'SIEM не смог правильно сопоставить базовые события в сети, что привело к пропуску критических угроз и сбою в системе',
        description:
          'Плохая корреляция в SIEM означает, что система не смогла правильно сопоставить базовые события между собой, из-за чего была пропущена атака, что может привести к уязвимостям',
      },
      {
        variant: 3,
        title: 'SIEM перегрелся от слишком большого количества данных и оставил систему без защиты',
      },
      {
        variant: 4,
        title:
          'SIEM посчитал, что события были незначительными, и отправил их на «вырезание». Система на это обиделась и упала',
      },
    ],
  },
  {
    id: 28,
    question: 'Если вам скажут: «Этот эксплойт прошил нашу систему насквозь», то о чем речь?',
    correctVariant: 1,
    variants: [
      {
        variant: 1,
        title:
          'Атака настолько сложная, что ее остановка требует кардинальных изменений в ядре системы',
        description:
          'Фраза означает, что устранение этой атаки требует радикальных изменений в ядре системы, что может нарушить стабильность работы в продакшене',
      },
      {
        variant: 2,
        title:
          'Эксплойт использует уязвимость нулевого дня, и его последствия настолько серьезны, что стандартные методы защиты бесполезны',
      },
      {
        variant: 3,
        title:
          'Атака прошла так быстро, что системе не хватило ресурсов для своевременного реагирования, как если бы процессор перестал работать',
      },
      {
        variant: 4,
        title:
          'Контрмеры для предотвращения этой атаки настолько рискованны, что их внедрение может вызвать полное нарушение работы системы',
      },
    ],
  },
  {
    id: 29,
    question:
      'Как Symphony использует песочницу для анализа подозрительных файлов и предотвращения угроз?',
    correctVariant: 1,
    variants: [
      {
        variant: 1,
        title:
          'Автоматически изолирует подозрительный файл и запускает его в виртуальной среде для безопасного анализа',
        description:
          'Песочница позволяет безопасно проверять подозрительные файлы, не рискуя заразить основную систему',
      },
      {
        variant: 2,
        title: 'Блокирует файл и отправляет его на ручную проверку специалистам',
      },
      {
        variant: 3,
        title: 'Переносит файл в архив и при повторной загрузке проверяет его на угрозы',
      },
      {
        variant: 4,
        title: 'Сразу удаляет файл, если тот вызывает подозрения',
      },
    ],
  },
  {
    id: 30,
    question: 'Три фразы из списка — полнейший бред. Выбери единственную корректную',
    correctVariant: 1,
    variants: [
      {
        variant: 1,
        title: '«Телеметрия как врач — помогает поставить диагноз»',
        description:
          'Телеметрия — это данные, которые собираются, коррелируются и анализируются. На основе этого анализа можно вынести вердикт об угрозах и принять меры для их устранения',
      },
      {
        variant: 2,
        title:
          '«Конечными точками можно назвать, например, клавиши с символами, кнопки запуска кофемашин и команды по активации телеметрии»',
      },
      {
        variant: 3,
        title: '«Пошерь SIEM для входа в систему»',
      },
      {
        variant: 4,
        title: '«С АРТ-атаками справится любой школьник, для такой задачки даже XDR не нужен»',
      },
    ],
  },
  {
    id: 31,
    question:
      '«Ребята, а кто-то проверял, сколько времени наш бэкап не обновлялся?». После этих слов в автобусе с ИБ-шниками начался сущий кошмар. Что могло вызвать панику?',
    correctVariant: 1,
    variants: [
      {
        variant: 1,
        title: 'Бэкапы устарели, и восстановление системы при атаке станет невозможным',
        description:
          'Устаревший бэкап может привести к потере важных данных, что делает невозможным восстановление системы в случае инцидента',
      },
      {
        variant: 2,
        title: 'Система перейдет в автономный режим без обновленного бэкапа',
      },
      {
        variant: 3,
        title: 'Старый бэкап может вызвать сетевые конфликты',
      },
      {
        variant: 4,
        title:
          'Устаревший бэкап автоматически удаляется через определенное время, что стало причиной паники',
      },
    ],
  },
];

export const QuizQuestions: Record<ESymphonyLevels, QuizQuestion[]> = {
  [ESymphonyLevels.SECURITY]: SecurityQuestions,
  [ESymphonyLevels.MDR]: SecurityQuestions,
  [ESymphonyLevels.EDR]: EdrQuestions,
  [ESymphonyLevels.XDR]: XdrQuestions,
};
