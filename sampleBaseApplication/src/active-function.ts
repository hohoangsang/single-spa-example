export function prefix(location, ...prefixes) {
  return prefixes.some(
    (prefix) => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function showWhenAnyOf(routes) {
  return function (location) {
    return routes.some((route) => location.pathname === route);
  };
}

export function showWhenPrefix(routes) {
  return function (location) {
    return routes.some((route) => location.pathname.startsWith(route));
  };
}

export function showExcept(routes) {
  return function (location) {
    return routes.every((route) => location.pathname !== route);
  };
}

export function nav() {
  // The nav is always active
  return true;
}

export function page1(location) {
  return prefix(location, "page1");
}

export function page2(location) {
  return prefix(location, "page2");
}

export function page3(location) {
  return prefix(location, "page3");
}

export function login(location) {
  return prefix(location, "login");
}
