/* 
FAQ
*/
const serialize_faq = (question, answer) => {
  let faq = {
    question: question,
    answer: answer,
  };
  //converts object to Json string
  return JSON.stringify(faq);
};

//Creates a new object
const FAQ = (url, faq) => {
  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: faq,
  };
  return fetch(url, request);
};

/* 
Announcement 
*/
const serialize_announcement = (title, message, date) => {
  let announcement = {
    title: title,
    message: message,
    date: date,
  };
  //converts object to Json string
  return JSON.stringify(announcement);
};

//Creates a new object
const Announcement = (url, announcement) => {
  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: announcement,
  };
  return fetch(url, request);
};

export { serialize_faq, serialize_announcement, FAQ, Announcement };
