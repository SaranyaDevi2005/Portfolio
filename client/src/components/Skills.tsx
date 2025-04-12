import SkillBar from './SkillBar';

export default function Skills() {
  const programmingSkills = [
    { name: "Python", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "R", percentage: 80 },
    { name: "Java", percentage: 75 },
    { name: "C", percentage: 80 },
    { name: "HTML/CSS", percentage: 90 }
  ];

  const frameworksTools = [
    "React", "Angular", "Django", "Flask", "Node.js", "Express.js",
    "MySQL", "Oracle", "MongoDB", "Pandas", "NumPy", "Scikit-learn",
    "Plotly", "NLTK", "TextBlob", "VS Code", "R Studio", "MS Excel", "Power BI"
  ];

  const softSkills = [
    { name: "Adaptability", icon: "fas fa-sync-alt" },
    { name: "Teamwork", icon: "fas fa-users" },
    { name: "Creativity", icon: "fas fa-lightbulb" },
    { name: "Problem Solving", icon: "fas fa-puzzle-piece" }
  ];

  const certifications = [
    {
      name: "Lean Six Sigma Yellow Belt",
      description: "Skilled in process improvement and waste reduction"
    },
    {
      name: "Maiyyam – Data Analysis",
      description: "Power BI and Tableau"
    },
    {
      name: "Maiyyam – UI/UX",
      description: "Experienced in creating user-friendly designs"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-800">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
          <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
            Areas of Interest: Statistical Analysis | Machine Learning | Predictive Analysis | NLP | MySQL | PowerBI | Full Stack Web Development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-secondary-800 mb-6">Technical Skills</h3>
            
            {/* Programming Languages */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-secondary-700 mb-4">Programming Languages</h4>
              <div className="space-y-4">
                {programmingSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
                ))}
              </div>
            </div>
            
            {/* Frameworks & Tools */}
            <div>
              <h4 className="text-lg font-semibold text-secondary-700 mb-4">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {frameworksTools.map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Soft Skills & Certifications */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-secondary-800 mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${skill.icon} text-primary-500`}></i>
                    </div>
                    <span className="ml-3 text-secondary-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-secondary-800 mb-6">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex">
                    <i className="fas fa-certificate text-primary-500 mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium text-secondary-800">{cert.name}</p>
                      <p className="text-sm text-secondary-600">{cert.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
