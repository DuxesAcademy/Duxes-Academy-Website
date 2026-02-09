import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-3">
          <NavLink to="/admin" end className={({ isActive }) =>
            isActive ? 'font-semibold text-blue-600' : 'text-gray-800'
          }>
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className={({ isActive }) =>
            isActive ? 'font-semibold text-blue-600' : 'text-gray-800'
          }>
            Manage Users
          </NavLink>
          <NavLink to="/admin/courses" className={({ isActive }) =>
            isActive ? 'font-semibold text-blue-600' : 'text-gray-800'
          }>
            Manage Courses
          </NavLink>
          <NavLink to="/admin/content" className={({ isActive }) =>
            isActive ? 'font-semibold text-blue-600' : 'text-gray-800'
          }>
            Manage Content
          </NavLink>
          <NavLink to="/admin/updates" className={({ isActive }) =>
            isActive ? 'font-semibold text-blue-600' : 'text-gray-800'
          }>
            Platform Updates
          </NavLink>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
