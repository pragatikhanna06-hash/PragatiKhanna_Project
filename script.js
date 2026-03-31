// ================= SELECT ELEMENTS =================

const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const eventContainer = document.getElementById("eventContainer");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");

// ================= SAMPLE EVENTS =================

const sampleEvents = [
    {
        title: "Web Dev Workshop",
        date: "2026-04-05",
        category: "Workshop",
        description: "Learn modern web development."
    },
    {
        title: "Tech Conference",
        date: "2026-06-04",
        category: "Conference",
        description: "Annual developer conference."
    }
];

// ================= CREATE EVENT CARD =================

function createEventCard(eventData) {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>📅 ${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    return card;
}

// ================= ADD EVENT FUNCTION =================

function addEvent(eventData) {

    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();

    // Add on TOP
    eventContainer.prepend(createEventCard(eventData));
}

// ================= FORM SUBMIT =================

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

// ================= ADD SAMPLE EVENTS =================

addSampleBtn.addEventListener("click", () => {

    sampleEvents.forEach(event => {
        addEvent(event);   // This adds without removing existing events
    });

});

// ================= DELETE SINGLE EVENT =================

eventContainer.addEventListener("click", (e) => {

    const card = e.target.closest(".event-card");

    if (e.target.classList.contains("delete-btn") && card) {
        card.remove();
    }

    if (!eventContainer.querySelector(".event-card")) {
        eventContainer.innerHTML =
            `<div class="empty-state">No events yet. Add your first event!</div>`;
    }
});

// ================= CLEAR ALL EVENTS =================

clearAllBtn.addEventListener("click", () => {

    eventContainer.innerHTML =
        `<div class="empty-state">No events yet. Add your first event!</div>`;
});
