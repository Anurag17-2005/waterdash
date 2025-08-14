import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    emailAlerts: true,
    smsNotifications: false,
    tdsLevel: 400,
    phMin: 6.5,
    phMax: 8.5
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle saving settings
    console.log('Settings saved:', settings);
  };

  const handleChange = (name, value) => {
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Settings</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 max-w-2xl">
        <div className="space-y-8">
          {/* Notification Settings Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Notification Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-700">Email Alerts</span>
                  <p className="text-sm text-gray-500 mt-1">Receive water quality alerts via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={settings.emailAlerts}
                    onChange={(e) => handleChange('emailAlerts', e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-700">SMS Notifications</span>
                  <p className="text-sm text-gray-500 mt-1">Get instant alerts on your phone</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={settings.smsNotifications}
                    onChange={(e) => handleChange('smsNotifications', e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Alert Thresholds Section */}
          <div className="border-t border-gray-100 pt-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Alert Thresholds
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700">TDS Warning Level (ppm)</label>
                <input 
                  type="number" 
                  className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white" 
                  value={settings.tdsLevel}
                  onChange={(e) => handleChange('tdsLevel', Number(e.target.value))}
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700">pH Warning Range</label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <input 
                      type="number" 
                      step="0.1"
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white" 
                      value={settings.phMin}
                      onChange={(e) => handleChange('phMin', Number(e.target.value))}
                    />
                    <span className="text-sm text-gray-500 mt-1">Minimum pH</span>
                  </div>
                  <div>
                    <input 
                      type="number"
                      step="0.1"
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white" 
                      value={settings.phMax}
                      onChange={(e) => handleChange('phMax', Number(e.target.value))}
                    />
                    <span className="text-sm text-gray-500 mt-1">Maximum pH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6">
            <button 
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;