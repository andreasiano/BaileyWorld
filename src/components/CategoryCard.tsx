interface PropsType {
  img: string;
  name: string;
}

const CategoryCard: React.FC<PropsType> = ({ img, name }) => {
  return (
    <div className="border border-gray-200 hover:text-white text-slate-400 hover:bg-blue-300 hover:border-gray-300 hover:scale-105 duration-500 rounded-lg cursor-pointer">
      <div className="flex justify-between items-center p-4">
        <div className="space-y-4">
          <h3 className="font-bold text-xl">{name}</h3>
        </div>
        <img className="w-[50px] rounded-full" src={img} alt={name} />
      </div>
    </div>
  );
};

export default CategoryCard;
