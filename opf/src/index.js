import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App";

import AdminPage from "./pages/AdminExperience/AdminPage";
import AdminDashboardPage from "./pages/AdminExperience/DashboardPage/DashboardPage";
import AdminMaintenanceRequestsPage from "./pages/AdminExperience/MaintenanceRequestsPage/MaintenanceRequestsPage";
import AdminTicketsView from "./pages/AdminExperience/MaintenanceRequestsPage/views/TicketsView/TicketsView";
import AdminCreateTicketView from "./pages/AdminExperience/MaintenanceRequestsPage/views/CreateTicketView/CreateTicketView";
import AdminTicketView from "./pages/AdminExperience/MaintenanceRequestsPage/views/TicketView/TicketView";
import AdminFeedbackPage from "./pages/AdminExperience/FeedbackPage/FeedbackPage";

import StudentPage from "./pages/StudentExperience/StudentPage";
import StudentDashboardPage from "./pages/StudentExperience/DashboardPage/DashboardPage";
import StudentMaintenanceRequestsPage from "./pages/StudentExperience/MaintenanceRequestsPage/MaintenanceRequestsPage";
import StudentTicketsView from "./pages/StudentExperience/MaintenanceRequestsPage/views/TicketsView/TicketsView";
import StudentCreateTicketView from "./pages/StudentExperience/MaintenanceRequestsPage/views/CreateTicketView/CreateTicketView";
import StudentTicketView from "./pages/StudentExperience/MaintenanceRequestsPage/views/TicketView/TicketView";
import StudentFeedbackPage from "./pages/StudentExperience/FeedbackPage/FeedbackPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="admin" element={<AdminPage />}>
            <Route index element={<AdminDashboardPage />} />
            <Route
              path="maintenance_requests"
              element={<AdminMaintenanceRequestsPage />}
            >
              <Route index element={<AdminTicketsView />} />
              <Route path="create" element={<AdminCreateTicketView />} />
              <Route path=":ticket" element={<AdminTicketView />} />
            </Route>
            <Route path="feedback" element={<AdminFeedbackPage />} />
          </Route>
          <Route path="student" element={<StudentPage />}>
            <Route index element={<StudentDashboardPage />} />
            <Route
              path="maintenance_requests"
              element={<StudentMaintenanceRequestsPage />}
            >
              <Route index element={<StudentTicketsView />} />
              <Route path="create" element={<StudentCreateTicketView />} />
              <Route path=":ticket" element={<StudentTicketView />} />
            </Route>
            <Route path="feedback" element={<StudentFeedbackPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
