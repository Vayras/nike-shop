 
const Button = ({lable, iconUrl, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
     <button className={`rounded-full flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
     ${
       backgroundColor
         ? `${backgroundColor} ${textColor} ${borderColor}`
         : "bg-coral-red text-white border-coral-red"} rounded-full ${fullWidth &&
       'w-full'}'}`}
         >
        {lable}

       {iconUrl && <img
         src={iconUrl}
         alt="icon"
         className="ml-2 rounded-full w-5 h-5"
         /> }
     </button>
  )
}

export default Button
