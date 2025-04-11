import React, { useState } from "react";
import Card from "./Card";

const Form = ({ handleAdd }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [nameError, setNameError] = useState("");
  const [ratingsError, setRatingsError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll(".input");
    const nameInput = document.getElementById("name");
    const ratingInput = document.getElementById("rating");
    const descriptionInput = document.getElementById("description");

    // VALIDATION
    inputs.forEach((input) => {
      if (input.value === "") {
        input.parentElement.classList.add("error");
        input.classList.add("error");
        if (input.id == "name") setNameError("Name is Required");
        else if (input.id == "rating") setRatingsError("Rating is Required");
        else if (input.id == "description")
          setDescriptionError("Description is Required");
      } else if (
        input.value !== "" &&
        input.parentElement.classList.contains("error")
      ) {
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
        if (input.id == "name") setNameError("");
        else if (input.id == "rating") setRatingsError("");
        else if (input.id == "description") setDescriptionError("");
      }
    });

    if (nameInput.value.length > 0 && nameInput.value.length < 3) {
      nameInput.parentElement.classList.add("error");
      setNameError("Name must be above the minimum [3]");
    } else if (nameInput.value.length > 99) {
      nameInput.parentElement.classList.add("error");
      setNameError("Name must be below the maximum [99]");
    } else if (ratingInput.value != "" && Number(ratingInput.value) < 1) {
      ratingInput.parentElement.classList.add("error");
      setRatingsError("Ratings must be above the minimum [1]");
    } else if (Number(ratingInput.value) > 10) {
      ratingInput.parentElement.classList.add("error");
      setRatingsError("Ratings must be below the maximum [11]");
    } else if (
      descriptionInput.value.length > 0 &&
      descriptionInput.value.length < 10
    ) {
      descriptionInput.parentElement.classList.add("error");
      setDescriptionError("Description must be above 10 characters");
    } else if (descriptionInput.value.length > 125) {
      descriptionInput.parentElement.classList.add("error");
      setDescriptionError("Description not exceed 125 characters");
    }

    if (
      nameInput.value.length > 10 &&
      nameInput.value.length < 100 &&
      ratingInput.value > 0 &&
      ratingInput.value < 11 &&
      descriptionInput.value.length > 10 &&
      descriptionInput.value.length < 126
    ) {
      handleAdd({
        user: nameInput.value,
        ratings: ratingInput.value,
        description: descriptionInput.value
      });
    }
  };

  return (
    <div className="form">
      <Card>
        <form>
          <h2>How have our services been to you?</h2>
          <div className={`input-group ${nameError == "" ? "" : "error"}`}>
            <input
              type="text"
              value={name}
              placeholder="Your Name Please"
              onChange={(e) => setName(e.target.value)}
              className="input"
              required
              id="name"
            />
            <p className="msg">{nameError}</p>
          </div>
          <div className={`input-group ${ratingsError == "" ? "" : "error"}`}>
            <input
              type="number"
              value={rating}
              placeholder="Rate Our Services (1 to 10)"
              className="input"
              onChange={(e) => setRating(e.target.value)}
              id="rating"
            />
            <p className="msg">{ratingsError}</p>
          </div>
          <div
            className={`input-group ${descriptionError == "" ? "" : "error"}`}
          >
            <textarea
              value={description}
              placeholder="Briefly describe you satisfaction or dissatisfaction"
              onChange={(e) => setDescription(e.target.value)}
              required
              className="input"
              id="description"
            ></textarea>
            <p className="msg">{descriptionError}</p>
          </div>
          <button className="btn-primary" onClick={(e) => submit(e)}>
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
