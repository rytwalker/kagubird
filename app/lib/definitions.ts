export type Trip = {
  id: string;
  start_date: string;
  end_date: string;
  city: string;
  state_code: string;
  google_place_id: string;
  lat: number;
  lng: number;
  createdBy: number;
  // activities    []*Activity
  // stays         []*Stay
  version: number;
};

export type Location = {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  google_place_id: string;
  website: string;
  phone: string;
  activity_id: number;
};
