import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignInView from "./pages/LoginPage/views/SignInView/SignInView";
import ResetPasswordView from "./pages/LoginPage/views/ResetPasswordView/ResetPasswordView";
import CreateAccountView from "./pages/LoginPage/views/CreateAccountView/CreateAccountView";
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
  AdminAllTicketsView,
  StudentAllTicketsView,
} from "./pages/MaintenanceRequestsPage/views/AllTicketsView/AllTicketsView";

import { AdminFormsPage } from "./pages/FormPage/FormPage";
import { AdminCreateAnnouncementView } from "./pages/FormPage/views/AnnouncementView/AnnouncementView";
import { AdminCreateFAQView } from "./pages/FormPage/views/FAQView/FAQView";

import { AdminLandingView } from "./pages/FormPage/views/LandingView/LandingView";

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
import { AppointmentView } from "./pages/FormPage/views/AppointmentView/AppointmentView";
import "./index.css";
import AppointmentsPage from "./pages/AppointmentsPage/AppointmentsPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import AllAppointmentsView from "./pages/AppointmentsPage/views/AllAppointmentsView/AllAppointmentsView";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<LoginPage />}>
            <Route index element={<SignInView />} />
            <Route path="create" element={<CreateUserView />} />
            <Route path="reset" element={<ResetPasswordView />} />
          </Route>
          <Route path="student" element={<StudentPage />}>
            <Route index element={<StudentDashboardPage />} />
            <Route
              path="maintenance_requests"
              element={<StudentMaintenanceRequestsPage />}
            >
              <Route index element={<StudentAllTicketsView />} />
              <Route path="create" element={<StudentCreateTicketView />} />
              <Route path=":ticket" element={<StudentTicketView />} />
            </Route>
            <Route
              path="frequently_asked_questions"
              element={<StudentFAQPage />}
            />
            <Route path="appointments" element={<AppointmentsPage />}>
              <Route index element={<AllAppointmentsView />} />
              <Route path=":appointment" element={<AllAppointmentsView />} />
            </Route>
            <Route path="account" element={<AccountPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
