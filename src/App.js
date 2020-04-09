import React from 'react';
import './App.css';
import Week from "./components/style/week/Week";
import ContainerCalendar from "./components/style/ContainerCalendar";
import ContainerWeek from "./components/style/week/ContainerWeek";
import ContainerDateInWeek from "./components/style/date/ContainerDateInWeek";
import BodyDate from "./components/style/BodyDate";
import Date from "./components/style/date/Date";
import ContentDate from "./components/style/date/ContentDate";
import ShortDate from "./components/style/date/ShortDate";
import moment from 'moment';
import RenderDates from "./components/RenderDates";

const renderWeek = () => {
  let weeks = [];
  for(let i = 1; i <= 53; i++) {
    weeks.push(
        <Week>
          <span>week {i}</span>
        </Week>
    )
  }
  return weeks;
};

function App() {
    console.log(moment.weekdaysShort()[0]);
    return (
        <ContainerCalendar>
            <BodyDate>
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
