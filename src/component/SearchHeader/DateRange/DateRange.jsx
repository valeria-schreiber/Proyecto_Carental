import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "../../../styles/dateRange.css";

function DateRange() {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div className="date-container">
      <DateRangePicker
        className={"calendario-home"}
        onChange={onChange}
        value={value}
        defaultView="month"
        showDoubleView={true}
        ranges={[value]}
        selectRange={true}
        showNavigation={true}
        returnValue="range"
        dayPlaceholder=""
        monthPlaceholder=""
        yearPlaceholder=""
        rangeDivider=""
      />
    </div>
  );
}

export default DateRange;
