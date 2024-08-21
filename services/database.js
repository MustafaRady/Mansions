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

const addProperty= async()=>{
  const properties = [
    {
      type: "residential",
      address: "Sunnyvale",
      bathrooms: 2,
      bedrooms: 4,
      carSpaces: 1,
      description: "A charming family home with a spacious backyard and modern amenities. Located close to schools and parks.",
      features: ["Air Conditioning", "Dishwasher", "Built-In Robes", "Secure Parking"],
      imageUrls: [],
      openInspection: "Sat 24th Aug 11.00am - 11.30am",
      price: "$750,000 - $800,000",
      subAddress: "12 Oak Street",
    },
    {
      type: "commercial",
      address: "Downtown",
      bathrooms: 3,
      bedrooms: 0,
      carSpaces: 5,
      description: "Prime commercial space in the heart of the city, perfect for retail or office use.",
      features: ["Air Conditioning", "Broadband", "Floorboards", "Secure Parking"],
      imageUrls: [],
      openInspection: "Fri 23rd Aug 10.00am - 10.30am",
      price: "$1,200,000 - $1,300,000",
      subAddress: "101 High Street",
    },
    {
      type: "residential",
      address: "Meadow Park",
      bathrooms: 1,
      bedrooms: 3,
      carSpaces: 2,
      description: "Cozy home in a quiet neighborhood with a large garden and outdoor entertaining area.",
      features: ["Air Conditioning", "Built-In Robes", "Gas Heating", "Fully Fenced"],
      imageUrls: [],
      openInspection: "Sun 25th Aug 1.00pm - 1.30pm",
      price: "$580,000 - $600,000",
      subAddress: "7 Lavender Lane",
    },
    {
      type: "commercial",
      address: "Tech Park",
      bathrooms: 2,
      bedrooms: 0,
      carSpaces: 10,
      description: "Modern office space in a tech hub, equipped with the latest infrastructure and facilities.",
      features: ["Air Conditioning", "Broadband", "Secure Parking", "Elevator"],
      imageUrls: [],
      openInspection: "Mon 26th Aug 9.00am - 9.30am",
      price: "$950,000 - $1,000,000",
      subAddress: "200 Innovation Drive",
    },
    {
      type: "residential",
      address: "Riverside",
      bathrooms: 3,
      bedrooms: 5,
      carSpaces: 2,
      description: "Spacious riverside property with stunning views and luxurious amenities.",
      features: ["Air Conditioning", "Dishwasher", "Gas Heating", "Outdoor Entertaining", "Pool"],
      imageUrls: [],
      openInspection: "Sat 24th Aug 3.00pm - 3.30pm",
      price: "$1,500,000 - $1,600,000",
      subAddress: "85 River Road",
    },
    {
      type: "commercial",
      address: "Industrial Zone",
      bathrooms: 1,
      bedrooms: 0,
      carSpaces: 15,
      description: "Large industrial warehouse with ample storage and office space.",
      features: ["Air Conditioning", "Secure Parking", "Loading Dock"],
      imageUrls: [],
      openInspection: "Thu 22nd Aug 2.00pm - 2.30pm",
      price: "$2,000,000 - $2,100,000",
      subAddress: "350 Industry Street",
    },
    {
      type: "residential",
      address: "Seaside",
      bathrooms: 2,
      bedrooms: 3,
      carSpaces: 1,
      description: "Beachfront property with panoramic ocean views and modern design.",
      features: ["Air Conditioning", "Dishwasher", "Outdoor Entertaining", "Secure Parking"],
      imageUrls: [],
      openInspection: "Sun 25th Aug 12.00pm - 12.30pm",
      price: "$1,000,000 - $1,100,000",
      subAddress: "99 Ocean Drive",
    },
    {
      type: "commercial",
      address: "Business District",
      bathrooms: 4,
      bedrooms: 0,
      carSpaces: 8,
      description: "High-end office building with multiple conference rooms and state-of-the-art facilities.",
      features: ["Air Conditioning", "Broadband", "Elevator", "Secure Parking"],
      imageUrls: [],
      openInspection: "Wed 21st Aug 11.00am - 11.30am",
      price: "$3,000,000 - $3,200,000",
      subAddress: "1 Corporate Avenue",
    },
    {
      type: "residential",
      address: "Hillside",
      bathrooms: 2,
      bedrooms: 4,
      carSpaces: 2,
      description: "Elegant hillside home with large windows offering breathtaking mountain views.",
      features: ["Air Conditioning", "Dishwasher", "Gas Heating", "Fully Fenced", "Outdoor Entertaining"],
      imageUrls: [],
      openInspection: "Sat 24th Aug 2.00pm - 2.30pm",
      price: "$900,000 - $950,000",
      subAddress: "27 Mountain Road",
    },
    {
      type: "commercial",
      address: "Market Square",
      bathrooms: 1,
      bedrooms: 0,
      carSpaces: 3,
      description: "Retail space in a busy shopping district, ideal for boutique stores.",
      features: ["Air Conditioning", "Broadband", "Secure Parking"],
      imageUrls: [],
      openInspection: "Fri 23rd Aug 3.00pm - 3.30pm",
      price: "$750,000 - $800,000",
      subAddress: "150 Market Street",
    }
  ];
  properties.forEach(async (property) => {
    await addDoc(collection(db, "homes"), property);
  });  
}

export {getProperties,addProperty}