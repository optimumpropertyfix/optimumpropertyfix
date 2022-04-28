/*

Backend Route List for Frontend Calls. Add new routes here with descriptive names for application availability.

*/
const view_all_faqs_route = () => {
  return `/faq`;
};

const admin_view_individual_faq_route = (faq_id) => {
  return `/faq/${faq_id}`;
};

const admin_edit_individual_faq_route = (faq_id) => {
  return `/faq/${faq_id}`;
};
const admin_create_individual_faq_route = () => {
  return `/faq/create`;
};

const admin_create_announcement_route = () => {
  return `/announcements/create`
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

const view_current_user_route = () => {
  return `/user`
}

const user_reset_account_info_route = () => {
  return `/user/update_account_info`
}

const user_update_password = () => {
  return `/user/update_account_password`
}

const user_view_latest_appointment_route = () => {
  return `/appointment/scheduled_appointments`
}

const view_all_announcements_route = () => {
  return `/announcements`
}

const admin_view_all_announcements_route = () => {
  return `/admin_announcements`
}

const admin_edit_individual_announcement_route = (announcement_id) => {
  return `/announcements/${announcement_id}/update`
}

const admin_view_individual_announcement_route = (announcement_id) => {
  return `/announcements/${announcement_id}`
}

const view_dormitories_route = () => {
  return `/buildings`
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
  admin_create_announcement_route,
  new_ticket_route,
  view_all_tickets_route,
  view_ticket_route,
  get_all_tickets_by_status_route,
  user_view_individual_feedback_route,
  user_create_ticket_route,
  view_all_buildings_route,
  view_all_appointments,
  view_individual_appointment,
  view_current_user_route,
  user_reset_account_info_route,
  user_update_password,
  user_view_latest_appointment_route,
  view_all_announcements_route,
  admin_view_all_announcements_route,
  admin_edit_individual_announcement_route,
  admin_view_individual_announcement_route,
  view_all_faqs_route,
  admin_view_individual_faq_route,
  admin_edit_individual_faq_route,
  admin_create_individual_faq_route,
  view_dormitories_route
};
