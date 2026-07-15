const form = document.getElementById("eventForm");
const list = document.getElementById("eventList");

let events = [
    {
        name: "Dance Fest",
        date: "2026-03-10",
        venue: "Main Stage",
        link: "#",
        img: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e"
    },
    {
        name: "Music Night",
        date: "2026-03-11",
        venue: "Auditorium",
        link: "#",
        img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
    },
    {
        name: "Fashion Show",
        date: "2026-08-05",
        venue: "Open Arena",
        link: "https://example.com",
        img: "https://images.unsplash.com/photo-1509631179647-0177331693ae"
    },
    {
        name: "DJ Night",
        date: "2026-03-13",
        venue: "Open Ground",
        link: "#",
        img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
    }
];

function displayEvents() {
    list.innerHTML = "";

    events.forEach(e => {
        list.innerHTML += `
            <div class="card">
                <img src="${e.img}" alt="${e.name}">
                <div class="card-body">
                    <h3>${e.name}</h3>
                    <p>Date: ${e.date}</p>
                    <p>Venue: ${e.venue}</p>
                    <button onclick="registerEvent('${e.name}')">
                        Register
                    </button>
                </div>
            </div>
        `;
    });
}

function registerEvent(name) {
    alert("Registered for " + name);
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const event = {
        name: document.getElementById("name").value,
        date: document.getElementById("date").value,
        venue: document.getElementById("venue").value,
        link: document.getElementById("link").value,
        img: "https://images.unsplash.com/photo-1511578314322-379afb476865"
    };

    events.push(event);
    displayEvents();
    form.reset();
});

// INITIAL LOAD
displayEvents();