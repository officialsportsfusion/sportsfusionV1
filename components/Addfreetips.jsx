
export default function Addfreetips (){
    return(
        <div className='flex justify-center items-center'>
        <div>
        <h1 className="text-center text-3xl">Add Free Tips</h1>
            <form> 
                <div className='mt-4'>  <input type='text' placeholder='date' className='p-3'/></div>
                <div className='mt-4'>  <input type='text' placeholder='league' className='p-3'/></div>
                <div className='mt-4'>  <input type='text' placeholder='match' className='p-3'/></div>
                <div className='mt-4'>   <input type='text' placeholder='odds' className='p-3'/></div>
                <div className='mt-4'><input type='text' placeholder='tip' className='p-3'/></div>
                <div className='mt-4'> <input type='text' placeholder='scores' className='p-3'/></div>
                <button className='mt-4 h-[2.25rem] w-[6.8rem] grid place-items-center bg-gradient-to-r from-app-orange via-app-sky to-app-orange p-[1px] rounded-lg cursor-pointer hover:p-[2px]' ><span className='bg-app-black w-full h-full p-[1px] text-sm rounded-lg inline-grid place-items-center '>Add Free Tips</span></button>
            </form>
        </div>
           
           
          
            
            
            
            
        </div>
    )
}