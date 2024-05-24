import Image from "next/image";

interface ItemCardProps  {
  name: string;
  description: string;
  image: any;
}

function ItemCard({ name, description, image }: ItemCardProps ) {
  console.log("ItemCard");
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden w-60 m-4">
      <div className="p-4">
        <Image 
            src={image} 
            alt={name} 
            width={240} 
            height={160} 
            className="object-cover mb-2" 
          />
        <h2 className="text-sm font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ItemCard;
