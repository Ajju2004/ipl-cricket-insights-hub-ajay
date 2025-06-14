
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText } from "lucide-react";
import { questionBank, categories } from "../data/questionBankData";
import { QuestionFilters } from "../types/questionBank";
import { useQuestionFilters } from "../hooks/useQuestionFilters";
import { useQuestionSelection } from "../hooks/useQuestionSelection";
import { exportSelectedQuestions, exportAllQuestions } from "../utils/questionExport";
import QuestionBankFilters from "./QuestionBankFilters";
import QuestionCategory from "./QuestionCategory";

const QuestionBank = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [filters, setFilters] = useState<QuestionFilters>({
    searchTerm: "",
    selectedCategory: "All",
    selectedDifficulty: "All"
  });

  const { filteredQuestions, groupedQuestions } = useQuestionFilters(questionBank, filters);
  const { selectedQuestions, toggleQuestion, selectAllInCategory } = useQuestionSelection();

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleExportSelected = () => {
    exportSelectedQuestions(filteredQuestions, selectedQuestions);
  };

  const handleExportAll = () => {
    exportAllQuestions(questionBank);
  };

  return (
    <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-600/30">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
          <FileText className="text-blue-400" size={24} />
          IPL 2025 Question Bank
          <Badge variant="outline" className="ml-2 text-xs">
            {questionBank.length}+ Questions
          </Badge>
          <Badge variant="outline" className="ml-2 text-xs bg-green-500/20 text-green-400">
            Enhanced Collection
          </Badge>
        </CardTitle>
        <p className="text-sm text-slate-300">
          Comprehensive collection with advanced filtering, search, and categorization. Ready to scale to 500+ questions.
        </p>
        
        <div className="mt-4">
          <QuestionBankFilters
            filters={filters}
            onFiltersChange={setFilters}
            resultCount={filteredQuestions.length}
          />
        </div>
        
        <div className="flex gap-2 mt-4 flex-wrap">
          <Button 
            onClick={handleExportAll}
            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
          >
            <Download size={16} />
            Export All ({questionBank.length} Q&A)
          </Button>
          {selectedQuestions.length > 0 && (
            <Button 
              onClick={handleExportSelected}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Export Selected ({selectedQuestions.length})
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {Object.entries(groupedQuestions).map(([category, categoryQuestions]) => (
            <QuestionCategory
              key={category}
              category={category}
              questions={categoryQuestions}
              selectedQuestions={selectedQuestions}
              expandedCategories={expandedCategories}
              onToggleCategory={toggleCategory}
              onToggleQuestion={toggleQuestion}
              onSelectAllInCategory={selectAllInCategory}
            />
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
          <h4 className="font-semibold text-blue-400 mb-2">Enhanced Features:</h4>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• Advanced search across questions, answers, and tags</li>
            <li>• Category and difficulty filtering</li>
            <li>• Bulk selection and export capabilities</li>
            <li>• Subcategory organization for better structure</li>
            <li>• Professional formatting with metadata</li>
            <li>• Scalable architecture ready for 500+ questions</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionBank;
