import "../index.css";
import "./Welcome.css";
import { Card, Box, CardContent, Typography } from "@mui/material";

export default function Welcome() {
  return (
    <>
      <Box>
        <Card className="home-welcome">
          <CardContent>
            <Typography variant="h3">
              Your source for the hottest shows in the Montréal Area
            </Typography>
            <Typography variant="body2">
              TicketBlaster blasts away the competetion, bringing you the events
              you want to see <i>without</i> exorbitant service fees and hidden
              charges! <br />
              <br /> 👈 Check out what's coming to town!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
