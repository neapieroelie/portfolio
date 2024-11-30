export default function Project({ title, snapAlign = "snap-start" }) {
    return (
      <div
        className={`h-[600px] bg-slate-800 mx-[150px] my-[100px] grid content-center justify-center ${snapAlign}`}
      >
        <h1 className="font-instrument text-[200px] tracking-tighter text-white">
          {title}
        </h1>
      </div>
    );
  }  