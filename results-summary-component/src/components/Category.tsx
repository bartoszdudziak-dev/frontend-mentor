type CategoryType = { category: string; score: number; icon: string };

const colors = [
  { color: 'text-primary-light-red', background: 'bg-primary-light-red' },
  {
    color: 'text-primary-orangey-yellow',
    background: 'bg-primary-orangey-yellow',
  },
  { color: 'text-primary-green-teal', background: 'bg-primary-green-teal' },
  { color: 'text-primary-cobalt-blue', background: 'bg-primary-cobalt-blue' },
];

function Category({
  category,
  index,
}: {
  category: CategoryType;
  index: number;
}) {
  return (
    <li
      className={`flex justify-between items-center p-4 ${colors[index].color} ${colors[index].background} bg-opacity-5 rounded-xl`}
    >
      <div className="flex items-center gap-3">
        <img src={category.icon} className="size-5" />
        <h3 className="lg:text-lg">{category.category}</h3>
      </div>
      <div className="text-neutral-dark-gray-blue font-bold space-x-2">
        <span>{category.score}</span>
        <span className="opacity-50">/</span>
        <span className="opacity-50">100</span>
      </div>
    </li>
  );
}

export default Category;
