import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

const textClass = 'text-sm md:text-base lg:text-lg';
const listClass = clsx(textClass, 'list-inside text-background');

const ListItem = ({ children }: PropsWithChildren) => {
  return <li className='mb-2 leading-6'>{children}</li>;
};

const AnswerWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Text className={textClass} color='bg'>
      {children}
    </Text>
  );
};

export const FAQQuestions = [
  {
    question: 'Кто может участвовать в розыгрыше?',
    answer: (
      <AnswerWrapper>
        Участниками розыгрыша могут быть дееспособные граждане РФ старше 18 лет, постоянно
        проживающие в России.
      </AnswerWrapper>
    ),
  },
  {
    question: 'Какие сроки у розыгрыша?',
    answer: (
      <AnswerWrapper>
        Розыгрыш проводится каждую неделю с <b>13 января 2025 года (00:00:00)</b> по{' '}
        <b>9 февраля 2025 года (23:59:59).</b>
      </AnswerWrapper>
    ),
  },
  {
    question: 'Как поучаствовать в розыгрыше и получить приз?',
    answer: (
      <View vertical>
        <ol className={clsx(listClass, 'list-decimal')}>
          <ListItem>Ответить на 7 вопросов теста.</ListItem>
          <ListItem>Получить в результате теста одного из тотемных песиков*</ListItem>
          <ListItem>Запустить онлайн-колесо призов.</ListItem>
          <ListItem>Заполнить регистрационную форму и согласиться с условиями акции.</ListItem>
        </ol>
        <Text className='text-sm md:text-base lg:text-lg' color='bg'>
          *Если ваш тотемный песик — «Чихуахуа», то вы не прошли тест и не получаете приз. Не
          расстраивайтесь, вы еще сможете попытать удачу!
        </Text>
      </View>
    ),
  },
  {
    question: 'Сколько раз можно участвовать в розыгрыше?',
    answer: (
      <AnswerWrapper>
        Каждую неделю у вас есть 3 попытки пройти тест. В рамках одной недели можно выиграть только
        один приз, а за весь период – до 4 призов.
      </AnswerWrapper>
    ),
  },
  {
    question: 'Какие призы можно получить?',
    answer: (
      <AnswerWrapper>
        Призовой фонд включает в себя: худи, мягкие игрушки, носки, брелоки, промокоды на продукты
        Kaspersky, а также другие призы (полное описание призового фонда, а также количество призов
        смотрите в правилах акции).
      </AnswerWrapper>
    ),
  },
  {
    question: ' Как определяется приз?',
    answer: (
      <AnswerWrapper>
        После прохождения теста запускается онлайн-колесо, которое случайным образом определяет
        приз. Результаты фиксируются в базе данных.
      </AnswerWrapper>
    ),
  },
  {
    question: 'Могут ли призы закончиться?',
    answer: (
      <AnswerWrapper>
        Да, могут. Если фонд призов на текущую неделю исчерпан, после прокрутки колеса вы не
        получите приз. Попробуйте на следующей неделе!
      </AnswerWrapper>
    ),
  },
  {
    question: 'Какие данные нужно предоставить для получения приза?',
    answer: (
      <AnswerWrapper>
        ФИО, номер телефона, email, адрес проживания (для доставки призов), паспортные данные (для
        отдельных призов).
      </AnswerWrapper>
    ),
  },
  {
    question: 'Что делать, если я не предоставил персональные данные вовремя?',
    answer: (
      <AnswerWrapper>
        Если данные не предоставлены в течение 5 дней с момента запроса, приз считается
        невостребованным и возвращается в призовой фонд розыгрыша.
      </AnswerWrapper>
    ),
  },
  {
    question: 'Когда будут доставлены призы?',
    answer: (
      <AnswerWrapper>
        Организатор связывается с победителями через e-mail и доставляет призы в течение 90 рабочих
        дней после предоставления всех персональных данных.
      </AnswerWrapper>
    ),
  },
  {
    question: 'Можно ли получить денежный эквивалент приза?',
    answer: (
      <AnswerWrapper>Нет. Замена приза на денежный эквивалент не предусмотрена.</AnswerWrapper>
    ),
  },
  {
    question: 'Могу ли я отозвать согласие на обработку персональных данных?',
    answer: (
      <AnswerWrapper>Да, но это автоматически исключит вас из участия в розыгрыше.</AnswerWrapper>
    ),
  },
  {
    question: 'Что делать, если я не получил уведомление о выигрыше?',
    answer: (
      <AnswerWrapper>
        Организатор не несет ответственности за недостоверную контактную информацию или сбои в
        связи.
      </AnswerWrapper>
    ),
  },
  {
    question: 'Какие действия считаются нарушением правил розыгрыша?',
    answer: (
      <AnswerWrapper>
        <ul className={clsx(listClass, 'list-disc')}>
          <ListItem>Использование программ для фальсификации участия.</ListItem>
          <ListItem>Предоставление неправильных или поддельных персональных данных.</ListItem>
          <ListItem>Многократное участие под разными учетными записями.</ListItem>
        </ul>
      </AnswerWrapper>
    ),
  },
];
