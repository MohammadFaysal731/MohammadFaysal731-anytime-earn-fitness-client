import React from "react";
import { Table } from "react-bootstrap";
import { weeklyClassScheduleData } from "./WeeklyClassScheduleData";

const WeeklyClassSchedule = () => {
  return (
    <div className="p-3">
      <div className="text-center m-4">
        <h3 style={{ color: "#742A59" }} className="text-uppercase">
          Time & Table
        </h3>
        <h2 style={{ color: "#9F2FF0" }}>Weekly Class Schedule</h2>
      </div>
      <Table responsive style={{ background: "#742A59", color: "white" }}>
        <thead>
          <tr>
            <th>TIME</th>
            {weeklyClassScheduleData?.map(({ day }, index) => (
              <th>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeklyClassScheduleData?.map(({ time, schedules }, index) => (
            <tr>
              <td>{time}</td>
              {/* sat */}
              <td>
                {schedules?.map(({ sat1, sun3, mon1, tue1, wed1, thur1 }) => (
                  <>
                    {sat1}
                    {sun3}
                    {mon1}
                    {tue1}
                    {wed1}
                    {thur1}
                  </>
                ))}
              </td>
              {/* sun */}
              <td>
                {schedules?.map(({ sat3, sun1, mon3, tue4, wed2, thur4 }) => (
                  <>
                    {sat3}
                    {sun1}
                    {mon3}
                    {tue4}
                    {wed2}
                    {thur4}
                  </>
                ))}
              </td>
              {/* mon */}
              <td>
                {schedules?.map(({ sat1, sun1, mon1, tue1, wed1, thur1 }) => (
                  <>
                    {sat1}
                    {sun1}
                    {mon1}
                    {tue1}
                    {wed1}
                    {thur1}
                  </>
                ))}
              </td>
              {/* tue */}
              <td>
                {schedules?.map(({ sat3, sun1, mon3, tue4, wed2, thur4 }) => (
                  <>
                    {sat3}
                    {sun1}
                    {mon3}
                    {tue4}
                    {wed2}
                    {thur4}
                  </>
                ))}
              </td>
              {/* wed */}
              <td>
                {schedules?.map(({ sat1, sun1, mon1, tue1, wed1, thur1 }) => (
                  <>
                    {sat1}
                    {sun1}
                    {mon1}
                    {tue1}
                    {wed1}
                    {thur1}
                  </>
                ))}
              </td>
              {/* thru */}
              <td>
                {schedules?.map(({ sat3, sun1, mon3, tue4, wed2, thur4 }) => (
                  <>
                    {sat3}
                    {sun1}
                    {mon3}
                    {tue4}
                    {wed2}
                    {thur4}
                  </>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default WeeklyClassSchedule;
