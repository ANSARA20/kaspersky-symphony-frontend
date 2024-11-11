export const fetchLeaders = async () => {
  const url = process.env.API_URL;
  const authKey = process.env.AUTH_KEY;
  const response = await fetch(`${url}/users/leaders`, {
    headers: {
      'Auth-Key': authKey,
    },
  });

  return response.json();
};
