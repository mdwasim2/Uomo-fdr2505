import { useEffect, useState , useRef} from "react";
import { IoClose, IoFilterSharp } from "react-icons/io5";

const SortAndView = ({ setView }) => {
  let viewproduct = [2, 3, 4]
  const [filterModal, setFilterModal] = useState(false)
  const handleView = (view) => {
    setView(view)
  }
  // let filterRef = useRef()

  // useEffect(()=>{

  //   window.addEventListener("mousedown", function(e){

      
  //       if(e.target.contains(filterRef.current)){
  //         setFilterModal(false)
  //       }else{
  //         setFilterModal(true)
  //       }
  //   })  

  //   return ()=>{
  //     window.addEventListener("mousedown", function(){
  //                 setFilterModal(false)
  //     })
  //   }
  // },[filterModal])

  return (
    <div className=" flex gap-15.5 ">
      <select className="font-jost text-primary-black border-b-2 text-base leading-6 font-medium uppercase">
        <option className="option">DEFAULT SORTING</option>
        <option className=" ">adsfasdf</option>
        <option className=" ">adsfasdf</option>
      </select>
      {/* <div className="flex items-center">
        <h2 className="font-jost text-primary-black  text-base leading-6 font-medium uppercase">VIEW</h2>
        {viewproduct.map((item) => (
          <button onClick={() => handleView(item)} className="font-jost text-primary-black ml-4.5 text-base leading-6 font-medium uppercase">{item}</button>

        ))}

      </div>
        <div ref={filterRef} >
      <div  className="flex gap-2.5 items-center cursor-pointer">
        <IoFilterSharp />

        <h2 className="font-jost text-primary-black  text-base leading-6 font-medium uppercase">FILTER</h2>
      </div>

      <div className={` fixed  duration-300 ${filterModal ? "w-105" : "w-0"} z-50  h-full bg-gray-400  right-0 top-0`}>
          <div className=" bg-[#FAF9F8] px-10">
            <div className="flex items-center justify-between pt-8.25 pb-6.5">
          <h3 className=" font-jost font-medium text-base text-primary-black">FILTER BY</h3>
          <IoClose onClick={()=>setFilterModal(false)} size={15} />

            </div>

        </div>

      </div>
        </div> */}


    </div>
  );
};

export default SortAndView;
