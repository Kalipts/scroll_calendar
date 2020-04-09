import React from 'react';
import Date from '../components/style/date/Date';
import ContentDate from "./style/date/ContentDate";
import ShortDate from "./style/date/ShortDate";
import moment from 'moment';

// the function display dates
export default function RenderDates(props) {

    const dates_ = [];
    const startDate = moment('12-29-2019', 'MM-DD-YYYY');

    for(let i = 1; i <= 53*7; i++) {
        dates_.push(
            <Date>
                <ContentDate>
                    <ShortDate>{moment.weekdaysShort()[i%7]}</ShortDate>
                    <span>{startDate.add(1,'days').get('Date')}</span>
                </ContentDate>
            </Date>
        )
    }
    return dates_;
}