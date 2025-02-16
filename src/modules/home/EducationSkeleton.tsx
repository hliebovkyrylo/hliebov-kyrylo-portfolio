export const EducationSkeleton = () => {
  return (
    <div
      className={
        'bg-slate-800 p-2 rounded-lg animate-pulse w-full max-w-[704px]'
      }
    >
      <div className={'w-16 h-7 bg-slate-700 rounded-md'} />
      <div className="flex items-center gap-2 my-3 font-bold">
        <div className={'w-[160px] bg-slate-700 rounded-md h-4'} />
        <div className="w-1 h-1 rounded-full bg-slate-700" />
        <div className={'w-[160px] bg-slate-700 rounded-md h-4'} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <div className={'w-full bg-slate-700 rounded-md h-4'} />
        <div className={'w-9/12 bg-slate-700 rounded-md h-4'} />
        <div className={'w-10/12 bg-slate-700 rounded-md h-4'} />
        <div className={'w-11/12 bg-slate-700 rounded-md h-4'} />
        <div className={'w-full bg-slate-700 rounded-md h-4'} />
      </div>
    </div>
  );
};
