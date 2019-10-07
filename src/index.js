import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn: "https://aa1d63e9d90142739ba895a949ca0fd0@sentry.io/1772602"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
