import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import VideocamIcon from '@mui/icons-material/Videocam';

const DownloadButton = ({ videoid }) => {
  const [vlink, setVlink] = useState(null);

  const options = {
    method: "GET",
    url: "https://youtube-video-download-info.p.rapidapi.com/dl",
    params: { id: videoid },
    headers: {
      "X-RapidAPI-Key": "f1f0359536mshd60d3e0825ca126p12e407jsn9d2d2c18f0bd",
      "X-RapidAPI-Host": "youtube-video-download-info.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setVlink(response.data.link[22][0]);
    });
  }, [videoid]);

  return (
    <Typography
      variant="subtitle2"
      fontWeight="bold"
      style={{ cursor: "pointer" }}
    >
      <a target="_blank" style={{ color: "#fff" }} download="" href={vlink}>
        <IconButton
          size="small"
          sx={{
            ml: "5px",
            color: "#ffffff",
            width:{
                lg:'25%',sm:'100%',xs:'100%'
            },
            border: "1px solid #fc1503",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          <VideocamIcon sx={{marginRight:"10px"}}/>
          Download MP4
          
        </IconButton>
      </a>
    </Typography>
  );
};

export default DownloadButton;
