import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
const Header: React.FC = () => {
  return(
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            sx={{ marginRight: 2 }}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: "none", color: "inherit"}}
          >
            Sample
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header