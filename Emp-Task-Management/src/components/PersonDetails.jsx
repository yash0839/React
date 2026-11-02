import React from 'react';
import { personsData } from '../data/personsData';

function PersonDetails() {

  // Function to calculate age
  const calculateAge = (dateOfBirth) => {

    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (
      month < 0 ||
      (month === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">
        Person Details
      </h2>

      <div className="row">

        {personsData.map((person, index) => (

          <div className="col-md-4 mb-4" key={index}>

            <div className="card shadow border-0 h-100">

              <div className="card-body text-center">

                <h4 className="card-title text-primary">
                  {person.name}
                </h4>

                <p className="card-text mt-3">
                  <strong>Date of Birth:</strong>
                  <br />
                  {person.dateOfBirth}
                </p>

                <h5 className="text-success">
                  Age: {calculateAge(person.dateOfBirth)} Years
                </h5>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PersonDetails;