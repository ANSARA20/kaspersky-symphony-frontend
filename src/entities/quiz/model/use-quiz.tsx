import { create } from 'zustand';

interface QuizStore {
  currentQuestionNumber: number;
  correctAnswersCount: number;
  answeredQuestionsIds: number[];
  currentQuestionId?: number;
  isQuizEnded: boolean;
  nextQuestion: VoidFunction;
  incCorrectAnswers: VoidFunction;
  setIsQuizEnded: (value: boolean) => void;
  setCurrentQuestionId: (id: number) => void;
  pushToAnsweredQuestionsIds: (id: number) => void;
}

export const useQuiz = create<QuizStore>()((set) => ({
  currentQuestionNumber: 7,
  correctAnswersCount: 6,
  currentQuestionId: undefined,
  isQuizEnded: false,
  answeredQuestionsIds: [],

  nextQuestion: () => set((state) => ({ currentQuestionNumber: state.currentQuestionNumber + 1 })),
  incCorrectAnswers: () => set((state) => ({ correctAnswersCount: state.correctAnswersCount + 1 })),
  setIsQuizEnded: (value) => set(() => ({ isQuizEnded: value })),
  setCurrentQuestionId: (questionId) => set(() => ({ currentQuestionId: questionId })),
  pushToAnsweredQuestionsIds: (questionId) =>
    set((state) => ({ answeredQuestionsIds: [...state.answeredQuestionsIds, questionId] })),
}));
