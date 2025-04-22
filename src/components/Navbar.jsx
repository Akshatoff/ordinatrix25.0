import React, { useState } from "react";
import logo from "../assets/logo.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "4rem",
  bgcolor: "black",
  border: "2px solid #2f3037",
  borderRadius: "20px",
  boxShadow: 24,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const pop_up = [
    {
      title: "Innovate@trix",
      class: "9 - 12th",
      participants: "A team of 4",
      teams: "1 team per school",
      mode: "Prelims - Submission based, Finals - Offline",
      text: "Teams will be challenged to reimagine an established brand, merging innovative design with technical execution to create a unique and practical solution. Participants will collaborate to conceptualize, build, and present a project that is both visually impactful and functionally effective, meeting all the given requirements.",
    },
    {
      title: "Snap@trix",
      class: "9 - 12th",
      participants: "A team of 2",
      teams: "1 team per school",
      mode: "Prelims - Submission based, Finals - Offline",
      text: "Teams will be challenged to create a visually appealing and interesting storyboard which correlates with the prompt given. Both the raw and edited photo must be submmitted. Title and metadata should also be attached with the submission. The Top 10 teams will then advance to the finals. Originality is mandatory and plagiarism will result in disqualification",
    },
    {
      title: "Game@trix",
      class: "9 - 12th",
      participants: "A team of 2",
      teams: "1 team per school",
      mode: "Prelims - Submission based, Finals - Offline",
      text: "A high energy gaming competition featuring multiple rounds across different gaming platforms.  The top 10 teams will qualify for the offline finals. The usage of any kind of hack and/or aimbot is stricly prohibited. ",
    },
    {
      title: "Movie@trix",
      class: "6 - 12th",
      participants: "A team of 4",
      teams: "1 team per school",
      mode: "Prelims - Submission based, Finals - Offline",
      text: "The participants will be required to create a one-minute micro film of one of the given prompts. The clips used in the films should be shot by the participants. The usage of stock footage is prohibited. The top 10 school will be selected for the finals. In finals participants will be required to speak for 2 minutes about their films.",
    },
    {
      title: "Byte@trix",
      class: "4 - 5th",
      participants: "A team of 2",
      teams: "1 team per school",
      mode: "Offline",
      text: "The top 20 teams to register will be allowed to participate. Participants must use Microsoft MakeCode Arcade with the block based programming environment. The theme will be revealed on the spot, and the game must clearly reflect the theme. Participants will get 1.5 hours to complete the project.",
    },
    {
      title: "Crypt@trix",
      class: "Open to all",
      participants: "A team of 4",
      teams: "1 team per school",
      mode: "Online",
      text: "A completely online cryptography-based challenge, which is designed to test  participant's analytical and problem solving skills. The crypt hunt will span over 36 hours, the participants have to try and solve a maximum number of levels to with the hunt. All participants must join the Discord server for the event, details of this event will be shared on discord",
    },
    {
      title: "Code@trix",
      class: "9 - 12th",
      participants: "A team of 2",
      teams: "1 team per school",
      mode: "Prelims - Online, Finals - Offline",
      text: "The participants must analyze a given dataset and present meaningful insights, the particpants can use coding(Python, SQL)or no-code tools like Google Data Studio. The top 6 teams will advance to the finals. The participants must submit backend file and presentation/report. In the finals the participants must do a 5 - 7 min presentations showcasing dashboard and insights.",
    },
    {
      title: "Robo Fight",
      class: "Open to all",
      participants: "A team of 2",
      teams: "1 team per school",
      mode: "Offline",
      text: "Bot Battle is a robotics competition where teams build robots to push their opponents out of a ring. Two autonomous robots compete to flip or push the other out, with the first robot to touch the floor outside the arena losing. The robot with the most points after all matches wins. The Bot must fit within a square box of side 30cm with all its attachments. Maximum weight should not be more than 5kgs.",
    },
    {
      title: "RoboRace",
      class: "Open to all",
      participants: "A team of 2",
      teams: "1 team per school",
      mode: "Offline",
      text: " Teams have to Design a wirelessly controlled robot which should be able to travel on sand, marbles, water, etc. The robot that traverses all the hurdles and completes the track in minimum amount of time is declared as Robo race Champion. The bot must be controlled wirelessly and dimension of the box should be less than 25cm x 25cm x 20cm, the bot must be controlled wirelessly. Max weight allowed is 3kgs.",
    },
    {
      title: "Robo Soccer",
      class: "Open to all",
      participants: "A team of 2",
      teams: "1 team per school",
      mode: "Offline",
      text: "Teams of 2 wireless bots chase a ball around a big sized arena with the aim of kicking more goals than the opponent. The dimension of the bot should be less than 20cm x 20cm x 20cm. The bot must be controlled wirelessly. Max weight should not exceed more than 3kgs, including the battery. ",
    },
    {
      title: "Kuriovation",
      class: "Open to all",
      participants: "A team of 2",
      teams: "1 team per school",
      mode: "Offline",
      text: "Participants are requried to design and present a working robotics model that aligns with green technology and promotes one or more Sustainable Development Goals, such as Affordable and Clean Energy, Climate Action, Clean Water and Sanitation, or Sustainable Cities and Communities.",
    },
  ];

  const handleSelectChange = (event) => {
    const index = parseInt(event.target.value, 10);
    if (!isNaN(index)) {
      setSelectedIndex(index);
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="navbar">
        <img src={logo} alt="Ordin logo" className="logo" />
        <ul className="link-con">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#guideline" className="nav-link">Guidelines</a>

          <select name="events" id="events" className="nav-link" onChange={handleSelectChange}>
            <option value="">Events</option>
            {pop_up.map((event, index) => (
              <option key={index} value={index}>{event.title}</option>
            ))}
          </select>

          <a href="#team" className="nav-link">Team</a>
        </ul>
      </div>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selectedIndex !== null && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {pop_up[selectedIndex].title}
              </Typography>
              <Typography sx={{ mt: 2 }}>Classes: {pop_up[selectedIndex].class}</Typography>
              <Typography sx={{ mt: 2 }}>Mode: {pop_up[selectedIndex].mode}</Typography>
              <Typography sx={{ mt: 2 }}>Number of Teams: {pop_up[selectedIndex].teams}</Typography>
              <Typography sx={{ mt: 2 }}>Participants: {pop_up[selectedIndex].participants}</Typography>
              <Typography sx={{ mt: 2 }}>{pop_up[selectedIndex].text}</Typography>
            </>
          )}
          <Button onClick={() => setIsOpen(false)} className="btn btn-close">
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}
