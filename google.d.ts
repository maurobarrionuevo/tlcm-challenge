declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any; // Adjust 'any' to the type of google object you expect
  }
}
