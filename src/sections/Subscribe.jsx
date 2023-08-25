import Button from '../components/Button'

const Subscribe = () => {
  return (
     <section className="max-container
     flex justify-between items-center max-lg:flex-col gap-10
     " id="contact-us">
      <h3 className="text-3xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up from
      <span className="text-coral-red"> Updates </span> & Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center
       max-sm:flex-col gap-4 p-2.4 sm:border sm:border-slate-gray rounded-full'>
        <input 
        type="text"
        placeholder="subdcribe@nike.com"
        className="input"/>
        <div className='flex max-sm justify-end items-center max-sm:w-full '>
        <Button lable="Sign Up" fullWidth />
        </div>
      </div>

     </section>
  )
}

export default Subscribe
