
  import { BrowserRouter, Route, Switch } from "react-router-dom";
  import { render } from "react-dom";
  import IncidentLog from "./pages/Incident log/IncidentLog";
  
  render(
    <AppProvider>
      <BrowserRouter >
        <Switch>
          <Route path="/incidentLogdash" component={IncidentLog}/>
        </Switch>
      </BrowserRouter>
    </AppProvider>,
    document.getElementById("root")
  );
  
  