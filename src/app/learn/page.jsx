"use client";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Modules from "../../components/Modules";

export default function Learn() {
  const [selectedLanguage, setSelectedLanguage] = useState("python");

  return (
    <main className="flex h-screen">
      {/* Sidebar */}
      <Sidebar onSelectLanguage={setSelectedLanguage} />
      
      {/* Main Content Area */}
      <Modules language={selectedLanguage} />
    </main>
  );
}
