import React from "react";

import AppointmentForm from "./AppointmentForm";
import PracticeAreas from "./PracticeAreas";
import BookAppointment from "./BookAppointment";
import HappyCustomers from "./HappyCustomers";
import LegalSolutions from "./LegalSolutions";

function App() {
  return (
    <>
      <div>
        <AppointmentForm />
        <PracticeAreas />
        <BookAppointment />
        <HappyCustomers />
        <LegalSolutions />
      </div>
    </>
  );
}
export default App;
