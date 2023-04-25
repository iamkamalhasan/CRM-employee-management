import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import NotificationsTwoTone from "@mui/icons-material/NotificationsActiveTwoTone";
import Search from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import Logout from "@mui/icons-material/LogoutOutlined";
import ExpandMore from "@mui/icons-material/ExpandMoreOutlined";

const Topbar = () => {
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const firstPath = pathArray[1];
  const secondPath = pathArray[2];
  const notificationCount = 1;
  const searchFilterItems = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Project",
    },
    {
      id: 3,
      name: "Employee",
    },
    {
      id: 4,
      name: "Timesheet",
    },
    {
      id: 5,
      name: "Payroll",
    },
    {
      id: 5,
      name: "Clients",
    },
  ];

  const [navNotificationEl, setNavNotificationEl] = useState(null);
  const openNotification = Boolean(navNotificationEl);
  const handleNotificationClick = (event) => {
    setNavNotificationEl(event.currentTarget);
  };
  const handleNotificationClose = () => {
    setNavNotificationEl(null);
  };

  const [navUserProfileEl, setNavUserProfileEl] = useState(null);
  const open = Boolean(navUserProfileEl);
  const handleClick = (event) => {
    setNavUserProfileEl(event.currentTarget);
  };
  const handleClose = () => {
    setNavUserProfileEl(null);
  };

  return (
    <>
      <Grid container>
        <Grid item lg={12}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 3,
              px: 2,
              py: 1,
            }}
          >
            <Grid
              container
              sx={{
                alignItems: "center",
              }}
            >
              <Grid item lg={3}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    textTransform: "capitalize",
                  }}
                >
                  {firstPath
                    ? `${firstPath} ${secondPath ? secondPath : ""}`
                    : "Dashboard"}
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <TextField
                  id="searchFilter"
                  select
                  label=""
                  size="small"
                  defaultValue="All"
                  sx={{
                    width: "125px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderTopLeftRadius: 4,
                      borderBottomLeftRadius: 4,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                  }}
                >
                  {searchFilterItems.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="search"
                  label="Search"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    width: "400px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderLeft: 0,
                      borderRadius: 0,
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                    },
                  }}
                />
              </Grid>
              <Grid
                item
                lg={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <ButtonBase
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    color: "var(--neutral-40)",
                    "&:hover, &:focus": {
                      color: "var(--primary-50)",
                    },
                  }}
                  id="navNotificationBtn"
                  aria-controls={
                    openNotification ? "navNotification" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={openNotification ? "true" : undefined}
                  onClick={handleNotificationClick}
                >
                  <Badge
                    badgeContent={notificationCount}
                    max={9}
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "var(--primary-60)",
                        color: "var(--neutral-99)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        animation: `
                        ${
                          notificationCount > 0 ? "shake 1s forwards" : "none"
                        }`,
                        animationIterationCount: `
                        ${notificationCount > 0 ? "once" : "none"}`,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <NotificationsTwoTone
                        sx={{
                          fontSize: "24px",
                          animation: "shake 1s forward",
                        }}
                      />
                    </Box>
                  </Badge>
                </ButtonBase>
                <Menu
                  elevation={3}
                  className={`navNotification`}
                  id="navNotificationMenu"
                  anchorEl={navNotificationEl}
                  open={openNotification}
                  onClose={handleNotificationClose}
                  MenuListProps={{
                    "aria-labelledby": "navNotificationBtn",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  sx={{
                    top: "10px",
                    "& .MuiPopover-paper": {
                      width: " 400px",
                    },
                    "& .MuiMenuItem-gutters": {
                      p: 1.5,
                    },
                  }}
                >
                  <MenuItem onClick={handleNotificationClose}>
                    <AccountCircle
                      style={{
                        marginRight: ".5rem",
                        color: "var(--neutral-99)",
                      }}
                    />
                    My account
                  </MenuItem>
                </Menu>
                <ButtonBase
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  id="navUserProfileBtn"
                  aria-controls={open ? "navUserProfileMenu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Avatar
                    alt="Employee"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    sx={{
                      mr: 2,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      width: "120px",
                      fontWeight: "500",
                      textAlign: "start",
                    }}
                  >
                    Ekanth Nithish
                  </Typography>
                  <ExpandMore />
                </ButtonBase>
                <Menu
                  elevation={3}
                  id="navUserProfileMenu"
                  anchorEl={navUserProfileEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "navUserProfileBtn",
                  }}
                  sx={{
                    top: "14px",
                    "& .MuiPopover-paper": {
                      width: " 210px",
                    },
                    "& .MuiMenuItem-gutters": {
                      p: 1.5,
                    },
                    "& .MuiMenuItem-root": {
                      color: "var(--neutral-0)",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <AccountCircle
                      style={{
                        marginRight: ".5rem",
                        color: "var(--neutral-30)",
                      }}
                    />
                    My account
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Logout
                      style={{
                        marginRight: ".5rem",
                        color: "var(--neutral-30)",
                      }}
                    />
                    Logout
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Topbar;
