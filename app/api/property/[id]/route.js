import { doc, getDoc } from "firebase/firestore"
import { db } from "@firebase"


export const GET = async (req , {params})=>{
    try{
        
        const docRef = doc(db,"homes",params.id);
        const docSnap = await getDoc(docRef);
        return new Response(JSON.stringify({
            data:
                {id:docSnap.id,
                ...docSnap.data()}
            }), { status: 200 });

    }catch(error){
        return new Response(
            JSON.stringify({error: error.message}),
            {status: 501}
        )
    }
}