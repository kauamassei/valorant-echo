interface Props {
    name: string;
  }
  
  const ProfileInfo = ({ name }: Props) => {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">{name}</h1>
          <p className="text-purple-600">{name} #111</p>
        </div>
  
        <button className="px-4 py-2 bg-[#F96666] hover:bg-[#f17c7c] text-white rounded-lg text-sm font-medium">
          Compartilhar
        </button>
      </div>
    );
  };
  
  export default ProfileInfo;
  