
export interface Question {
  id: string;
  question: string;
  answer: string;
  category: string;
  subcategory?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  tags?: string[];
}

export interface QuestionFilters {
  searchTerm: string;
  selectedCategory: string;
  selectedDifficulty: string;
}
