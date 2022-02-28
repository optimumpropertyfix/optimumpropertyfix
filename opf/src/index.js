import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignInView from "./pages/LoginPage/views/SignInView/SignInView";
import CreateAccountView from "./pages/LoginPage/views/CreateAccountView/CreateAccountView";

import AdminPage from "./pages/AdminPage/AdminPage";
import StudentPage from "./pages/StudentPage/StudentPage";

import {
  AdminDashboardPage,
  StudentDashboardPage,
} from "./pages/DashboardPage/DashboardPage";
import {
  AdminMaintenanceRequestsPage,
  StudentMaintenanceRequestsPage,
} from "./pages/MaintenanceRequestsPage/MaintenanceRequestsPage";
import {
  AdminTicketsView,
  StudentTicketsView,
} from "./pages/MaintenanceRequestsPage/views/TicketsView/TicketsView";
import {
  AdminCreateTicketView,
  StudentCreateTicketView,
} from "./pages/MaintenanceRequestsPage/views/CreateTicketView/CreateTicketView";
import {
  AdminTicketView,
  StudentTicketView,
} from "./pages/MaintenanceRequestsPage/views/TicketView/TicketView";
import {
  AdminFeedbackPage,
  StudentFeedbackPage,
} from "./pages/FeedbackPage/FeedbackPage";
import {
  AdminFAQPage,
  StudentFAQPage,
} from "./pages/FrequentAskedQuestions/FrequentlyAskedQuestions";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<LoginPage />}>
            <Route index element={<SignInView />} />
            <Route path="create" element={<CreateAccountView />} />
          </Route>
          <Route path="admin" element={<AdminPage />}>
            <Route index element={<AdminDashboardPage />} />
            <Route
              path="maintenance_requests"
              element={<AdminMaintenanceRequestsPage />} >
              <Route index element={<AdminTicketsView />} />
              <Route path="create" element={<AdminCreateTicketView />} />
              <Route path=":ticket" element={<AdminTicketView />} />
            </Route>
            <Route path="feedback" element={<AdminFeedbackPage />} />
            <Route path="frequently_asked_questions" element={<AdminFAQPage />} />
          </Route>
          <Route path="student" element={<StudentPage />} >
            <Route index element={<StudentDashboardPage />} />
            <Route
              path="maintenance_requests"
              element={<StudentMaintenanceRequestsPage />} >
              <Route index element={<StudentTicketsView />} />
              <Route path="create" element={<StudentCreateTicketView />} />
              <Route path=":ticket" element={<StudentTicketView />} />
            </Route>
            <Route path="feedback" element={<StudentFeedbackPage />} />
            <Route path="frequently_asked_questions" element={<StudentFAQPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
