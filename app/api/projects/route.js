import { collection, getDocs } from "firebase/firestore";
import { db } from "@firebase";

export const GET = async (req, res) =>{
    try{
        const response = await getDocs(collection(db , "homes"));
        const data = response.docs.map(doc => ({
            id : doc.id,
            ...doc.data()}));

            return new Response(JSON.stringify(data.slice(0,3)), { status: 200 });
    }catch(err){
        return new Response(JSON.stringify(err), { status: 500 });
    }   
}


const filter = (search , minPrice , maxPrice , bed )=>{

}