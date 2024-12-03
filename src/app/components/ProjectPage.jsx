export default function Project({ title, snapAlign = "snap-start" }) {
    return (
      <div
        className={`h-dvh bg-gray-950 grid content-center justify-center ${snapAlign}`}
      >
        <h1 className="font-instrument text-[200px] tracking-tighter text-white">
          {title}
        </h1>
      </div>
    );
  }  