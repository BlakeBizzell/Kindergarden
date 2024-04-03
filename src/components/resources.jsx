import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Resources = () => {
  const data = [
    {
      show: "Sid The Science Kid",
      seasonEpisode: "S1: E1",
      name: "The Sticker Chart",
      topic: "Science Tools",
      platform: "Amazon/PBS",
    },
    {
      show: "Sid The Science Kid",
      seasonEpisode: "S1: E2",
      name: "The Rollie Pollie",
      topic: "Magnifying Glasses",
      platform: "Amazon/PBS",
    },
    {
      show: "Sid The Science Kid",
      seasonEpisode: "S1: E5",
      name: "Super Science Tools",
      topic: "Science Tools",
      platform: "Amazon/PBS",
    },
    {
      show: "Sid The Science Kid",
      seasonEpisode: "S1: E12",
      name: "What's that Smell",
      topic: "Senses: Smell",
      platform: "Amazon/PBS",
    },
    {
      show: "Sid The Science Kid",
      seasonEpisode: "S1: E14",
      name: "Too Much Noise",
      topic: "Senses: Hearing",
      platform: "Amazon/PBS",
    },
    {
      show: "Sid The Science Kid",
      seasonEpisode: "S1: E15",
      name: "All My Senses",
      topic: "Senses: All",
      platform: "Amazon/PBS",
    },
    {
      show: "Sid The Science Kid",
      seasonEpisode: "S2: E3",
      name: "Sid's Amazing Invention",
      topic: "Scientists",
      platform: "Amazon/PBS",
    },
    {
      show: "Sid The Science Kid",
      seasonEpisode: "S3: E16",
      name: "I Want to Be a Scientist",
      topic: "Scientists",
      platform: "Amazon/PBS",
    },
    {
      show: "Sid The Science Kid",
      seasonEpisode: "S3: E23",
      name: "The Amazing Computer Science Tool",
      topic: "Science Tools",
      platform: "Amazon/PBS",
    },
    {
      show: "Sid The Science Kid",
      seasonEpisode: "S1: E11",
      name: "The Itchy Tag",
      topic: "Senses: Touch",
      platform: "Amazon/PBS",
    },
    {
      show: "Sid The Science Kid",
      seasonEpisode: "S1: E13",
      name: "My Grandma's Glasses",
      topic: "Senses: Sight",
      platform: "Amazon/PBS",
    },
    {
      show: "The Magic School Bus",
      seasonEpisode: "",
      name: "MSB: The Haunted House",
      topic: "Senses: Hearing",
      platform: "Netflix",
    },
    {
      show: "Story Bots",
      seasonEpisode: "S3: E8",
      name: "How Do Eyes See",
      topic: "Senses: Sight",
      platform: "Netflix",
    },
    {
      show: "The Magic School Bus",
      seasonEpisode: "S4: E10",
      name: "MSB: Makes a Stink",
      topic: "Senses: Smell",
      platform: "Amazon/PBS",
    },
    {
      show: "Peg + Cat",
      seasonEpisode: "",
      name: "Birthday Cake Problem",
      topic: "Teen Numbers",
      platform: "Amazon",
    },
    {
      show: "Peg + Cat",
      seasonEpisode: "",
      name: "The Wedding",
      topic: "Ordering Numbers",
      platform: "Amazon",
    },
    {
      show: "",
      seasonEpisode: "",
      name: "The Funky Seventies Problem",
      topic: "Steps in Order (1st, 2nd, 3rd)",
      platform: "",
    },
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Show</TableCell>
              <TableCell>Season/Episode</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Topic</TableCell>
              <TableCell>Platform</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.show}</TableCell>
                <TableCell>{row.seasonEpisode}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.topic}</TableCell>
                <TableCell>{row.platform}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{ mt: 2, ml: 125 }}
      >
        Go back to Homes
      </Button>
    </>
  );
};

export default Resources;
