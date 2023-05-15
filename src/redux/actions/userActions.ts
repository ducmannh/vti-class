export const login = (data: { username: string; password: string }) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};
