export interface User {
  username: string;
  email?: string;
  password: string;
}

export interface Booking {
  id?: number;
  booking_price?: number;
  booking_number_of_persons?: number;
  booking_status: string;
  booking_creator?: number;
  tour?: Tour;
  tour_detail?: Tour_detail;
}

export interface Review {
  review_title: string;
  review_text: string;
  review_rating: number;
}

export interface AuthResponse {
  auth_token: string;
}


export interface Tour {
  id: number;
  text: string;
  title: string;
  duration: string;
  images: FileLocation;
  price: any;
  reviews: any;
  tour_detail: Tour_detail;
  travel_agent_id?: TravelAgent;
  average_review?: number;
  tour_rating?: number;
  type_of_tour?: [TourType];
}

class TourType {
  type_of_tour_name: string;
}

export interface Tour_detail {
  cur_person_number: number;
  id: number;
  tour_end_date: Date;
  tour_start_date: Date;
  tour_person_number: number;
  tour: Tour;
}

export interface FileLocation {
  file: string;
}

export interface TravelAgent {
  travel_agent_name: string;
  //travel_agent_locatin: TravelLocation
}

// export interface TravelLocation {
//   city_name: string
//   city_region: TravelRegion
// }
//
// export interface TravelRegion {
//   region_name: string
// }

// "travel_agent_id": {
//   "travel_agent_name": "Nomad",
//     "travel_agent_location": {
//     "city_region": {
//       "region_name": "Almaty"
//     },
//     "city_name": "Almaty"
//   }
// }
