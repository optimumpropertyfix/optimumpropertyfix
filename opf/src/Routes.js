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

const student_all_tickets_route = (netid) => {
  return `/student/${netid}/tickets`;
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

const new_account_route = () => {
  return `/new_account`;
};

const login_route = () => {
  return `/token`;
};

const logout_route = () => {
  return `/revoke`;
};

const view_session_route = () => {
  return `/session`;
};

export {
  student_create_ticket_route,
  admin_create_ticket_route,
  student_all_tickets_route,
  admin_all_tickets_route,
  student_get_single_ticket_route,
  student_delete_ticket_route,
  login_route,
  logout_route,
  new_account_route,
  view_session_route,
  admin_create_faq_route,
  admin_create_announcement_route,
};
