const modulesData = {
    python: ["Python Basics", "Control Flow Statements", "Loops"],
    javascript: ["JS Basics", "Functions", "DOM Manipulation"],
  };
  
  export default function Modules({ language }) {
    return (
      <section className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-6">
          {language === "python" ? "Python Modules" : "JavaScript Modules"}
        </h2>
        <div className="space-y-4">
          {modulesData[language].map((module, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg border hover:bg-blue-500 hover:text-white transition">
              <h3 className="text-xl font-semibold">{module}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  