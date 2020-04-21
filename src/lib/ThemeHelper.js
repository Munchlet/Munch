import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#0f25aa",
		},
		secondary: {
			main: "#fac417",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#fff",
		},
	},
});
