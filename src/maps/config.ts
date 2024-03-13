import { Loader } from "@googlemaps/js-api-loader";

const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;

export const loader = new Loader({
  apiKey: VITE_GOOGLE_MAPS_API_KEY,
  version: "weekly",
});
