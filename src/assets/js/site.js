window.onload = function() {
// if page event date.
  const eventDate = document.getElementById('event-date');

  if (eventDate) {
    const eventDateText = eventDate.getAttribute("datetime");
    const postedDate = new Date(eventDateText);

    if (postedDate) {
      const todaysDate = new Date();

      if (postedDate < todaysDate) {
        // past event !!!
        document.getElementById('event-registration').style.display = 'none';
      }
    }
  }
};
