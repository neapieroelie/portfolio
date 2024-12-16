export default function PageNotDone({ title }) {
    return (
      <div
        className=" h-screen bg-gray-950 flex justify-center items-center px-20 "
      >
        <div className=" bg-gray-950 flex flex-col items-center justify-center gap-10">
            <h1 className="title3-text text-yellow-300 text-center">
                {title}
            </h1>
            <p className="body-text text-white text-center">
                I promise you it's coming. <br/> So stay curious & come back pls. 
            </p>
        </div>
      </div>
    );
  }  
