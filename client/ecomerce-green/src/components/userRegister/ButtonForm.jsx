
 const ButtonForm =({ type, text})=>{
    return <button 
    className="
    mt-5
    text-[16px]
    text-[white] 
    bg-[#F8924F99]
    hover:bg-[#F8924F]
    w-40 h-[34px] flex justify-center items-center rounded-lg
    font-medium 
    md:h-10" 
    type={type}>
        {text}
    </button>
}
export default ButtonForm;