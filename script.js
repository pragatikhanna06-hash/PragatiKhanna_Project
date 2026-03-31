eventForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);

    eventForm.reset();
});