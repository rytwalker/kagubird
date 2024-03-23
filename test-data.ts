export const users = [
  { id: 1, firstName: "Ryan", lastName: "Walker" },
  { id: 2, firstName: "Ireland", lastName: "Blume" },
];

export const locations = {
  pnc: {
    name: "PNC Park",
    lat: 40.4473553,
    lng: -80.0081783,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    website: "https://google.com",
    phone: "412-555-5555",
    emoji: "🏟️",
  },
  beerhive: {
    name: "The Beerhive",
    lat: 40.4520998,
    lng: -79.9875882,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    website: "https://google.com",
    phone: "412-555-5555",
    emoji: "🍺",
  },
  remedy: {
    name: "Remedy",
    lat: 0.4789968,
    lng: -79.9581093,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    website: "https://google.com",
    phone: "412-555-5555",
    emoji: "🥃",
  },
  spirit: {
    name: "Spirit",
    lat: 40.4786379,
    lng: -79.959153,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    website: "https://google.com",
    phone: "412-555-5555",
    emoji: "🎵",
  },
  airbnb: {
    name: "Airbnb",
    lat: 40.4668278,
    lng: -80.0301521,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    website: "https://google.com",
    phone: "412-555-5555",
    isStay: true,
    emoji: "🏠",
  },
  brillo: {
    name: "Brillobox",
    lat: 40.4656218,
    lng: -79.9573464,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    website: "https://google.com",
    phone: "412-555-5555",
    emoji: "🍸",
  },
  rivers: {
    name: "Rivers Casino",
    lat: 40.4478179,
    lng: -80.0257769,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    website: "https://google.com",
    phone: "412-555-5555",
    emoji: "🎰",
  },
  tako: {
    name: "tako",
    lat: 40.4423048,
    lng: -80.0047373,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    website: "https://google.com",
    phone: "412-555-5555",
    emoji: "🌮",
  },
};

export const itineraryItems = [
  {
    id: 1,
    name: "10 years ago bar crawl",
    location: { lat: 0, lng: 0 },
    startsAt: "2024-04-20T11:00:00.000Z",
    endsAt: "2024-04-21T00:00:00.000Z",
    notes: "Drinking all day. Bring cash.",
    locations: [
      locations.beerhive,
      locations.remedy,
      locations.spirit,
      locations.brillo,
    ],
  },
  {
    id: 2,
    name: "Birthday Dinner",
    location: { lat: 0, lng: 0 },
    startsAt: "2024-04-20T20:00:00.000Z",
    endsAt: "2024-04-20T22:00:00.000Z",
    notes: "Semi-formal. Reso at 8pm",
    locations: [locations.tako],
  },
  {
    id: 3,
    name: "Pirates Game",
    location: { lat: 0, lng: 0 },
    startsAt: "2024-04-19T19:00:00.000Z",
    endsAt: "2024-04-19T23:00:00.000Z",
    notes: "I have all the tickets. Casino after.",
    locations: [locations.pnc, locations.rivers],
  },
];

export const stays = [
  {
    id: 1,
    name: "Jake's place",
    location: locations.airbnb,
    type: "Airbnb",
    startsAt: "2024-04-19T15:00:00.000Z",
    endsAt: "2024-04-21T:12:00:00.000Z",
  },
];

export const trip = {
  id: 1,
  name: "Ryan's Bday",
  startsAt: "2024-04-19T00:00:00.000Z",
  endsAt: "2024-04-21T23:59:59.000Z",
  location: {
    city: "Pittsburgh",
    state: "PA",
    geolocation: { lat: 4, lng: -80 },
  },
  stays,
  itineraryItems,
  locations,
  users,
};
