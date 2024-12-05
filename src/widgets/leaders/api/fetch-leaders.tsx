export const fetchLeaders = async () => {
  const url = process.env.API_URL;
  const response = await fetch(`${url}/users/leaders`);

  return response.json();
};
