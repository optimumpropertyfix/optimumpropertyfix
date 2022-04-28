import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Base of OPF Application
import App from "./App";
import "./index.css";

// Login Functionality of OPF
import LoginPage from "./pages/LoginPage/LoginPage";
import SignInView from "./pages/LoginPage/views/SignInView/SignInView";
import ResetPasswordView from "./pages/LoginPage/views/ResetPasswordView/ResetPasswordView";
import CreateUserView from "./pages/LoginPage/views/CreateUserView/CreateUserView";

// Base of the Student Experience
import StudentPage from "./pages/StudentPage/StudentPage";
// Student Dashboard Functionality of OPF
import { StudentDashboardPage } from "./pages/DashboardPage/DashboardPage";
// Student Ticket Functionality of OPF
import { StudentTicketView } from "./pages/MaintenanceRequestsPage/views/TicketView/TicketView";
import { StudentMaintenanceRequestsPage } from "./pages/MaintenanceRequestsPage/MaintenanceRequestsPage";
import { StudentAllTicketsView } from "./pages/MaintenanceRequestsPage/views/AllTicketsView/AllTicketsView";
import { StudentCreateTicketView } from "./pages/MaintenanceRequestsPage/views/CreateTicketView/CreateTicketView";
// Student Appointments Functionality of OPF
import { StudentAppointmentsPage } from "./pages/AppointmentsPage/AppointmentsPage";
import { StudentAllAppointmentsView } from "./pages/AppointmentsPage/views/AllAppointmentsView/AllAppointmentsView";
import { StudentAppointmentView } from "./pages/AppointmentsPage/views/AppointmentView/AppointmentView";
// Student Account Management Functionality of OPF
import StudentAccountPage from "./pages/StudentAccountPage/StudentAccountPage";
// Student FAQ Functionality of OPF
import { StudentFAQPage } from "./pages/FrequentAskedQuestions/FrequentlyAskedQuestions";

