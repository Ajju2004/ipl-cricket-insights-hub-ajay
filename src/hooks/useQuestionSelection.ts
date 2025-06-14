
import { useState } from "react";
import { Question } from "../types/questionBank";

export const useQuestionSelection = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

  const toggleQuestion = (questionId: string) => {
    setSelectedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const selectAllInCategory = (categoryQuestions: Question[]) => {
    const allSelected = categoryQuestions.every(q => selectedQuestions.includes(q.id));
    
    if (allSelected) {
      setSelectedQuestions(prev => prev.filter(id => !categoryQuestions.map(q => q.id).includes(id)));
    } else {
      setSelectedQuestions(prev => [...new Set([...prev, ...categoryQuestions.map(q => q.id)])]);
    }
  };

  return {
    selectedQuestions,
    toggleQuestion,
    selectAllInCategory
  };
};
