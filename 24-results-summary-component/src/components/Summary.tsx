import { useEffect, useState } from 'react';
import Categories from './Categories';

type CategoryType = { category: string; score: number; icon: string };

function Summary() {
  const [data, setData] = useState<CategoryType[]>([]);

  // Fake fetching data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data.json');
      const data = await response.json();

      setData(data);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="flex flex-col gap-6 p-8 flex-1">
      <h1 className="text-lg lg:text-2xl text-neutral-dark-gray-blue font-bold">
        Summary
      </h1>
      <Categories data={data} />
      <button className="bg-neutral-dark-gray-blue text-neutral-white py-4 font-bold text-lg rounded-full hover:bg-gradient-to-b hover:from-gradient-light-royal-blue hover:to-gradient-light-slate-blue">
        Continue
      </button>
    </div>
  );
}
export default Summary;
