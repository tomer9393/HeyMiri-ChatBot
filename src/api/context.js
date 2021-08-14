let myUser = undefined;

// func to set and get my user.
export const myUserContext = {
  setUser: (user) => {
    myUser = user;
  },
  getUser: () => {
    return myUser;
  }
};
