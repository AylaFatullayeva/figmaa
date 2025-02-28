import Speaker from "./Speaker"

const Circles=()=>{
    return(
        <div className="flex flex-row gap-10 text-[13px] my-5">
<div className="rounded-full h-14 w-14 bg-white flex justify-center items-center flex-col">
    <p className="font-bold text-black">04</p>
    <p className="text-black">Days</p>
</div>
<div className="rounded-full h-14 w-14 bg-white flex justify-center items-center flex-col">
    <p className="font-bold text-black">22</p>
    <p className="text-black">Hours</p>
</div>
<div className="rounded-full h-14 w-14 bg-white flex justify-center items-center flex-col">
    <p className="font-bold text-black">59</p>
    <p className="text-black">Minutes</p>
</div> 
<div className="rounded-full h-14 w-14 bg-white flex justify-center items-center flex-col">
    <p className="font-bold text-black">36</p>
    <p className="text-black">Seconds</p>
</div>
        </div>
    )
}

export default Circles


