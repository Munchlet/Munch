import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import GoogleLogin from "./components/login/GoogleLogin";

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
