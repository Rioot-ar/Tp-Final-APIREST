import { db } from "../config/db.js";
import {
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore";

const userCollection = collection(db, "users");

export const getUserByName = async (userName) => {

  try {
    const q = query(userCollection, where("userName", "==", userName));
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot.docs[0])

    if (querySnapshot.empty) {
      return null;
    }

    const docSnap = querySnapshot.docs[0];
    return { id: docSnap.id, ...docSnap.data() };
  } catch (error) {
    throw new Error(`Error al obtener el usuario: ${error.message}`);
  }
};