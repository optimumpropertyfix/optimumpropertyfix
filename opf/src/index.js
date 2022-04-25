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
import { StudentAppointmentsPage } from "./pages/AppointmentsPage/AppointmentsPage";
import StudentAccountPage from "./pages/StudentAccountPage/StudentAccountPage";
import { StudentAllAppointmentsView } from "./pages/AppointmentsPage/views/AllAppointmentsView/AllAppointmentsView";
import { StudentAppointmentView } from "./pages/AppointmentsPage/views/AppointmentView/AppointmentView";
import AdminPage from "./pages/AdminPage/AdminPage";
import { AdminDashboardPage } from "./pages/DashboardPage/DashboardPage";

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
            <Route path="appointments" element={<StudentAppointmentsPage />}>
              <Route index element={<StudentAllAppointmentsView />} />
              <Route path=":appointment_id" element={<StudentAppointmentView />} />
            </Route>
            <Route path="account" element={<StudentAccountPage />} />
          </Route>
          </Route>
          <Route path="admin" element={<AdminPage />}>
            <Route index element={<AdminDashboardPage />} />
            <Route
              path="maintenance_requests"
              element={<AdminMaintenanceRequestsPage />}
            >
              <Route index element={<AdminAllTicketsView />} />
              <Route path="create" element={<AdminCreateTicketView />} />
              <Route path=":ticket_id" element={<AdminTicketView />} />
            </Route>
            <Route path="appointments" element={<AdminAppointmentsForm />}>
              <Route index element={<AdminAllAppointmentsView />} />
              <Route path="create" element={<AdminAppointmentView />} />
              <Route path=":appointment_id" element={<AdminAppointmentView />} />
            </Route>
            <Route path="account" element={<AdminAccountPage />} />
            <Route path="users" element={<AdminUsersPage />} />
            <Route path="forms" element={<AdminFormsPage />} >
              <Route index element={<AdminFormsOptionPage />}/>
              <Route path="announcements" element={<AdminAnnouncementsForm />}>
                <Route path=":announcement_id" element={<AdminAnnouncementView />} />
                <Route path="create" element={<AdminCreateAnnouncementView />} />
                <Route index element={<AdminAllAnnouncementsView />} />
              </Route>
              <Route path="frequently_asked_questions" element={<AdminFAQForm />}> 
                <Route path=":frequently_asked_questions_id" element={<AdminCreateFAQView />} />
                <Route path="create" element={<AdminCreateFAQView />} />
                <Route index element={<AdminAllFAQView />} />
              </Route>
              <Route path="dormitories" element={<AdminDormitoriesForm />}>
                <Route path=":dormitory_id" element={<AppointmentView />}>
                  <Route path=":unit_id" />
                  <Route path="create" />
                  <Route index />
                </Route>
              <Route path="create" element={<AppointmentView />} />
              <Route index element={<AppointmentView />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
