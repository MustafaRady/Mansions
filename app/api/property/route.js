import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@firebase';

// Named export for the GET method
export async function GET(req) {
    const searchParams = new URLSearchParams(req.nextUrl.searchParams);
    const type = searchParams.get('type');
    const status = searchParams.get('status');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const bedrooms = searchParams.get('bedrooms');
    const search = searchParams.get('search');
    console.log({
        type,
        status,
        minPrice,
        maxPrice,
        bedrooms,
        search,
    })

    try {
        let q = collection(db, "homes");

        

        const querySnapshot = await getDocs(q);
        const homes = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        

        let filteredHomes = homes;
        filteredHomes = filteredHomes.filter(data=>data.type === type);
        console.log({FILTERED : filteredHomes})
        if(status != 'ALL'){
            console.log("In status")
            filteredHomes = filteredHomes.filter(data=>data.status.toString() === status);
        }
        if(minPrice != 'MIN PRICE'){
            console.log("In min price")
            filteredHomes = filteredHomes.filter(data=>data.minPrice >= minPrice);
        }
        if(maxPrice != 'MAX PRICE'){
            console.log("In max price")
            filteredHomes = filteredHomes.filter(data=>data.maxPrice <= maxPrice);
        }
        
        if(bedrooms!== 'BED'){
            console.log("In bedrooms")
            filteredHomes = filteredHomes.filter(data=>data.bedrooms == bedrooms);
        }
        if(search != ''){
            filteredHomes = filteredHomes.filter(data=>data.address.includes(search));
        }
        //console.log("Filtered homes: " + filteredHomes)
        return new Response(JSON.stringify(filteredHomes), { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500 }
        );
    }
}
