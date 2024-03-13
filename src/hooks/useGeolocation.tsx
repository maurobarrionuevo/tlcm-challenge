import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { getReverseGeocoding } from "../api/weather";
import { updateAddedLocationsToStorage } from "../helpers/helpers";

/**
 * Custom hook for managing geolocation functionality within the application.
 * It handles obtaining the user's current location, reverse geocoding, and managing location-related state.
 *
 * @returns {Object} An object containing the current navigation location and permission status.
 */
export const useGeolocation = (): object => {
    // Accessing context for state management
    const { navLocation, setNavLocation, setAddedLocations, setSelectedLocation, addedLocations } = useContext(AppContext);
    // State to track geolocation permission status
    const [permissionGranted, setPermissionGranted] = useState<boolean>(false);

    /**
     * Adds the current location to the list of added locations after reverse geocoding.
     * Checks for duplicate entries before adding a new location.
     * If no locations were found on addedLocations, select the currentOne
     */
    const addLocationToLocationItems = useCallback(async () => {
        try {
            if (navLocation) {
                const { latitude, longitude } = navLocation.coords;
                const location = await getReverseGeocoding(latitude, longitude);

                setAddedLocations((prev) => {
                    if (!prev.some((item) => item.name === location[0].name)) {
                        setSelectedLocation(location[0]);
                        return [...prev, ...location];
                    }
                    return [...prev];
                });
            }
        } catch (error) {
            console.error('Error getting current weather', error);
        }
    }, [navLocation, setAddedLocations, setSelectedLocation]);

    /**
     * Updates the storage with the latest added locations whenever the list changes.
     */
    useEffect(() => {
        updateAddedLocationsToStorage(addedLocations);
    }, [addedLocations]);

    /**
     * Retrieves the current navigation location and sets the permission status.
     */
    const getNavLocation = useCallback(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (location) => {
                    setNavLocation(location);
                    setPermissionGranted(true);
                },
                (error) => {
                    setPermissionGranted(false);
                    console.error('Error getting nav location', error)
                },{
                    enableHighAccuracy: true
                }
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setNavLocation]);

    // Retrieves the current navigation location on component mount
    useEffect(() => {
        getNavLocation();
    }, [getNavLocation]);

    /**
     * Adds the current location to the list of added locations when the navigation location changes.
     */
    useEffect(() => {
        if (navLocation) {
            addLocationToLocationItems();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navLocation]);

    // Returns the current navigation location and permission status
    return {
        navLocation,
        permissionGranted,
    };
};
