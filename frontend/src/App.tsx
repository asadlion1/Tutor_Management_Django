import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Students } from './pages/Students';
import { Tutors } from './pages/Tutors';
import { Sessions } from './pages/Sessions';
import { Payments } from './pages/Payments';
// Placeholder components for routes not yet implemented
const Placeholder = ({
  title
}: {
  title: string;
}) => <div className="p-8 text-center">
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
      {title}
    </h2>
    <p className="text-slate-500">This module is coming soon.</p>
  </div>;
function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/attendance" element={<Placeholder title="Attendance" />} />
          <Route path="/reports" element={<Placeholder title="Reports" />} />
          <Route path="/settings" element={<Placeholder title="Settings" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>;
}
export { App };