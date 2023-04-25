import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Employee = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item lg={9}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "var(--neutral-99)",
              width: "100%",
              px: 2,
              py: 1,
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae laboriosam, sit odit, ex cupiditate porro rerum veniam
            voluptas recusandae sint accusamus consequuntur tenetur ad minima
            hic assumenda iste, iure quia.
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <h1>Employee</h1>
        </Grid>
      </Grid>
    </>
  );
};
export default Employee;
