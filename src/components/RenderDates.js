import React from 'react';
import Date from '../components/style/date/Date';
import ContentDate from "./style/date/ContentDate";
import ShortDate from "./style/date/ShortDate";
import moment from 'moment';

// the function display dates
export default function RenderDates(startDate) {

    const dates_ = [];
    // display date in week

    let fixDate = parseInt(startDate.format('d'));
    if(fixDate === 0) fixDate = 7;
    startDate.add(-fixDate, 'days');
    for(let i = 1; i <= 4*7; i++) {
        dates_.push(
            <Date key={i}>
                <ContentDate>
                    <ShortDate>{moment.weekdaysShort()[i%7]}</ShortDate>
                    <span>{startDate.add(1,'days').get('Date')}</span>
                </ContentDate>
            </Date>
        )
    }
    return dates_;
}
