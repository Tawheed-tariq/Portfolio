
export default function Project({ title, desc, img, skillArr, url }) {

  const nameShortner = (string, maxlength) => {
    if (string.length > maxlength)
      return string.substring(0, maxlength) + "...";
  };
  return (
    <div
      className={`shadow rounded-md max-w-96 p-6 `}
    >
      <a target="_blank" href={url}>
        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-5">
            <img src={img} className={`w-8 h-8 `} />
            <h1 className={`text-xl md:text-2xl font-semibold text-txt `}>
              {title}
            </h1>
          </div>
          <p className={`text-xs md:text-sm text-txt`}>{nameShortner(desc, 100)}</p>

          <div className={`flex flex-wrap gap-2 md:mx-1`}>
            {skillArr.map((skill) => (
              <Icon skill={skill} />
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

const Icon = ({ skill }) => {
  return (
    <div
      className={`flex h-3 md:h-9 shadow-lg rounded-full items-center justify-between px-5`}
    >
      <p className="text-txt text-[10px] sm:text-xs md:text-sm">{skill}</p>
    </div>
  );
};
