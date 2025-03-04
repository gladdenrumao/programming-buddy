"use client";
import { useState } from "react";

export default function Sidebar({ onSelectLanguage }) {
  const [selectedLang, setSelectedLang] = useState("python");

  const handleLanguageSelect = (lang) => {
    setSelectedLang(lang);
    onSelectLanguage(lang);
  };

  return (
    <aside className="w-1/5 h-screen bg-gray-200 p-4 border-r">
      <h2 className="text-xl font-bold mb-4">Languages</h2>
      <div className="space-y-4">
        <button
          className={`w-full text-left px-4 py-2 rounded-lg ${
            selectedLang === "python" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => handleLanguageSelect("python")}
        >
          Python
        </button>
        <button
          className={`w-full text-left px-4 py-2 rounded-lg ${
            selectedLang === "javascript" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => handleLanguageSelect("javascript")}
        >
          JavaScript
        </button>
      </div>
    </aside>
  );
}
