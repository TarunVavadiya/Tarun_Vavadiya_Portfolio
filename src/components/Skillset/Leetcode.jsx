import React from "react";
import leetcodeImg from "../../assets/leetcode.png";
import { Button } from "@mui/material";

const Leetcode = () => {
  const redirectToLeetcodeProfile = () => {
    const leetcodeProfileUrl = "https://leetcode.com/Tarun_Vavadiya/";
    window.open(leetcodeProfileUrl, "_blank");
  };
  return (
    <>
      <h1
        className="project-heading"
        style={{
          paddingBottom: "20px",
          fontSize: "2em",
        }}
      >
        <strong className="yellow">LeetCode</strong> Status
      </h1>
      <Button onClick={redirectToLeetcodeProfile}>
        <img
          src={leetcodeImg}
          alt="Leetcode"
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "auto",
            cursor: "pointer",
          }}
        />
      </Button>
    </>
  );
};

export default Leetcode;
