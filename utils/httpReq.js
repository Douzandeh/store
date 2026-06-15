const BASE_URL = "https://fakestoreapi.com";

const postData = async (path, data) => {
  try {
    const respocse = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await respocse.json();
    return json;
  } catch (error) {
    alert("An error occured!");
  }
};

const getData = async (path) => {
  try {
    const respocse = await fetch(`${BASE_URL}/${path}`);
    const json = await respocse.json();
    return json;
  } catch (error) {
    alert("An error occyred!");
  }
};

export { postData , getData };
