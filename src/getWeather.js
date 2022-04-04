import axios from "axios";
import { useState, useEffect } from "react";

function GetData() {
  const [times, setTime] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=36.88&longitude=30.70&hourly=temperature_2m"
      )
      .then((response) => setTime(response.data.hourly));
  }, []);

  const moods = (degree) => {
    if (degree < 5) {
      return "Sick ";
    } else if (degree < 10) {
      return "Depressed ";
    } else if (degree < 15) {
      return "Low ";
    } else if (degree < 30) {
      return "Cheerful ";
    } else if (degree < 35) {
      return "Bored ";
    } else {
      return "Angry ";
    }
  };
  const getWeather = () => {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let dateDay = d.getDate();
    let dateMonth = d.getMonth();
    let dateYear = d.getFullYear();

    return times.time
      ? times.time.map((t, index) =>
          index == hours ? (
            <ul key={index} id="dataAPI">
              {"Date: " +
                dateDay +
                " / " +
                dateMonth +
                " / " +
                dateYear +
                "\n" +
                "Hour: " +
                hours +
                "." +
                minutes +
                " " +
                "\n" +
                "Temperature: " +
                times.temperature_2m[hours] +
                "°C" +
                "\n " +
                "Mood " +
                "\n" +
                moods(times.temperature_2m[hours])}
            </ul>
          ) : null
        )
      : null;
  };

  return <div>{getWeather()}</div>;
}

export default GetData;
