import React from "react";

export default function Tutor({
  firstName,
  lastName,
  phone,
  email,
  city,
  options,
}) {
  return (
    <div>
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <div>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{city}</p>
      </div>
      <div>{options}</div>
    </div>
  );
}
