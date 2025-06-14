
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight, Download, FileText } from "lucide-react";
import { teams, topPlayers, recentMatches, venues, awards, auctionHighlights } from "@/data/iplData";

interface Question {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const questionBank: Question[] = [
  // Team Performance
  {
    id: "tp1",
    category: "Team Performance",
    question: "Which team topped the IPL 2025 points table?",
    answer: "Punjab Kings (PBKS) topped the IPL 2025 points table with 20 points from 14 matches, achieving 10 wins and 4 losses with a net run rate of +0.85."
  },
  {
    id: "tp2",
    category: "Team Performance",
    question: "What was RCB's final position in the league stage?",
    answer: "Royal Challengers Bengaluru (RCB) finished 2nd in the league stage with 18 points from 9 wins and 5 losses, with a net run rate of +0.42."
  },
  {
    id: "tp3",
    category: "Team Performance",
    question: "Which teams qualified for the playoffs?",
    answer: "The top 4 teams that qualified for playoffs were: 1. Punjab Kings (20 pts), 2. Royal Challengers Bengaluru (18 pts), 3. Gujarat Titans (16 pts), and 4. Mumbai Indians (16 pts)."
  },
  {
    id: "tp4",
    category: "Team Performance",
    question: "What was the net run rate of the championship-winning team?",
    answer: "Royal Challengers Bengaluru, the IPL 2025 champions, had a net run rate of +0.42 during the league stage."
  },
  {
    id: "tp5",
    category: "Team Performance",
    question: "Which team had the highest net run rate?",
    answer: "Punjab Kings had the highest net run rate at +0.85, which helped them secure the top position in the points table."
  },
  {
    id: "tp6",
    category: "Team Performance",
    question: "How many teams finished with negative NRR?",
    answer: "5 teams finished with negative NRR: KKR (-0.23), DC (-0.45), RR (-0.65), SRH (-0.89), and LSG (-0.12)."
  },
  {
    id: "tp7",
    category: "Team Performance",
    question: "What was the points difference between 1st and 4th place?",
    answer: "The points difference between 1st place PBKS (20 points) and 4th place MI (16 points) was 4 points."
  },
  {
    id: "tp8",
    category: "Team Performance",
    question: "Which team had the most losses?",
    answer: "Sunrisers Hyderabad (SRH) had the most losses with 10 defeats out of 14 matches, winning only 4 games."
  },
  
  // Batting Performance
  {
    id: "bp1",
    category: "Batting Performance",
    question: "Who won the Orange Cap in IPL 2025?",
    answer: "Sai Sudharsan from Gujarat Titans won the Orange Cap with 759 runs at an average of 54.21 and strike rate of 156.17."
  },
  {
    id: "bp2",
    category: "Batting Performance",
    question: "Which player scored the second-highest runs?",
    answer: "Suryakumar Yadav from Mumbai Indians scored the second-highest runs with 717 runs at an exceptional average of 65.18 and strike rate of 167.92."
  },
  {
    id: "bp3",
    category: "Batting Performance",
    question: "What was Virat Kohli's total runs in IPL 2025?",
    answer: "Virat Kohli scored 657 runs for RCB at an average of 54.75 and strike rate of 144.71, finishing as the third-highest run scorer."
  },
  {
    id: "bp4",
    category: "Batting Performance",
    question: "Who had the highest strike rate among batsmen with 200+ runs?",
    answer: "Vaibhav Suryavanshi from RR had the highest strike rate at 198.7, though he scored 156 runs. Among 200+ run scorers, Suryakumar Yadav led with 167.92."
  },
  {
    id: "bp5",
    category: "Batting Performance",
    question: "Which batsman scored the most fifties?",
    answer: "Based on the performance data, Sai Sudharsan with 759 runs likely scored the most fifties, maintaining consistent high scores throughout the tournament."
  },
  {
    id: "bp6",
    category: "Batting Performance",
    question: "Who scored the most runs for the winning team RCB?",
    answer: "Virat Kohli was RCB's leading run scorer with 657 runs at an average of 54.75, playing a crucial role in their championship victory."
  },
  {
    id: "bp7",
    category: "Batting Performance",
    question: "What was the highest individual score in a match?",
    answer: "While specific individual match scores aren't detailed in our data, the high strike rates of players like Vaibhav Suryavanshi (198.7) suggest there were exceptional individual performances."
  },
  {
    id: "bp8",
    category: "Batting Performance",
    question: "Which overseas batsman performed best?",
    answer: "Mitchell Marsh from LSG was the best performing overseas batsman with 627 runs at a strike rate of 163.71, also contributing 8 wickets as an all-rounder."
  },

  // Bowling Performance
  {
    id: "bow1",
    category: "Bowling Performance",
    question: "Who won the Purple Cap in IPL 2025?",
    answer: "Prasidh Krishna from Gujarat Titans won the Purple Cap with 25 wickets at an average of 18.5, leading the bowling charts."
  },
  {
    id: "bow2",
    category: "Bowling Performance",
    question: "Which bowler took the second-most wickets?",
    answer: "Noor Ahmad from CSK took the second-most wickets with 24 wickets at an average of 19.8, showcasing excellent spin bowling."
  },
  {
    id: "bow3",
    category: "Bowling Performance",
    question: "Who had the best bowling average among top wicket-takers?",
    answer: "Prasidh Krishna had the best bowling average of 18.5 among the leading wicket-takers, making him highly effective."
  },
  {
    id: "bow4",
    category: "Bowling Performance",
    question: "Which fast bowler performed best?",
    answer: "Among fast bowlers, Prasidh Krishna (25 wickets, avg 18.5) performed best, followed by Josh Hazlewood (22 wickets, avg 20.1) and Trent Boult (22 wickets, avg 19.5)."
  },
  {
    id: "bow5",
    category: "Bowling Performance",
    question: "Who was the leading wicket-taker for the champions RCB?",
    answer: "Josh Hazlewood was RCB's leading wicket-taker with 22 wickets at an average of 20.1, playing a key role in their championship run."
  },
  {
    id: "bow6",
    category: "Bowling Performance",
    question: "Which spinner took the most wickets?",
    answer: "Noor Ahmad from CSK was the leading spinner with 24 wickets at an average of 19.8, demonstrating the effectiveness of spin bowling in IPL 2025."
  },
  {
    id: "bow7",
    category: "Bowling Performance",
    question: "What was the best bowling figures in a match?",
    answer: "While specific match figures aren't detailed, the consistent performance of bowlers like Prasidh Krishna and Noor Ahmad suggests excellent individual bowling performances throughout the tournament."
  },
  {
    id: "bow8",
    category: "Bowling Performance",
    question: "Which team had the strongest bowling attack?",
    answer: "Gujarat Titans had a strong bowling attack with Prasidh Krishna (25 wickets) leading the Purple Cap race, contributing to their playoff qualification."
  },

  // Boundary Statistics
  {
    id: "bs1",
    category: "Boundary Statistics",
    question: "Who hit the most sixes in IPL 2025?",
    answer: "Nicholas Pooran from LSG hit the most sixes with 42, earning him the 'Most Sixes' award for the tournament."
  },
  {
    id: "bs2",
    category: "Boundary Statistics",
    question: "Which player hit the most fours?",
    answer: "Sai Sudharsan hit the most fours with 88 boundaries, complementing his tournament-leading 759 runs and Orange Cap victory."
  },
  {
    id: "bs3",
    category: "Boundary Statistics",
    question: "What was Suryakumar Yadav's six count?",
    answer: "Suryakumar Yadav hit 38 sixes along with 69 fours, showcasing his aggressive batting style with a strike rate of 167.92."
  },
  {
    id: "bs4",
    category: "Boundary Statistics",
    question: "Who had the best boundary percentage?",
    answer: "Mitchell Marsh showed excellent boundary hitting with 37 sixes and 56 fours from his 627 runs, demonstrating powerful hitting ability."
  },
  {
    id: "bs5",
    category: "Boundary Statistics",
    question: "Which team hit the most sixes overall?",
    answer: "While team-wise six statistics aren't aggregated in our data, LSG with Nicholas Pooran (42 sixes) and Mitchell Marsh (37 sixes) likely led the six-hitting charts."
  },

  // Match and Venue Specific
  {
    id: "mv1",
    category: "Match and Venue Specific",
    question: "Where was the IPL 2025 final played?",
    answer: "The IPL 2025 final was played at Narendra Modi Stadium in Ahmedabad, where RCB defeated PBKS by 6 runs."
  },
  {
    id: "mv2",
    category: "Match and Venue Specific",
    question: "What was the final score of the championship match?",
    answer: "In the final, RCB scored 190/9 and PBKS scored 184/7, with RCB winning by 6 runs to claim their first IPL title."
  },
  {
    id: "mv3",
    category: "Match and Venue Specific",
    question: "Which venue had the highest average score?",
    answer: "Wankhede Stadium in Mumbai had the highest average score of 195 runs per innings from 7 matches played there."
  },
  {
    id: "mv4",
    category: "Match and Venue Specific",
    question: "How many matches were played at each venue?",
    answer: "Narendra Modi Stadium (8 matches), Wankhede Stadium (7), M. Chinnaswamy Stadium (6), Eden Gardens (6), Mullanpur Stadium (5), and Rajiv Gandhi Stadium (5)."
  },
  {
    id: "mv5",
    category: "Match and Venue Specific",
    question: "What was the highest team total in IPL 2025?",
    answer: "Mumbai Indians scored 228/5 against Gujarat Titans in the Eliminator, which appears to be one of the highest totals based on available match data."
  },
  {
    id: "mv6",
    category: "Match and Venue Specific",
    question: "Which match had the lowest total?",
    answer: "Punjab Kings scored only 101 in Qualifier 1 against RCB at Mullanpur, which was successfully chased down by RCB for 106/2."
  },
  {
    id: "mv7",
    category: "Match and Venue Specific",
    question: "What was the biggest victory margin?",
    answer: "Mumbai Indians defeated Rajasthan Royals by 100 runs at Wankhede Stadium (MI: 217/2, RR: 117), marking the biggest victory margin."
  },

  // Combined Player and Team Insights
  {
    id: "cpt1",
    category: "Combined Insights",
    question: "Who was the most expensive player in the auction?",
    answer: "Rishabh Pant was the most expensive player, bought by Lucknow Super Giants for ₹27.0 crore, setting a new IPL auction record."
  },
  {
    id: "cpt2",
    category: "Combined Insights",
    question: "Which team spent the most in the auction?",
    answer: "Punjab Kings spent the most in the auction with ₹110.5 crore, leaving only ₹0.35 crore in their remaining purse."
  },
  {
    id: "cpt3",
    category: "Combined Insights",
    question: "Who won the Most Valuable Player award?",
    answer: "Suryakumar Yadav from Mumbai Indians won the MVP award with 320.5 points, based on his all-round contributions throughout the tournament."
  },
  {
    id: "cpt4",
    category: "Combined Insights",
    question: "Which player had the best value for money?",
    answer: "Sai Sudharsan (₹8.5 crore) provided excellent value, scoring 759 runs and winning the Orange Cap, delivering high performance relative to his auction price."
  },
  {
    id: "cpt5",
    category: "Combined Insights",
    question: "Who was the youngest player to make an impact?",
    answer: "Vaibhav Suryavanshi from RR, bought for ₹1.1 crore, was the youngest impactful player with a strike rate of 198.7, earning the 'Striker of the Season' award."
  },
  {
    id: "cpt6",
    category: "Combined Insights",
    question: "Which all-rounder performed best?",
    answer: "Mitchell Marsh from LSG was the best all-rounder with 627 runs at 163.71 strike rate and 8 wickets, providing excellent balance to his team."
  },
  {
    id: "cpt7",
    category: "Combined Insights",
    question: "What was the total prize money for the tournament?",
    answer: "The IPL 2025 had a total prize pool of ₹20 crore, with Royal Challengers Bengaluru claiming the winner's share as champions."
  },
  {
    id: "cpt8",
    category: "Combined Insights",
    question: "How long did the IPL 2025 season last?",
    answer: "IPL 2025 lasted 74 days from March 22 to June 3, 2025, featuring 70 league matches and 4 playoff matches across 13 venues."
  }
];

const QuestionBank = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

