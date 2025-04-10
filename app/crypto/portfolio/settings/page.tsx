"use client";

import { useState } from "react";

const SettingsPage = () => {
  // Declare and initialize the variables with meaningful default values
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>("English");

  // Placeholder logic for handling changes
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);
  const changeLanguage = (newLanguage: string) => setLanguage(newLanguage);

  return (
    <div className={`p-6 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Dark Mode Toggle */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Dark Mode</label>
        <button
          onClick={toggleDarkMode}
          className="py-2 px-4 border rounded-md bg-blue-500 text-white"
        >
          {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
        </button>
      </div>

      {/* Notifications Toggle */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Enable Notifications</label>
        <button
          onClick={toggleNotifications}
          className="py-2 px-4 border rounded-md bg-blue-500 text-white"
        >
          {notificationsEnabled ? "Disable Notifications" : "Enable Notifications"}
        </button>
      </div>

      {/* Language Selector */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Language</label>
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="py-2 px-4 border rounded-md"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
      </div>

      <div className="text-lg">
        <p>Current Settings:</p>
        <ul className="list-disc ml-6">
          <li>Dark Mode: {isDarkMode ? "Enabled" : "Disabled"}</li>
          <li>Notifications: {notificationsEnabled ? "Enabled" : "Disabled"}</li>
          <li>Language: {language}</li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsPage;
