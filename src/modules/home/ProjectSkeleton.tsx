export const ProjectSkeleton = () => {
  return (
    <div
      className={'w-full gap-3 bg-slate-800 p-3 rounded-xl flex animate-pulse'}
    >
      <div>
        <div className={'w-32 h-32 bg-slate-700 rounded-lg'} />
      </div>
      <div className={'w-full'}>
        <div className={'w-28 bg-slate-700 h-4 rounded-md'} />
        <div className={'my-3'}>
          <div className={'w-full bg-slate-700 h-4 rounded-md mt-2'} />
          <div className={'w-11/12 bg-slate-700 h-4 rounded-md mt-2'} />
          <div className={'w-10/12 bg-slate-700 h-4 rounded-md mt-2'} />
        </div>
        <div className={'flex flex-wrap gap-2'}>
          {[...Array(8)].map((_, index) => (
            <div key={index} className={'w-20 bg-slate-700 h-7 rounded-md'} />
          ))}
        </div>
      </div>
    </div>
  );
};
