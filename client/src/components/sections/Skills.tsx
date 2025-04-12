export default function Skills() {
  // Skill data
  const programmingLanguages = [
    { name: "Python", percentage: 90 },
    { name: "R", percentage: 85 },
    { name: "Java", percentage: 75 },
    { name: "C", percentage: 80 },
    { name: "HTML/CSS/JavaScript", percentage: 85 }
  ];
  
  const frameworks = [
    { name: "React", percentage: 80 },
    { name: "Angular", percentage: 75 },
    { name: "Django/Flask", percentage: 85 },
    { name: "Node.js/Express.js", percentage: 80 },
    { name: "MySQL/MongoDB", percentage: 85 }
  ];
  
  const dataScience = [
    { name: "Pandas/NumPy", percentage: 90 },
    { name: "Scikit-learn", percentage: 85 },
    { name: "Plotly", percentage: 80 },
    { name: "NLTK/TextBlob", percentage: 75 }
  ];
  
  const softwareTools = [
    { name: "VS Code", percentage: 90 },
    { name: "R Studio", percentage: 85 },
    { name: "MS Excel", percentage: 80 },
    { name: "Power BI", percentage: 75 }
  ];
  
  const softSkills = [
    "Adaptability", "Teamwork", "Creativity", "Problem Solving", 
    "Communication", "Critical Thinking"
  ];
  
  // Skill bar component
  const SkillBar = ({ name, percentage }: { name: string, percentage: number }) => (
    <div>
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="relative h-[6px] w-full bg-gray-200 rounded-sm">
        <div 
          className="absolute top-0 left-0 h-full bg-primary rounded-sm"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
  
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            
            <div className="mb-10">
              <h4 className="text-lg font-medium mb-6">Programming Languages</h4>
              <div className="space-y-5">
                {programmingLanguages.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h4 className="text-lg font-medium mb-6">Frameworks & Tools</h4>
              <div className="space-y-5">
                {frameworks.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Data Science Skills & Soft Skills */}
          <div>
            <div className="mb-10">
              <h4 className="text-lg font-medium mb-6">Data Science Libraries</h4>
              <div className="space-y-5">
                {dataScience.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h4 className="text-lg font-medium mb-6">Software & Tools</h4>
              <div className="space-y-5">
                {softwareTools.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6">Soft Skills</h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-primary text-white px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
