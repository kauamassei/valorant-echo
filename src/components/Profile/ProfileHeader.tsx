import headerBackground from "../../assets/ValorantChinaBeta.jpg";

interface Props {
  avatar: string;
  onUpload: (file: File) => void;
}

const ProfileHeader = ({ avatar, onUpload }: Props) => {
  return (
    <div className="relative h-48">
      <img
        src={headerBackground}
        alt="Cover"
        className="w-full h-full object-cover"
      />

      <div className="absolute -bottom-12 left-6">
        <div className="relative">
          <img
            src={avatar}
            alt="Profile"
            className="w-24 h-24 rounded-xl object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          />

          {/* BOTÃO IGUAL AO ORIGINAL */}
          <label
            htmlFor="avatar"
            className="absolute bottom-1 right-1 cursor-pointer bg-[#F96666] hover:bg-[#f17c7c] text-white p-2 rounded-full shadow-lg transition"
            title="Editar foto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536M9 11l6.232-6.232a2.5 2.5 0 013.536 3.536L12.5 14.5H9V11z"
              />
            </svg>
          </label>

          <input
            id="avatar"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                onUpload(e.target.files[0]);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
