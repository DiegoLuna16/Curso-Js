import { User } from "../models/user";

export const saveUser = async(userLike) => {
  const user = new User(userLike);

  if (user.id) {
  }

  const updatedUser = await createUser(user);
  return updatedUser;


};


const createUser = async( user ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json()
    console.log({newUser});
    return newUser


}