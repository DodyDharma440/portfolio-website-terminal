const SocialItem: React.FC<{ label: string; url: string; value: string }> = ({
  label,
  url,
  value,
}) => {
  return (
    <div className="flex">
      <span className="w-[160px] text-yellow-300">{label}</span>
      <a
        href={url}
        className="hover:bg-green-400 hover:text-black px-2 text-green-300"
        target="_blank"
      >
        {value}
      </a>
    </div>
  );
};

export default SocialItem;
