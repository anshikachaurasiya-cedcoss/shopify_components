import { Box, DatePicker } from "@shopify/polaris";
import { useState, useCallback } from "react";

const MainComponent = () => {
  const [{ month, year }, setDate] = useState({ month: 3, year: 2018 });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date("Wed April 08 2018 00:00:00 GMT-0500 (EST)"),
    end: new Date("Wed April 08 2018 00:00:00 GMT-0500 (EST)"),
  });

  const handleMonthChange = useCallback(
    (month: number, year: number) => setDate({ month, year }),
    []
  );

  return (
    <Box background="bg-active" padding={'4'} borderRadius="5">
      <DatePicker
        month={month}
        year={year}
        onChange={setSelectedDates}
        onMonthChange={handleMonthChange}
        selected={selectedDates}
      />
    </Box>
  );
};

export default MainComponent;