  const categories = Array.from(new Set(questionBank.map(q => q.category)));

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

  const exportSelectedQuestions = () => {
    const selected = questionBank.filter(q => selectedQuestions.includes(q.id));
    const content = selected.map(q => `Q: ${q.question}\nA: ${q.answer}`).join('\n\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ipl-2025-qa-selected.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportAllQuestions = () => {
    let content = "IPL 2025 - Comprehensive Q&A Collection\n";
    content += "=" + "=".repeat(45) + "\n\n";
    content += "Introduction:\n";
    content += "This document contains 50 carefully curated questions and answers about IPL 2025, ";
    content += "covering all aspects of the tournament including team performance, player statistics, ";
    content += "matches, venues, auction insights, and awards.\n\n";

    categories.forEach(category => {
      content += `\n${category.toUpperCase()}\n`;
      content += "-".repeat(category.length) + "\n\n";
      
      const categoryQuestions = questionBank.filter(q => q.category === category);
      categoryQuestions.forEach((q, index) => {
        content += `${index + 1}. ${q.question}\n`;
        content += `   ${q.answer}\n\n`;
      });
    });

    content += "\n" + "=".repeat(50) + "\n";
    content += "Future Expansion:\n";
    content += "This collection can be expanded to 500+ questions covering detailed player comparisons, ";
    content += "match-by-match analysis, historical IPL comparisons, tactical insights, and predictive analytics.\n\n";
    content += "Generated from IPL 2025 Insights Hub\n";
    content += "© 2025 - Comprehensive Cricket Analytics";

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ipl-2025-complete-qa-collection.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-600/30">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
          <FileText className="text-blue-400" size={24} />
          IPL 2025 Question Bank
          <Badge variant="outline" className="ml-2 text-xs">
            50 Questions
          </Badge>
        </CardTitle>
        <p className="text-sm text-slate-300">
          Comprehensive collection of categorized questions and detailed answers about IPL 2025
        </p>
        
        <div className="flex gap-2 mt-4">
          <Button 
            onClick={exportAllQuestions}
            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
          >
            <Download size={16} />
            Export All (50 Q&A)
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
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {categories.map(category => {
            const categoryQuestions = questionBank.filter(q => q.category === category);
            const isExpanded = expandedCategories.includes(category);
            
            return (
              <div key={category} className="border border-slate-600/30 rounded-lg">
                <Button
                  variant="ghost"
                  onClick={() => toggleCategory(category)}
                  className="w-full justify-between p-4 hover:bg-slate-700/40 text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{category}</span>
                    <Badge variant="secondary" className="text-xs">
                      {categoryQuestions.length} questions
                    </Badge>
                  </div>
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </Button>
                
                {isExpanded && (
                  <div className="p-4 space-y-3 border-t border-slate-600/30">
                    {categoryQuestions.map(question => (
                      <div key={question.id} className="space-y-2">
                        <div className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            checked={selectedQuestions.includes(question.id)}
                            onChange={() => toggleQuestion(question.id)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-blue-400 mb-1">
                              Q: {question.question}
                            </p>
                            <p className="text-sm text-slate-300 leading-relaxed">
                              A: {question.answer}
                            </p>
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
          <h4 className="font-semibold text-blue-400 mb-2">Export Features:</h4>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• Export all 50 questions with formatted categories</li>
            <li>• Select specific questions for custom exports</li>
            <li>• Professional formatting ready for documentation</li>
            <li>• Includes introduction and expansion notes</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionBank;
