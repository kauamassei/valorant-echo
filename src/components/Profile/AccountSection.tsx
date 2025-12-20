interface Props {
    email: string;
  }
  
  const AccountSection = ({ email }: Props) => {
    return (
      <div className="mt-8 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-white mb-3">
          Minha Conta
        </h2>
  
        <p className="text-purple-400">{email}</p>
  
        <p className="text-white cursor-pointer">Gerenciar</p>
        <p className="text-red-300 cursor-pointer">Sair</p>
      </div>
    );
  };
  
  export default AccountSection;
  