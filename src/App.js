import React, {useEffect} from 'react';
import './App.css';
import Week from "./components/style/week/Week";
import ContainerCalendar from "./components/style/ContainerCalendar";
import ContainerWeek from "./components/style/week/ContainerWeek";
import ContainerDateInWeek from "./components/style/date/ContainerDateInWeek";
import BodyDate from "./components/style/BodyDate";
import moment from "moment";
import RenderDates from "./components/RenderDates";

const renderWeek = (numOfWeek, currentDate) => {
  let weeks = [];
  const weekOfYear = getWeekNumber(currentDate)[1];
  for(let i = weekOfYear; i < weekOfYear + numOfWeek; i++) {
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
    const startDate = moment();

   let numOfWeekRender = 4;

    return (
        <ContainerCalendar>
            <BodyDate  id='container' onWheel={onWheel}>
                <ContainerWeek>
                  {renderWeek(numOfWeekRender, new Date(startDate))}
                </ContainerWeek>
                <ContainerDateInWeek>
                    {RenderDates(startDate)}
                </ContainerDateInWeek>
            </BodyDate>
        </ContainerCalendar>
    );
}


// get week of year

function getWeekNumber(d) {

    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));

    const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    const weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}


export default App;
