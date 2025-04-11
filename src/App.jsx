import React, { useEffect, useState } from "react";
import Components from "./script";

const App = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const res = await fetch("http://localhost:8000/feedback");
      const data = await res.json();
      setFeedback(data);
    };

    fetchFeedback();
  }, []);

  const addFeedBack = async (newFeedback) => {
    const res = await fetch("http://localhost:8000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    console.log(newFeedback);
    return;
  };

  const deleteFeedBack = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this feedback ?"
    );
    if (!confirm) return;
    const res = await fetch(`http://localhost:8000/feedback/${id}`, {
      method: "DELETE",
    });
    return;
  };

  return (
    <>
      <Components.Header />
      <div className="container">
        <Components.Form handleAdd={addFeedBack} />
        <Components.List feedback={feedback} deleteFeedback={deleteFeedBack} />
      </div>
    </>
  );
};

export default App;
