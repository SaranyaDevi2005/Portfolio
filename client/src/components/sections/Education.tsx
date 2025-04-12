export default function Education() {
  return (
    <section id="education" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200"></div>
          
          {/* Education Item 1 */}
          <div className="ml-0 md:ml-8 mb-12 relative">
            <div className="hidden md:block absolute left-[-8px] top-[25px] w-4 h-4 rounded-full bg-primary"></div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <h3 className="text-xl font-semibold">M.Sc. Decision and Computing Sciences</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mt-1">2022 - Present</span>
              </div>
              <h4 className="text-lg text-gray-700 mb-2">Coimbatore Institute of Technology (CIT)</h4>
              <p className="text-gray-600 mb-2">CGPA: 8.88 (Till 5th sem)</p>
              <p className="text-gray-600">
                Focusing on advanced computing concepts, statistical analysis, and machine learning techniques for data-driven decision-making.
              </p>
            </div>
          </div>
          
          {/* Education Item 2 */}
          <div className="ml-0 md:ml-8 relative">
            <div className="hidden md:block absolute left-[-8px] top-[25px] w-4 h-4 rounded-full bg-primary"></div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <h3 className="text-xl font-semibold">12th Grade</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mt-1">2021 - 2022</span>
              </div>
              <h4 className="text-lg text-gray-700 mb-2">St. Joseph Matric Higher Secondary School</h4>
              <p className="text-gray-600 mb-2">Percentage: 87%</p>
              <p className="text-gray-600">
                Completed higher secondary education with strong foundational knowledge in mathematics and science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
