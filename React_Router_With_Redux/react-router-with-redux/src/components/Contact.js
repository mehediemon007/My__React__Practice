import React from "react";
import Rainbow from "../HigherOrderComponet/Rainbow";

export default Rainbow(function Contact() {
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        t is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
    </div>
  );
});
