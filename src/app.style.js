export default (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: "row",
  },
  container: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  topgrid: {
    marginTop: "10px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  ListItemText: {
    textAlign: "center",
  },
});
