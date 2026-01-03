interface TrainingSessionCardProps {
    dayLabel: string;
    focus: string;
    durationMinutes: number;
  }
  
  const TrainingSessionCard = ({
    dayLabel,
    focus,
    durationMinutes,
  }: TrainingSessionCardProps) => {
    return (
      <div className="rounded-xl border border-white/10 bg-linear-to-br from-[#0f172a] to-[#020617] p-5 transition hover:border-[#ff4655]/40">
        <h3 className="text-lg font-semibold text-white">{dayLabel}</h3>
  
        <p className="mt-2 text-sm text-gray-300">{focus}</p>
  
        <span className="mt-1 block text-xs text-gray-400">
          {durationMinutes} minutos
        </span>
      </div>
    );
  };
  
  export default TrainingSessionCard;
  