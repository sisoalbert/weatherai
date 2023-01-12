import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";

const App = () => {
  const [data, setData] = React.useState({
    current: {
      cloud: 100,
      condition: {
        code: 1009,
        icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
        text: "Overcast",
      },
      feelslike_c: 10.6,
      feelslike_f: 51,
      gust_kph: 45.4,
      gust_mph: 28.2,
      humidity: 82,
      is_day: 0,
      last_updated: "2023-01-10 17:45",
      last_updated_epoch: 1673372700,
      precip_in: 0,
      precip_mm: 0,
      pressure_in: 29.62,
      pressure_mb: 1003,
      temp_c: 13,
      temp_f: 55.4,
      uv: 1,
      vis_km: 10,
      vis_miles: 6,
      wind_degree: 220,
      wind_dir: "SW",
      wind_kph: 24.1,
      wind_mph: 15,
    },
    location: {
      country: "United Kingdom",
      lat: 51.52,
      localtime: "2023-01-10 17:58",
      localtime_epoch: 1673373502,
      lon: -0.11,
      name: "London",
      region: "City of London, Greater London",
      tz_id: "Europe/London",
    },
  });
  const [loading, setLoading] = React.useState(false);
  const icon = "https:" + data.current.condition.icon;

  const [date, time] = data.location.localtime.split(" ");
  const [hour, minute] = time.split(":");
  const [year, month, day] = date.split("-");
  const d = new Date(year, month - 1, day, hour, minute, 0);
  console.log(d.toDateString());

  React.useEffect(() => {
    // fetch(
    //   "http://api.weatherapi.com/v1/current.json?key=***&q=London"
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     // do something with the data
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        data && (
          <SafeAreaView>
            <Text>Temperature: {data.current.temp_c}</Text>
            <Text>Humidity: {data.current.humidity}</Text>
            <Text>{d.toDateString()}</Text>
            <Text>{data.location.name}</Text>
            <Image
              source={{ uri: icon }}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </SafeAreaView>
        )
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
