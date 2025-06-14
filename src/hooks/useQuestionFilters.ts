
import { useMemo } from "react";
import { Question, QuestionFilters } from "../types/questionBank";

export const useQuestionFilters = (questions: Question[], filters: QuestionFilters) => {
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchesSearch = q.question.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                           q.answer.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                           q.tags?.some(tag => tag.toLowerCase().includes(filters.searchTerm.toLowerCase()));
      const matchesCategory = filters.selectedCategory === "All" || q.category === filters.selectedCategory;
      const matchesDifficulty = filters.selectedDifficulty === "All" || q.difficulty === filters.selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [questions, filters.searchTerm, filters.selectedCategory, filters.selectedDifficulty]);

  const groupedQuestions = useMemo(() => {
    const categories = Array.from(new Set(questions.map(q => q.category)));
    return categories.reduce((acc, category) => {
      acc[category] = filteredQuestions.filter(q => q.category === category);
      return acc;
    }, {} as Record<string, Question[]>);
  }, [filteredQuestions, questions]);

  return { filteredQuestions, groupedQuestions };
};
