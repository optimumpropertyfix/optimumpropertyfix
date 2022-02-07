import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App";

import AdminPage from "./pages/AdminExperience/AdminPage";

import DashboardPage from "./pages/AdminExperience/DashboardPage/DashboardPage";

import FeedbackPage from "./pages/AdminExperience/FeedbackPage/FeedbackPage";

import MaintenanceRequestsPage from "./pages/AdminExperience/MaintenanceRequestsPage/MaintenanceRequestsPage";
import CreateTicketView from "./pages/AdminExperience/MaintenanceRequestsPage/views/CreateTicketView/CreateTicketView";
import TicketsView from "./pages/AdminExperience/MaintenanceRequestsPage/views/TicketsView/TicketsView";
import Ticket from "./pages/AdminExperience/MaintenanceRequestsPage/views/Ticket/Ticket";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="admin" element={<AdminPage />}>
            <Route index element={<DashboardPage />} />
            <Route
              path="maintenance_requests"
              element={<MaintenanceRequestsPage />}
            >
              <Route index element={<TicketsView />} />
              <Route path="create" element={<CreateTicketView />} />
              <Route path=":ticket" element={<Ticket />} />
            </Route>
            <Route path="feedback" element={<FeedbackPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
