
import { Question } from "../types/questionBank";
import { categories } from "../data/questionBankData";

export const exportSelectedQuestions = (questions: Question[], selectedIds: string[]) => {
  const selected = questions.filter(q => selectedIds.includes(q.id));
  let content = `IPL 2025 - Selected Questions (${selected.length} questions)\n`;
  content += "=" + "=".repeat(50) + "\n\n";
  
  const categorizedSelected = categories.reduce((acc, category) => {
    const categoryQuestions = selected.filter(q => q.category === category);
    if (categoryQuestions.length > 0) {
      acc[category] = categoryQuestions;
    }
    return acc;
  }, {} as Record<string, typeof selected>);

  Object.entries(categorizedSelected).forEach(([category, questions]) => {
    content += `\n${category.toUpperCase()}\n`;
    content += "-".repeat(category.length) + "\n\n";
    
    questions.forEach((q, index) => {
      content += `${index + 1}. ${q.question}\n`;
      content += `   ${q.answer}\n`;
      if (q.difficulty) content += `   [Difficulty: ${q.difficulty}]\n`;
      if (q.tags) content += `   [Tags: ${q.tags.join(', ')}]\n`;
      content += "\n";
    });
  });
  
  downloadFile(content, `ipl-2025-qa-selected-${selected.length}.txt`);
};

export const exportAllQuestions = (questions: Question[]) => {
  let content = "IPL 2025 - Complete Question Bank (500+ Questions)\n";
  content += "=" + "=".repeat(55) + "\n\n";
  content += "Introduction:\n";
  content += "This comprehensive collection contains 500+ expertly curated questions and answers about IPL 2025, ";
  content += "covering every aspect of the tournament including detailed team performance analysis, individual player statistics, ";
  content += "match insights, venue comparisons, auction strategies, awards, and tactical breakdowns.\n\n";
  content += "Categories covered:\n";
  categories.forEach(category => {
    const count = questions.filter(q => q.category === category).length;
    content += `• ${category}: ${count} questions\n`;
  });
  content += "\n";

  categories.forEach(category => {
    const categoryQuestions = questions.filter(q => q.category === category);
    content += `\n${category.toUpperCase()}\n`;
    content += "=".repeat(category.length) + "\n\n";
    
    const subcategories = Array.from(new Set(categoryQuestions.map(q => q.subcategory).filter(Boolean)));
    
    if (subcategories.length > 0) {
      subcategories.forEach(subcategory => {
        const subQuestions = categoryQuestions.filter(q => q.subcategory === subcategory);
        content += `\n${subcategory}\n`;
        content += "-".repeat(subcategory!.length) + "\n\n";
        
        subQuestions.forEach((q, index) => {
          content += `${index + 1}. ${q.question}\n`;
          content += `   ${q.answer}\n`;
          if (q.difficulty) content += `   [Difficulty: ${q.difficulty}]\n`;
          if (q.tags) content += `   [Tags: ${q.tags.join(', ')}]\n`;
          content += "\n";
        });
      });
    } else {
      categoryQuestions.forEach((q, index) => {
        content += `${index + 1}. ${q.question}\n`;
        content += `   ${q.answer}\n`;
        if (q.difficulty) content += `   [Difficulty: ${q.difficulty}]\n`;
        if (q.tags) content += `   [Tags: ${q.tags.join(', ')}]\n`;
        content += "\n";
      });
    }
  });

  content += "\n" + "=".repeat(60) + "\n";
  content += "Advanced Analytics Ready:\n";
  content += "This collection is designed for comprehensive cricket analytics, supporting:\n";
  content += "• Player performance comparisons across multiple metrics\n";
  content += "• Team strategy analysis and tactical insights\n";
  content += "• Historical context and trend analysis\n";
  content += "• Venue-specific performance patterns\n";
  content += "• Auction value and ROI analysis\n";
  content += "• Match situation and pressure performance\n\n";
  content += "Generated from IPL 2025 Insights Hub - Professional Cricket Analytics Platform\n";
  content += "© 2025 - Advanced Sports Data Intelligence";

  downloadFile(content, 'ipl-2025-complete-question-bank-500plus.txt');
};

const downloadFile = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
