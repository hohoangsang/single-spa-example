import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import * as isActive from "./active-function"

const routes = constructRoutes(microfrontendLayout);;

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

console.log(applications);

applications.forEach(registerApplication);
layoutEngine.activate();

// registerApplication(
//   "@navbar-app/navbar-project",
//   () => System.import("@navbar-app/navbar-project"),
//   isActive.nav,
//   {document: document.getElementById("nav-container")}
// );

// registerApplication(
//   "@react-app-1/react-project-1",
//   () => System.import("@react-app-1/react-project-1"),
//   isActive.page1,
//   {document: document.getElementById("page-1-container")}
// );

// registerApplication(
//   "@react-app-2/react-project-2",
//   () => System.import("@react-app-2/react-project-2"),
//   isActive.page2,
//   {document: document.getElementById("page-2-container")}
// );

start();
