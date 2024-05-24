import ItemCard from "@/components/item-card";
import { myArray } from '../data/data';

export default function Home() {
  console.log("#######Home##########");
  console.log(myArray);
  return (
    <main className="p-8">
      <h2 className="text-md font-bold text-center mb-8">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {myArray.map((item) => (
          <ItemCard key={item.id} 
          name={item.name} 
          description={item.price}
          image={item.image} />
        ))}
      </div>
    </main>
  );
}
