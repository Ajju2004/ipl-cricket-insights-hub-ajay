
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { QuestionFilters } from "../types/questionBank";
import { categories, difficulties } from "../data/questionBankData";

interface QuestionBankFiltersProps {
  filters: QuestionFilters;
  onFiltersChange: (filters: QuestionFilters) => void;
  resultCount: number;
}

const QuestionBankFilters = ({ filters, onFiltersChange, resultCount }: QuestionBankFiltersProps) => {
  const updateFilter = (key: keyof QuestionFilters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
        <Input
          placeholder="Search questions, answers, or tags..."
          value={filters.searchTerm}
          onChange={(e) => updateFilter('searchTerm', e.target.value)}
          className="pl-10 bg-slate-700/50 border-slate-600 text-white"
        />
      </div>
      
      <div className="flex gap-2 flex-wrap">
        <select
          value={filters.selectedCategory}
          onChange={(e) => updateFilter('selectedCategory', e.target.value)}
          className="px-3 py-1 bg-slate-700 border border-slate-600 rounded text-white text-sm"
        >
          <option value="All">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        
        <select
          value={filters.selectedDifficulty}
          onChange={(e) => updateFilter('selectedDifficulty', e.target.value)}
          className="px-3 py-1 bg-slate-700 border border-slate-600 rounded text-white text-sm"
        >
          {difficulties.map(diff => (
            <option key={diff} value={diff}>{diff} Difficulty</option>
          ))}
        </select>
        
        <Badge variant="secondary" className="flex items-center gap-1">
          <Filter size={12} />
          Showing: {resultCount} questions
        </Badge>
      </div>
    </div>
  );
};

export default QuestionBankFilters;
