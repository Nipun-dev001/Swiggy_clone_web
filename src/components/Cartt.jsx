import { FaStar } from "react-icons/fa";

export default function Cartt(props) {
  return (
    <div className=" w-[284px] shrink-0 grow mb-[100px]">
      <div className=" group h-[182px] rounded-[15px] overflow-hidden relative">
        <img
          className=" group-hover:scale-110 duration-150 object-cover h-full w-full"
          src={props.image}   // <--- now works
          alt={props.name}
        />
        <div className="absolute bottom-0 left-0 w-full h-full 
                        bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                        flex items-end p-3">
          <p className="text-white text-[25px] font-bold tracking-tighter">
            {props.offer}
          </p>
        </div>
      </div>
      <div className=" mt-3 text-xl font-bold">
        {props.title}
      </div>
      <div className="flex mt-1 gap-2 items-center">
        <img className="w-5 h-5" src="/images/rating star.png" alt="" /> 
        <span>{props.rating}</span>
       <span className="ml-3"> {props.minTime}-{props.maxTime} mins...</span>
      </div>
      <div className="text-slate-700">
        <span>{props.name}</span>
        <br />
        <span>{props.place}</span>
      </div>
    </div>
  );
}
