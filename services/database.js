import { getDocs , collection,addDoc } from "firebase/firestore";
import { db } from "@firebase";
const getProperties=async ()=>{
    const querySnapshot = await getDocs(collection(db, "homes"));
    const homesArray = [];
    querySnapshot.docs.forEach((doc) => {
      homesArray.push({
          id: doc.id,
          ...doc.data() // ... spread the document to the
        }
      );
    });
    return homesArray;
}



export {getProperties}