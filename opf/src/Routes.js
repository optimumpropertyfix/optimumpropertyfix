/*

Backend Route List for Frontend Calls. Add new routes here with descriptive names for application availability.

*/
const admin_create_faq_route = (netid) => {
  return `admin/${netid}/faq/create`;
};

const admin_create_announcement_route = (netid) => {
  return `admin/${netid}/announcement/create`;
};

const student_create_ticket_route = (netid) => {
  return `/student/${netid}/tickets/create`;
};

const admin_create_ticket_route = (netid) => {
  return `/admin/${netid}/tickets/create`;
};

const student_all_tickets_route = () => {
  return `/student/tickets`;
};

const admin_all_tickets_route = (netid) => {
  return `/admin/${netid}/tickets`;
};

const student_get_single_ticket_route = (netid, ticket_id) => {
  return `/student/${netid}/tickets/${ticket_id}`;
};
const admin_get_single_ticket_route = (netid, ticket_id) => {
  return `/student/${netid}/tickets/${ticket_id}`;
};

const student_delete_ticket_route = (netid, ticket_id) => {
  return `/student/${netid}/tickets/${ticket_id}/delete`;
};

const new_user_route = () => {
  return `/new_user`;
};

const reset_password_route = () => {
  return `/reset_password`;
};

const login_route = () => {
  return `/login`;
};

const logout_route = () => {
  return `/logout`;
};

const view_session_route = () => {
  return `/session`;
};

const new_ticket_route = () => {
  return "/tickets/create";
};

const view_all_tickets_route = () => {
  return "/tickets";
};

const view_ticket_route = (ticket_id) => {
  return `/tickets/${ticket_id}`;
};

const get_all_tickets_by_status_route = (status) => {
  return `/tickets/filter/status/${status}`;
};

const user_view_individual_feedback_route = (ticket_id) => {
  return `/feedback/${ticket_id}`;
};

const user_create_ticket_route = () => {
  return `/tickets/create`;
};

const view_all_buildings_route = () => {
  return `/buildings`
}

const view_all_appointments = () => {
  return `/appointment`
}

const view_individual_appointment = (appointment_id) => {
  return `/appointment/${appointment_id}`
}

export {
  student_create_ticket_route,
  admin_create_ticket_route,
  student_all_tickets_route,
  admin_all_tickets_route,
  student_get_single_ticket_route,
  student_delete_ticket_route,
  admin_get_single_ticket_route,
  login_route,
  logout_route,
  new_user_route,
  reset_password_route,
  view_session_route,
  admin_create_faq_route,
  admin_create_announcement_route,
  new_ticket_route,
  view_all_tickets_route,
  view_ticket_route,
  get_all_tickets_by_status_route,
  user_view_individual_feedback_route,
  user_create_ticket_route,
  view_all_buildings_route,
  view_all_appointments,
  view_individual_appointment
};
