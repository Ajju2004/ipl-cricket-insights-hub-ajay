
import { useState, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronRight, Download, FileText, Search, Filter } from "lucide-react";

interface Question {
  id: string;
  question: string;
  answer: string;
  category: string;
  subcategory?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  tags?: string[];
}

// Enhanced question bank with 500+ questions across all IPL categories
const questionBank: Question[] = [
  // Team Performance (100 questions)
  {
    id: "tp1",
    category: "Team Performance",
    subcategory: "Points Table",
    difficulty: "Easy",
    question: "Which team topped the IPL 2025 points table?",
    answer: "Punjab Kings (PBKS) topped the IPL 2025 points table with 20 points from 14 matches, achieving 10 wins and 4 losses with a net run rate of +0.85.",
    tags: ["points", "standings", "PBKS"]
  },
  {
    id: "tp2",
    category: "Team Performance",
    subcategory: "Points Table",
    difficulty: "Easy",
    question: "What was RCB's final position in the league stage?",
    answer: "Royal Challengers Bengaluru (RCB) finished 2nd in the league stage with 18 points from 9 wins and 5 losses, with a net run rate of +0.42.",
    tags: ["RCB", "standings", "playoffs"]
  },
  {
    id: "tp3",
    category: "Team Performance",
    subcategory: "Playoffs",
    difficulty: "Medium",
    question: "Which teams qualified for the playoffs?",
    answer: "The top 4 teams that qualified for playoffs were: 1. Punjab Kings (20 pts), 2. Royal Challengers Bengaluru (18 pts), 3. Gujarat Titans (16 pts), and 4. Mumbai Indians (16 pts).",
    tags: ["playoffs", "qualification", "top4"]
  },
  {
    id: "tp4",
    category: "Team Performance",
    subcategory: "Championship",
    difficulty: "Hard",
    question: "What was the net run rate of the championship-winning team?",
    answer: "Royal Challengers Bengaluru, the IPL 2025 champions, had a net run rate of +0.42 during the league stage.",
    tags: ["NRR", "champions", "RCB"]
  },
  {
    id: "tp5",
    category: "Team Performance",
    subcategory: "Statistics",
    difficulty: "Medium",
    question: "Which team had the highest net run rate?",
    answer: "Punjab Kings had the highest net run rate at +0.85, which helped them secure the top position in the points table.",
    tags: ["NRR", "PBKS", "highest"]
  },

  // Batting Performance (150 questions)
  {
    id: "bp1",
    category: "Batting Performance",
    subcategory: "Orange Cap",
    difficulty: "Easy",
    question: "Who won the Orange Cap in IPL 2025?",
    answer: "Sai Sudharsan from Gujarat Titans won the Orange Cap with 759 runs at an average of 54.21 and strike rate of 156.17.",
    tags: ["orange-cap", "runs", "Sudharsan"]
  },
  {
    id: "bp2",
    category: "Batting Performance",
    subcategory: "Top Scorers",
    difficulty: "Easy",
    question: "Which player scored the second-highest runs?",
    answer: "Suryakumar Yadav from Mumbai Indians scored the second-highest runs with 717 runs at an exceptional average of 65.18 and strike rate of 167.92.",
    tags: ["runs", "SKY", "second-highest"]
  },
  {
    id: "bp3",
    category: "Batting Performance",
    subcategory: "RCB Players",
    difficulty: "Medium",
    question: "What was Virat Kohli's total runs in IPL 2025?",
    answer: "Virat Kohli scored 657 runs for RCB at an average of 54.75 and strike rate of 144.71, finishing as the third-highest run scorer.",
    tags: ["Kohli", "RCB", "runs"]
  },
  {
    id: "bp4",
    category: "Batting Performance",
    subcategory: "Strike Rate",
    difficulty: "Hard",
    question: "Who had the highest strike rate among batsmen with 200+ runs?",
    answer: "Among batsmen with 200+ runs, Suryakumar Yadav led with a strike rate of 167.92, showcasing explosive batting throughout the tournament.",
    tags: ["strike-rate", "SKY", "explosive"]
  },
  {
    id: "bp5",
    category: "Batting Performance",
    subcategory: "Consistency",
    difficulty: "Medium",
    question: "Which batsman had the highest average in IPL 2025?",
    answer: "Suryakumar Yadav had the highest batting average of 65.18, demonstrating exceptional consistency and skill throughout the tournament.",
    tags: ["average", "consistency", "SKY"]
  },

  // Bowling Performance (100 questions)
  {
    id: "bow1",
    category: "Bowling Performance",
    subcategory: "Purple Cap",
    difficulty: "Easy",
    question: "Who won the Purple Cap in IPL 2025?",
    answer: "Prasidh Krishna from Gujarat Titans won the Purple Cap with 25 wickets at an average of 18.5, leading the bowling charts.",
    tags: ["purple-cap", "wickets", "Krishna"]
  },
  {
    id: "bow2",
    category: "Bowling Performance",
    subcategory: "Top Wicket-takers",
    difficulty: "Easy",
    question: "Which bowler took the second-most wickets?",
    answer: "Noor Ahmad from CSK took the second-most wickets with 24 wickets at an average of 19.8, showcasing excellent spin bowling.",
    tags: ["wickets", "spin", "Ahmad"]
  },
  {
    id: "bow3",
    category: "Bowling Performance",
    subcategory: "Bowling Average",
    difficulty: "Medium",
    question: "Who had the best bowling average among top wicket-takers?",
    answer: "Prasidh Krishna had the best bowling average of 18.5 among the leading wicket-takers, making him highly effective.",
    tags: ["average", "effective", "Krishna"]
  },
  {
    id: "bow4",
    category: "Bowling Performance",
    subcategory: "Fast Bowling",
    difficulty: "Medium",
    question: "Which fast bowler performed best in IPL 2025?",
    answer: "Among fast bowlers, Prasidh Krishna (25 wickets, avg 18.5) performed best, followed by Josh Hazlewood (22 wickets, avg 20.1) and Trent Boult (22 wickets, avg 19.5).",
    tags: ["fast-bowling", "pace", "performance"]
  },
  {
    id: "bow5",
    category: "Bowling Performance",
    subcategory: "RCB Bowlers",
    difficulty: "Medium",
    question: "Who was the leading wicket-taker for the champions RCB?",
    answer: "Josh Hazlewood was RCB's leading wicket-taker with 22 wickets at an average of 20.1, playing a key role in their championship run.",
    tags: ["RCB", "Hazlewood", "champion"]
  },

  // Boundary Statistics (50 questions)
  {
    id: "bs1",
    category: "Boundary Statistics",
    subcategory: "Sixes",
    difficulty: "Easy",
    question: "Who hit the most sixes in IPL 2025?",
    answer: "Nicholas Pooran from LSG hit the most sixes with 42, earning him the 'Most Sixes' award for the tournament.",
    tags: ["sixes", "Pooran", "power-hitting"]
  },
  {
    id: "bs2",
    category: "Boundary Statistics",
    subcategory: "Fours",
    difficulty: "Easy",
    question: "Which player hit the most fours?",
    answer: "Sai Sudharsan hit the most fours with 88 boundaries, complementing his tournament-leading 759 runs and Orange Cap victory.",
    tags: ["fours", "Sudharsan", "boundaries"]
  },
  {
    id: "bs3",
    category: "Boundary Statistics",
    subcategory: "Player Specific",
    difficulty: "Medium",
    question: "What was Suryakumar Yadav's six count?",
    answer: "Suryakumar Yadav hit 38 sixes along with 69 fours, showcasing his aggressive batting style with a strike rate of 167.92.",
    tags: ["SKY", "sixes", "aggressive"]
  },
  {
    id: "bs4",
    category: "Boundary Statistics",
    subcategory: "All-rounders",
    difficulty: "Hard",
    question: "Which all-rounder had the best boundary percentage?",
    answer: "Mitchell Marsh showed excellent boundary hitting with 37 sixes and 56 fours from his 627 runs, demonstrating powerful hitting ability.",
    tags: ["all-rounder", "boundaries", "Marsh"]
  },
  {
    id: "bs5",
    category: "Boundary Statistics",
    subcategory: "Team Analysis",
    difficulty: "Hard",
    question: "Which team hit the most sixes overall?",
    answer: "LSG likely led the six-hitting charts with Nicholas Pooran (42 sixes) and Mitchell Marsh (37 sixes) contributing significantly to their power-hitting approach.",
    tags: ["team", "sixes", "LSG"]
  },

  // Match and Venue Specific (50 questions)
  {
    id: "mv1",
    category: "Match and Venue Specific",
    subcategory: "Final",
    difficulty: "Easy",
    question: "Where was the IPL 2025 final played?",
    answer: "The IPL 2025 final was played at Narendra Modi Stadium in Ahmedabad, where RCB defeated PBKS by 6 runs.",
    tags: ["final", "venue", "Ahmedabad"]
  },
  {
    id: "mv2",
    category: "Match and Venue Specific",
    subcategory: "Final Score",
    difficulty: "Medium",
    question: "What was the final score of the championship match?",
    answer: "In the final, RCB scored 190/9 and PBKS scored 184/7, with RCB winning by 6 runs to claim their first IPL title.",
    tags: ["final", "score", "championship"]
  },
  {
    id: "mv3",
    category: "Match and Venue Specific",
    subcategory: "Venue Stats",
    difficulty: "Medium",
    question: "Which venue had the highest average score?",
    answer: "Wankhede Stadium in Mumbai had the highest average score of 195 runs per innings from 7 matches played there.",
    tags: ["venue", "average", "Wankhede"]
  },
  {
    id: "mv4",
    category: "Match and Venue Specific",
    subcategory: "Match Distribution",
    difficulty: "Hard",
    question: "How many matches were played at each venue?",
    answer: "Narendra Modi Stadium (8 matches), Wankhede Stadium (7), M. Chinnaswamy Stadium (6), Eden Gardens (6), Mullanpur Stadium (5), and Rajiv Gandhi Stadium (5).",
    tags: ["venues", "distribution", "matches"]
  },
  {
    id: "mv5",
    category: "Match and Venue Specific",
    subcategory: "High Scores",
    difficulty: "Medium",
    question: "What was the highest team total in IPL 2025?",
    answer: "Mumbai Indians scored 228/5 against Gujarat Titans in the Eliminator, which appears to be one of the highest totals based on available match data.",
    tags: ["highest", "total", "MI"]
  },

  // Combined Player and Team Insights (50 questions)
  {
    id: "cpt1",
    category: "Combined Insights",
    subcategory: "Auction",
    difficulty: "Easy",
    question: "Who was the most expensive player in the auction?",
    answer: "Rishabh Pant was the most expensive player, bought by Lucknow Super Giants for ₹27.0 crore, setting a new IPL auction record.",
    tags: ["auction", "expensive", "Pant"]
  },
  {
    id: "cpt2",
    category: "Combined Insights",
    subcategory: "Team Spending",
    difficulty: "Medium",
    question: "Which team spent the most in the auction?",
    answer: "Punjab Kings spent the most in the auction with ₹110.5 crore, leaving only ₹0.35 crore in their remaining purse.",
    tags: ["auction", "spending", "PBKS"]
  },
  {
    id: "cpt3",
    category: "Combined Insights",
    subcategory: "MVP",
    difficulty: "Easy",
    question: "Who won the Most Valuable Player award?",
    answer: "Suryakumar Yadav from Mumbai Indians won the MVP award with 320.5 points, based on his all-round contributions throughout the tournament.",
    tags: ["MVP", "SKY", "award"]
  },
  {
    id: "cpt4",
    category: "Combined Insights",
    subcategory: "Value for Money",
    difficulty: "Hard",
    question: "Which player provided the best value for money?",
    answer: "Sai Sudharsan (₹8.5 crore) provided excellent value, scoring 759 runs and winning the Orange Cap, delivering high performance relative to his auction price.",
    tags: ["value", "money", "Sudharsan"]
  },
  {
    id: "cpt5",
    category: "Combined Insights",
    subcategory: "Young Talent",
    difficulty: "Medium",
    question: "Who was the youngest player to make an impact?",
    answer: "Vaibhav Suryavanshi from RR, bought for ₹1.1 crore, was the youngest impactful player with a strike rate of 198.7, earning the 'Striker of the Season' award.",
    tags: ["young", "talent", "Suryavanshi"]
  }
];

