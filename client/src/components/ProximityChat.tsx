import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  reverseGeocodeAsync,
  LocationGeocodedAddress,
  LocationObject,
} from "expo-location";
import { LocationContext } from "../constants/LocationContext";
import { DisplayLocation } from "./DisplayLocation";

export default () => {
  const [location, setLocation] = useState<LocationObject>();
  const [address, setAddress] = useState<LocationGeocodedAddress[]>();
  const [errorMsg, setErrorMsg] = useState<string>();

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await getCurrentPositionAsync({});
      let address = await reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation(location);
      setAddress(address);
    })();
  }, []);

  let coordsText = "";
  if (errorMsg) {
    coordsText = errorMsg;
  } else if (location) {
    coordsText = `${location.coords.latitude}, ${location.coords.longitude}`;
  }

  let addressText = "";
  if (errorMsg) {
    addressText = errorMsg;
  } else if (address) {
    addressText = `${address[0].streetNumber} ${address[0].street}`;
  }

  return (
    <View style={styles.container}>
      <LocationContext.Provider
        value={{ location: location, address: address, errorMsg: errorMsg }}
      >
        <DisplayLocation />
      </LocationContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});