const HelpItem: React.FC<{ command: string; label: string }> = ({
  command,
  label,
}) => {
  return (
    <div className="flex pl-4">
      <span
        className="w-[200px] text-cyan-300"
        style={{ textShadow: "0 0 5px rgb(103 232 249)" }}
      >
        {command}
      </span>
      <span>{label}</span>
    </div>
  );
};

export default HelpItem;
