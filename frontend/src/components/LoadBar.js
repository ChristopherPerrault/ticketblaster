import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function LoadBar() {
  return (
    <Stack sx={{ width: "50%" }} spacing={10}>
      <LinearProgress color="inherit" />
    </Stack>
  );
}
