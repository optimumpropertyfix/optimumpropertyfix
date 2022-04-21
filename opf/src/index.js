import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignInView from "./pages/LoginPage/views/SignInView/SignInView";
import ResetPasswordView from "./pages/LoginPage/views/ResetPasswordView/ResetPasswordView";
import CreateUserView from "./pages/LoginPage/views/CreateUserView/CreateUserView";
import StudentPage from "./pages/StudentPage/StudentPage";

import { StudentDashboardPage } from "./pages/DashboardPage/DashboardPage";
import { StudentMaintenanceRequestsPage } from "./pages/MaintenanceRequestsPage/MaintenanceRequestsPage";
import { StudentAllTicketsView } from "./pages/MaintenanceRequestsPage/views/AllTicketsView/AllTicketsView";

import { StudentCreateTicketView } from "./pages/MaintenanceRequestsPage/views/CreateTicketView/CreateTicketView";
import { StudentTicketView } from "./pages/MaintenanceRequestsPage/views/TicketView/TicketView";
import { StudentFAQPage } from "./pages/FrequentAskedQuestions/FrequentlyAskedQuestions";
import "./index.css";
import AppointmentsPage from "./pages/AppointmentsPage/AppointmentsPage";
import StudentAccountPage from "./pages/StudentAccountPage/StudentAccountPage";
import AllAppointmentsView from "./pages/AppointmentsPage/views/AllAppointmentsView/AllAppointmentsView";
import AppointmentView from "./pages/AppointmentsPage/views/AppointmentView/AppointmentView";

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
              <Route path=":ticket_id" element={<StudentTicketView />} />
            </Route>
            <Route
              path="frequently_asked_questions"
              element={<StudentFAQPage />}
            />
            <Route path="appointments" element={<AppointmentsPage />}>
              <Route index element={<AllAppointmentsView />} />
              <Route path=":appointment_id" element={<AppointmentView />} />
            </Route>
            <Route path="account" element={<StudentAccountPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
