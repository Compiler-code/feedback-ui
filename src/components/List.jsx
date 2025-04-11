import React from "react";
import Item from "./Item";

const List = ({ feedback, deleteFeedback, editFeedback }) => {
  return (
    <div className="feedback-list">
      <div className="header">
        <div className="line"></div>
        <h2>Feedback</h2>
        <div className="line"></div>
      </div>
      {feedback.length === 0 ? (
        <p className="none">Sorry There isn't any feedback yet</p>
      ) : (
        feedback.map((item) => <Item data={item} key={item.id} handleDelete={() => deleteFeedback(item.id)} handleEdit={editFeedback} />)
      )}
    </div>
  );
};

export default List;
