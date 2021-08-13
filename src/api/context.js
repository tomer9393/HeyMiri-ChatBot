let myUser = undefined;

export const myUserContext = {
  setUser: (user) => {
    myUser = user;
  },
  getUser: () => {
    return myUser;
  }
};
