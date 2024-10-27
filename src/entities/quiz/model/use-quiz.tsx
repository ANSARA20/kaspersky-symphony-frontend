import { create } from 'zustand';

interface QuizStore {
  currentQuestionNumber: number;
  correctAnswersCount: number;
  answeredQuestionsIds: number[];
  currentQuestionId?: number;
  nextQuestion: VoidFunction;
  incCorrectAnswers: VoidFunction;
  setCurrentQuestionId: (id: number) => void;
  pushToAnsweredQuestionsIds: (id: number) => void;
}

export const useQuiz = create<QuizStore>()((set) => ({
  currentQuestionNumber: 1,
  correctAnswersCount: 0,
  currentQuestionId: undefined,
  answeredQuestionsIds: [],
  nextQuestion: () => set((state) => ({ currentQuestionNumber: state.currentQuestionNumber + 1 })),
  incCorrectAnswers: () => set((state) => ({ correctAnswersCount: state.correctAnswersCount + 1 })),
  setCurrentQuestionId: (questionId) => set(() => ({ currentQuestionId: questionId })),
  pushToAnsweredQuestionsIds: (questionId) =>
    set((state) => ({ answeredQuestionsIds: [...state.answeredQuestionsIds, questionId] })),
}));
