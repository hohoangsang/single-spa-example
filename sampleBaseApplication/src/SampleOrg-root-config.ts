import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import { showAbsoluteWhenAuth, showExcept, showWhenAnyOf, showWhenPrefix } from "./active-function";
import microfrontendLayout from "./microfrontend-layout.html";


const routes = constructRoutes(microfrontendLayout);;

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.map((app: any) => {
  switch (app.name) {
    case "@org/auth-app": {
      app.activeWhen = [showWhenAnyOf(['/login'])]
      break;
    }

    case "@org/layout": {
      app.activeWhen= [showExcept(['/login'])]
      break;
    }

    case "@org/homepage": {
      app.activeWhen = [showAbsoluteWhenAuth(['/'])]
      break;
    }

    case "@react-app-1/react-project-1": {
      console.log(`page1`);
      app.activeWhen = [showWhenPrefix(['/page1'])]
      break;
    }

    case "@react-app-2/react-project-2": {
      app.activeWhen = [showWhenPrefix(['/page2'])]
      break;
    }

    case "@org/cra-app": {
      app.activeWhen = [showWhenPrefix(['/page3'])]
      break;
    }

    default:
      break;
  }
})

console.log(applications);

applications.forEach(registerApplication);
layoutEngine.activate();

// registerApplication(
//   "@navbar-app/navbar-project",
//   () => System.import("@navbar-app/navbar-project"),
//   isActive.nav,
// );

// registerApplication(
//   "@react-app-1/react-project-1",
//   () => System.import("@react-app-1/react-project-1"),
//   isActive.page1,
// );

// registerApplication(
//   "@react-app-2/react-project-2",
//   () => System.import("@react-app-2/react-project-2"),
//   isActive.page2,
// );

// registerApplication(
//   "@org/cra-app",
//   () => System.import("@org/cra-app"),
//   isActive.page3,
// );

start();
