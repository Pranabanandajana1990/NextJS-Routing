const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Easier innovation. In startups and small companies, the low-code, no-code frameworks will empower all the team members to be part of the implementation.",
    location: "BH-193/2 Jorakhana, Kestopur",
    date: "2021-05-12",
    image: "images/code.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Network for Introverts",
    description:
      "Easier innovation. In startups and small companies, the low-code, no-code frameworks will empower all the team members to be part of the implementation.",
    location: "Kolkata, West-Bengal, India",
    date: "2022-06-30",
    image: "images/love.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Network for Extroverts",
    description:
      "Easier innovation. In startups and small companies, the low-code, no-code frameworks will empower all the team members to be part of the implementation.",
    location: "Howrah, West-Bengal, India",
    date: "2021-09-02",
    image: "images/laptop.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
