export const verifyJwt = async (jwt) => {
  const config = {
    headers: {
      jwt,
    },
  };
  const response = await greenIXApi.post("/auth/token", config);

  if (response.data) {
    const jwtExpirationMs = response.data.exp * 1000;
    return jwtExpirationMs > Date.now();
  }

  return false;
};