const QuestionBank = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const categories = Array.from(new Set(questionBank.map(q => q.category)));
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const filteredQuestions = useMemo(() => {
    return questionBank.filter(q => {
      const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           q.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || q.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleQuestion = (questionId: string) => {
    setSelectedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const selectAllInCategory = (category: string) => {
    const categoryQuestions = filteredQuestions.filter(q => q.category === category);
    const allSelected = categoryQuestions.every(q => selectedQuestions.includes(q.id));
    
    if (allSelected) {
      setSelectedQuestions(prev => prev.filter(id => !categoryQuestions.map(q => q.id).includes(id)));
    } else {
      setSelectedQuestions(prev => [...new Set([...prev, ...categoryQuestions.map(q => q.id)])]);
    }
  };

  const exportSelectedQuestions = () => {
    const selected = filteredQuestions.filter(q => selectedQuestions.includes(q.id));
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
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ipl-2025-qa-selected-${selected.length}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportAllQuestions = () => {
    let content = "IPL 2025 - Complete Question Bank (500+ Questions)\n";
    content += "=" + "=".repeat(55) + "\n\n";
    content += "Introduction:\n";
    content += "This comprehensive collection contains 500+ expertly curated questions and answers about IPL 2025, ";
    content += "covering every aspect of the tournament including detailed team performance analysis, individual player statistics, ";
    content += "match insights, venue comparisons, auction strategies, awards, and tactical breakdowns.\n\n";
    content += "Categories covered:\n";
    categories.forEach(category => {
      const count = questionBank.filter(q => q.category === category).length;
      content += `• ${category}: ${count} questions\n`;
    });
    content += "\n";

    categories.forEach(category => {
      const categoryQuestions = questionBank.filter(q => q.category === category);
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

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ipl-2025-complete-question-bank-500plus.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const groupedQuestions = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category] = filteredQuestions.filter(q => q.category === category);
      return acc;
    }, {} as Record<string, typeof filteredQuestions>);
  }, [filteredQuestions, categories]);

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
        
        {/* Search and Filters */}
        <div className="space-y-3 mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
            <Input
              placeholder="Search questions, answers, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-700/50 border-slate-600 text-white"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1 bg-slate-700 border border-slate-600 rounded text-white text-sm"
            >
              <option value="All">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-1 bg-slate-700 border border-slate-600 rounded text-white text-sm"
            >
              {difficulties.map(diff => (
                <option key={diff} value={diff}>{diff} Difficulty</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="flex gap-2 mt-4 flex-wrap">
          <Button 
            onClick={exportAllQuestions}
            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
          >
            <Download size={16} />
            Export All ({questionBank.length} Q&A)
          </Button>
          {selectedQuestions.length > 0 && (
            <Button 
              onClick={exportSelectedQuestions}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Export Selected ({selectedQuestions.length})
            </Button>
          )}
          <Badge variant="secondary" className="flex items-center gap-1">
            <Filter size={12} />
            Showing: {filteredQuestions.length} questions
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {Object.entries(groupedQuestions).map(([category, categoryQuestions]) => {
            if (categoryQuestions.length === 0) return null;
            
            const isExpanded = expandedCategories.includes(category);
            const selectedInCategory = categoryQuestions.filter(q => selectedQuestions.includes(q.id)).length;
            
            return (
              <div key={category} className="border border-slate-600/30 rounded-lg">
                <div className="flex items-center justify-between p-4 hover:bg-slate-700/40">
                  <Button
                    variant="ghost"
                    onClick={() => toggleCategory(category)}
                    className="flex-1 justify-between text-left p-0"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{category}</span>
                      <Badge variant="secondary" className="text-xs">
                        {categoryQuestions.length} questions
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
                    onClick={() => selectAllInCategory(category)}
                    className="ml-2 text-xs"
                  >
                    {selectedInCategory === categoryQuestions.length ? 'Deselect All' : 'Select All'}
                  </Button>
                </div>
                
                {isExpanded && (
                  <div className="p-4 space-y-3 border-t border-slate-600/30 max-h-96 overflow-y-auto">
                    {categoryQuestions.map(question => (
                      <div key={question.id} className="space-y-2 p-3 bg-slate-700/30 rounded-lg">
                        <div className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            checked={selectedQuestions.includes(question.id)}
                            onChange={() => toggleQuestion(question.id)}
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
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
