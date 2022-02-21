import React, { Fragment } from "react";
import { BsEye } from "react-icons/bs";
import { FcShare } from "react-icons/fc";
import { FiThumbsUp } from "react-icons/fi";

const RenderData = (props) => {
  const { img_src, event_name, event_date, views, likes, shares} =
    props;
  return (
    <div className="container">
            <h3>Name: {event_name}</h3>
            <span>Date: {new Date(event_date).toLocaleString()}</span>
            <img src={img_src} alt="BigCo Inc. logo" />

            <ul style={{ listStyleType: "none" }}>
              <li>
                <FiThumbsUp size="20px" color="blue" />
                {likes}
              </li>
              <li>
                <BsEye size="20px" color="green" />
                {views}
              </li>
              <li>
                <FcShare size="20px" />
                {shares}
              </li>
            </ul>
          </div>
  );
};

export default RenderData;