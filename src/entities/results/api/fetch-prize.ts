export const fetchPrize = async () => {
  const url = process.env.API_URL;
  const authKey = process.env.AUTH_KEY;
  const response = await fetch(`${url}/user`, {
    method: 'POST',
    headers: {
      'Auth-Key': authKey,
    },
  });

  return response.json();
};
