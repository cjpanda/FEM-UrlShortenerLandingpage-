const storedLinks = () => {
  if (process.browser) {
    let links = localStorage.getItem("links");

    if (links) {
      return JSON.parse(localStorage.getItem("links"));
    } else {
      return [];
    }
  } else {
    return [];
  }
};

export default storedLinks;
