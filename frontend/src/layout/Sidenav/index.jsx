import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Logo from "../../assets/brand/logo";
import GridViewTwoTone from "@mui/icons-material/GridViewTwoTone";
import PsychologyTwoTone from "@mui/icons-material/PsychologyTwoTone";
import VerifiedTwoTone from "@mui/icons-material/VerifiedTwoTone";
import AccountCircleTwoTone from "@mui/icons-material/AccountCircleTwoTone";
import EventNoteTwoTone from "@mui/icons-material/EventNoteTwoTone";
import LocalAtmTwoTone from "@mui/icons-material/LocalAtmTwoTone";
import SettingsTwoTone from "@mui/icons-material/SettingsTwoTone";
import ButtonBase from "@mui/material/ButtonBase";
import { useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();

  const LogoButton = styled.div`
    min-width: 25px;
    margin: 1rem 0 1.5rem;
    cursor: pointer;
  `;

  const Nav = styled.nav`
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
  `;

  const NavProfile = styled.div`
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
  `;

  const navItems = [
    {
      id: 1,
      name: "Dashboard",
      path: "/",
      icon: (
        <GridViewTwoTone
          sx={{
            fontSize: "24px",
          }}
        />
      ),
    },
    {
      id: 2,
      name: "Project",
      path: "/project",
      icon: (
        <PsychologyTwoTone
          sx={{
            fontSize: "28px",
          }}
        />
      ),
    },
    {
      id: 3,
      name: "Employee",
      path: "/employee",
      icon: (
        <AccountCircleTwoTone
          sx={{
            fontSize: "24px",
          }}
        />
      ),
    },
    {
      id: 4,
      name: "Timesheet",
      path: "/timesheet",
      icon: (
        <EventNoteTwoTone
          sx={{
            fontSize: "24px",
          }}
        />
      ),
    },
    {
      id: 5,
      name: "Payroll",
      path: "/payroll",
      icon: (
        <LocalAtmTwoTone
          sx={{
            fontSize: "24px",
          }}
        />
      ),
    },
    {
      id: 6,
      name: "Client",
      path: "/client",
      icon: (
        <VerifiedTwoTone
          sx={{
            fontSize: "24px",
          }}
        />
      ),
    },
  ];

  console.log(location.pathname);

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 0,
        }}
      >
        <NavLink to="/">
          <LogoButton>
            <Logo width={27} />
          </LogoButton>
        </NavLink>
        <Nav>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "navActive" : "navInactive"
              }
            >
              <ButtonBase
                sx={{
                  p: 1.5,
                  mb: 0.5,
                  borderRadius: 2,
                }}
              >
                {item.icon}
              </ButtonBase>
            </NavLink>
          ))}
        </Nav>
        <NavProfile>
          {/* <IconButton
            onClick={colorMode.toggleColorMode}
            sx={{
              p: 1.5,
              mb: 1,
              borderRadius: 2,
            }}
          >
            {theme.palette.mode === "light" ? (
              <DarkModeTwoTone />
            ) : (
              <LightModeTwoTone />
            )}
          </IconButton> */}
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "navActive" : "navInactive"
            }
          >
            <ButtonBase
              sx={{
                p: 1.5,
                mb: 0.5,
                borderRadius: 2,
              }}
            >
              <SettingsTwoTone
                sx={{
                  fontSize: "24px",
                }}
              />
            </ButtonBase>
          </NavLink>
        </NavProfile>
      </Paper>
    </>
  );
};

export default Sidenav;
