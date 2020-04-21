import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import GoogleLogin from "./components/login/GoogleLogin";
import theme from "./lib/ThemeHelper";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Switch>
					<Route exact path="/login">
						<GoogleLogin />
					</Route>
					<Route exact path="/">
						<Homepage />
					</Route>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
