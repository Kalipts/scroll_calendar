import React, {useEffect} from 'react';
import './App.css';
import Week from "./components/style/week/Week";
import ContainerCalendar from "./components/style/ContainerCalendar";
import ContainerWeek from "./components/style/week/ContainerWeek";
import ContainerDateInWeek from "./components/style/date/ContainerDateInWeek";
import BodyDate from "./components/style/BodyDate";

import RenderDates from "./components/RenderDates";

const renderWeek = () => {
  let weeks = [];
  for(let i = 1; i <= 53; i++) {
    weeks.push(
        <Week key={`w-${i}`}>
          <span>week {i}</span>
        </Week>
    )
  }
  return weeks;
};

const onWheel = e => {
    e.preventDefault();
    const container = document.getElementById("container");
    const containerScrollPosition = document.getElementById("container").scrollLeft;
    container.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaY,
        behaviour: "smooth"
    });
};

function App() {
    useEffect(() => {
        const dateToday = document.getElementById("date-today");
        dateToday.scrollIntoView({ behavior: "smooth", inline: "center" });
    }, []);
    return (
        <ContainerCalendar>
            <BodyDate  id='container' onWheel={onWheel}>
                <ContainerWeek>
                  {renderWeek()}
                </ContainerWeek>
                <ContainerDateInWeek>
                    {RenderDates()}
                </ContainerDateInWeek>
            </BodyDate>
        </ContainerCalendar>
    );
}

export default App;
