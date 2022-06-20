import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Appbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" fullWidth>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              align="center"
            >
              EMPLOYEES DETAILS
            </Typography>
            <Link href="/details">
              <Button variant="contained" color="secondary">
                Add Employee
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Appbar;
