import Category from './Category';

type CategoryType = { category: string; score: number; icon: string };

function Categories({ data }: { data: CategoryType[] }) {
  return (
    <ul className="space-y-4">
      {data.map((category, index) => (
        <Category category={category} key={category.category} index={index} />
      ))}
    </ul>
  );
}

export default Categories;
