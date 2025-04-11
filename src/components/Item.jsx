import React from "react";
import Card from "./Card";

const Item = ({ data, handleDelete }) => {
  return (
    <div className="feedback-item">
      <Card>
        <div className="header">
          <p className="rating">{data.ratings}</p>
          <p className="feedbacker">{data.user}</p>
        </div>
        <p className="description">{data.description}</p>
        <div className="controls">
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
      </Card>
    </div>
  );
};

export default Item;
