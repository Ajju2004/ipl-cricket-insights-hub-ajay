
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Question } from "../types/questionBank";
import QuestionItem from "./QuestionItem";

interface QuestionCategoryProps {
  category: string;
  questions: Question[];
  selectedQuestions: string[];
  expandedCategories: string[];
  onToggleCategory: (category: string) => void;
  onToggleQuestion: (questionId: string) => void;
  onSelectAllInCategory: (questions: Question[]) => void;
}

const QuestionCategory = ({
  category,
  questions,
  selectedQuestions,
  expandedCategories,
  onToggleCategory,
  onToggleQuestion,
  onSelectAllInCategory
}: QuestionCategoryProps) => {
  if (questions.length === 0) return null;
  
  const isExpanded = expandedCategories.includes(category);
  const selectedInCategory = questions.filter(q => selectedQuestions.includes(q.id)).length;
  
  return (
    <div className="border border-slate-600/30 rounded-lg">
      <div className="flex items-center justify-between p-4 hover:bg-slate-700/40">
        <Button
          variant="ghost"
          onClick={() => onToggleCategory(category)}
          className="flex-1 justify-between text-left p-0"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">{category}</span>
            <Badge variant="secondary" className="text-xs">
              {questions.length} questions
            </Badge>
            {selectedInCategory > 0 && (
              <Badge variant="outline" className="text-xs text-green-400 border-green-400">
                {selectedInCategory} selected
              </Badge>
            )}
          </div>
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => onSelectAllInCategory(questions)}
          className="ml-2 text-xs"
        >
          {selectedInCategory === questions.length ? 'Deselect All' : 'Select All'}
        </Button>
      </div>
      
      {isExpanded && (
        <div className="p-4 space-y-3 border-t border-slate-600/30 max-h-96 overflow-y-auto">
          {questions.map(question => (
            <QuestionItem
              key={question.id}
              question={question}
              isSelected={selectedQuestions.includes(question.id)}
              onToggle={onToggleQuestion}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionCategory;
