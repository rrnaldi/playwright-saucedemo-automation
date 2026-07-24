export const users = {
  validUser: {
    username: "standard_user",
    password: "secret_sauce",
  },

  wrongPassword: {
    username: "standard_user",
    password: "pass123",
  },

  wrongUsername: {
    username: "admin123",
    password: "secret_sauce",
  },

  invalidCredential: {
    username: "admin123",
    password: "pass123",
  },

  emptyPassword: {
    username: "standard_user",
    password: "",
  },

  emptyUsername: {
    username: "",
    password: "secret_sauce",
  },

  emptyCredential: {
    username: "",
    password: "",
  },
};
