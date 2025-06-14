
import { Badge } from "@/components/ui/badge";
import { Question } from "../types/questionBank";

interface QuestionItemProps {
  question: Question;
  isSelected: boolean;
  onToggle: (questionId: string) => void;
}

const QuestionItem = ({ question, isSelected, onToggle }: QuestionItemProps) => {
  return (
    <div className="space-y-2 p-3 bg-slate-700/30 rounded-lg">
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggle(question.id)}
          className="mt-1"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-medium text-blue-400">
              Q: {question.question}
            </p>
            {question.difficulty && (
              <Badge 
                variant="outline" 
                className={`text-xs ${
                  question.difficulty === 'Easy' ? 'text-green-400 border-green-400' :
                  question.difficulty === 'Medium' ? 'text-yellow-400 border-yellow-400' :
                  'text-red-400 border-red-400'
                }`}
              >
                {question.difficulty}
              </Badge>
            )}
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-2">
            A: {question.answer}
          </p>
          {question.subcategory && (
            <Badge variant="secondary" className="text-xs mr-2">
              {question.subcategory}
            </Badge>
          )}
          {question.tags && (
            <div className="flex gap-1 flex-wrap">
              {question.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