// Base of the Admin Experience
import AdminPage from "./pages/AdminPage/AdminPage";
// Admin Dashboard Functionality of OPF
import { AdminDashboardPage } from "./pages/DashboardPage/DashboardPage";
// Admin Ticket Functionality of OPF
import { AdminTicketView } from "./pages/MaintenanceRequestsPage/views/TicketView/TicketView";
import { AdminMaintenanceRequestsPage } from "./pages/MaintenanceRequestsPage/MaintenanceRequestsPage";
import { AdminAllTicketsView } from "./pages/MaintenanceRequestsPage/views/AllTicketsView/AllTicketsView";
import { AdminCreateTicketView } from "./pages/MaintenanceRequestsPage/views/CreateTicketView/CreateTicketView";
// Admin Appointments Functionality of OPF
import { AdminAppointmentsPage } from "./pages/AppointmentsPage/AppointmentsPage";
import { AdminAllAppointmentsView } from "./pages/AppointmentsPage/views/AllAppointmentsView/AllAppointmentsView";
import { AdminAppointmentView } from "./pages/AppointmentsPage/views/AppointmentView/AppointmentView";
// Admin Account Management Functionality of OPF
import AdminAccountPage from "./pages/AdminAccountPage/AdminAccountPage";
// Admin FAQ Functionality of OPF
import { AdminFAQPage } from "./pages/FrequentAskedQuestions/FrequentlyAskedQuestions";
// Admin Users Management Functionality of OPF
import { AdminUsersPage } from "./pages/AdminUsersPage/AdminUsersPage";
import { AdminViewAllUsers } from "./pages/AdminUsersPage/views/AdminAllUsers/AdminViewAllUsers";
import { AdminCreateAdminUser } from "./pages/AdminUsersPage/views/AdminCreateAdminUser/AdminCreateAdminUser";
import { AdminViewUser } from "./pages/AdminUsersPage/views/AdminViewUser/AdminViewUser";
// Admin Forms Functionality of OPF
import { AdminFormsPage } from "./pages/AdminFormsPage/AdminFormsPage";
import { AdminFormsOptionsPage } from "./pages/AdminFormsPage/forms/AdminFormsOptionsPage";
// Admin Forms Functionality of OPF - Announcements Form
import { AdminAnnouncementsForm } from "./pages/AdminFormsPage/forms/AdminAnnouncementsForm/AdminAnnouncementsForm";
import { AdminAnnouncementView } from "./pages/AdminFormsPage/forms/AdminAnnouncementsForm/views/AdminAnnouncementView/AdminAnnouncementView";
import { AdminCreateAnnouncementView } from "./pages/AdminFormsPage/forms/AdminAnnouncementsForm/views/AdminCreateAnnouncementView/AdminCreateAnnouncementView";
import { AdminAllAnnouncementsView } from "./pages/AdminFormsPage/forms/AdminAnnouncementsForm/views/AdminAllAnnouncementsView/AdminAllAnnouncementsView";
// Admin Forms Functionality of OPF - FAQ Form
import { AdminFAQForm } from "./pages/AdminFormsPage/forms/AdminFAQForm/AdminFAQForm";
import { AdminCreateFAQView } from "./pages/AdminFormsPage/forms/AdminFAQForm/views/AdminCreateFAQView/AdminCreateFAQView";
import { AdminViewAllFAQView } from "./pages/AdminFormsPage/forms/AdminFAQForm/views/AdminViewAllFAQView/AdminViewAllFAQView";
import { AdminViewFAQView } from "./pages/AdminFormsPage/forms/AdminFAQForm/views/AdminViewFAQView/AdminViewFAQView";
// Admin Forms Functionality of OPF - Dormitories Form
import { AdminDormitoriesForm } from "./pages/AdminFormsPage/forms/AdminDormitoriesForm/AdminDormitoriesForm";
import { AdminViewDormitoryView } from "./pages/AdminFormsPage/forms/AdminDormitoriesForm/views/AdminViewDormitoryView/AdminViewDormitoryView";
import { AdminCreateDormitoryView } from "./pages/AdminFormsPage/forms/AdminDormitoriesForm/views/AdminCreateDormitoryView/AdminCreateDormitoryView";
import { AdminViewAllDormitoriesView } from "./pages/AdminFormsPage/forms/AdminDormitoriesForm/views/AdminViewAllDormitoriesView/AdminViewAllDormitoriesView";
// Admin Forms Functionality of OPF - Units Form
import { AdminUnitView } from "./pages/AdminFormsPage/forms/AdminUnitsForm/views/AdminUnitView/AdminUnitView";
import { AdminCreateUnitView } from "./pages/AdminFormsPage/forms/AdminUnitsForm/views/AdminCreateUnitView/AdminCreateUnitView";
import { AdminViewAllUnitsView } from "./pages/AdminFormsPage/forms/AdminUnitsForm/views/AdminViewAllUnitsView/AdminViewAllUnitsView";

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
              <Route
                path=":appointment_id"
                element={<StudentAppointmentView />}
              />
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
          <Route path="appointments" element={<AdminAppointmentsPage />}>
            <Route index element={<AdminAllAppointmentsView />} />
            <Route path="create" element={<AdminAppointmentView />} />
            <Route path=":appointment_id" element={<AdminAppointmentView />} />
          </Route>
          <Route path="account" element={<AdminAccountPage />} />
          <Route path="users" element={<AdminUsersPage />}>
            <Route index element={<AdminViewAllUsers />} />
            <Route path="create_admin" element={<AdminCreateAdminUser />} />
            <Route path=":user_id" element={<AdminViewUser />} />
          </Route>
          <Route path="forms" element={<AdminFormsPage />}>
            <Route index element={<AdminFormsOptionsPage />} />
            <Route path="announcements" element={<AdminAnnouncementsForm />}>
              <Route
                path=":announcement_id"
                element={<AdminAnnouncementView />}
              />
              <Route path="create" element={<AdminCreateAnnouncementView />} />
              <Route index element={<AdminAllAnnouncementsView />} />
            </Route>
            <Route path="frequently_asked_questions" element={<AdminFAQForm />}>
              <Route
                path=":frequently_asked_questions_id"
                element={<AdminViewFAQView />}
              />
              <Route path="create" element={<AdminCreateFAQView />} />
              <Route index element={<AdminViewAllFAQView />} />
            </Route>
            <Route path="dormitories" element={<AdminDormitoriesForm />}>
              <Route path=":dormitory_id" element={<AdminViewDormitoryView />}>
                <Route path=":unit_id" element={<AdminUnitView />} />
                <Route path="create" element={<AdminCreateUnitView />} />
                <Route index element={<AdminViewAllUnitsView />} />
              </Route>
              <Route path="create" element={<AdminCreateDormitoryView />} />
              <Route index element={<AdminViewAllDormitoriesView />} />
            </Route>
          </Route>
          <Route path="frequently_asked_questions" element={<AdminFAQPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
