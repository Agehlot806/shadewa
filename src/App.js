import "./assets/css/style.css";
// import './assets/css/style.scss'
import "./assets/css/responsive.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/pages/login";
import Dashboard from "./component/pages/dashboard";
import Contributorsboard from "./component/pages/contributors-board";
import Customerboard from "./component/pages/customer-board";
import Viewmore from "./component/pages/viewmore";
import Profile from "./component/pages/profile";
import Setting from "./component/pages/setting";
import PasswordValidationExample from "./component/pages/demo";
import TodoList from "./component/pages/lodolist";
import Connectors from "./component/pages/connectors";
import Wizard from "./component/pages/Wizard/Index";
import Metrics from "./component/pages/metrics";
import Calendar from "./component/pages/calendar";
import Journeydesigner from "./component/pages/journeydesigner";
import Surveymaker from "./component/pages/SurveyMaker/Index";
import Salesfoureadd from "./component/pages/salesfoureadd";
import Hubsportc from "./component/pages/hubsportc";
import Response from "./component/pages/SurveyMaker/Response";
import Response1 from "./component/pages/SurveyMaker/Response1";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contributors-board" element={<Contributorsboard />} />
          <Route path="/customer-board" element={<Customerboard />} />
          <Route path="/connectors" element={<Connectors />} />
          <Route path="/view-more/:id" element={<Viewmore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/demo" element={<PasswordValidationExample />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/wizard" element={<Wizard />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/designer" element={<Journeydesigner />} />
          <Route path="/surveymaker" element={<Surveymaker />} />
          <Route path="/salesfour" element={<Salesfoureadd />} />
          <Route path="/hubsport" element={<Hubsportc />} />

          <Route path="/response" element={<Response />} />

          <Route path="/response1" element={<Response1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
