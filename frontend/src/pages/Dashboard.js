import React, { useState } from 'react';

import DropdownModal from '../partials/header/Dropdown';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';


function Dashboard() {


  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              <DashboardAvatars />


              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}

                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <span className="hidden xs:block ml-2">Add View</span>
                  <DropdownModal />
                </button>


              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Bar chart (Monthly Sales) */}

              <DashboardCard04 />
              {/* Line chart (Company Share Price) */}
              <DashboardCard05 />
              {/* Doughnut chart (Customer Satisfaction) */}
              <DashboardCard06 />
              {/* Stacked bar chart (Capex vs Dividends) */}
              <DashboardCard09 />

            </div>
            <DashboardCard01 />

          </div>
        </main>



      </div>
    </div>
  );
}

export default Dashboard;