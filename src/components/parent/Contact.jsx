import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FormInputs, Map } from "..";
import emailjs from "@emailjs/browser";


const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const [success, setSuccess] = useState(false);


  const userSubmitClick = (libData, manualData) => {

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        manualData.target,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );

    reset();
  }


  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }, [success]);


  return (
    <section className='snap-center h-screen' id='contact'>

      <div className="w-full h-full flex justify-between gap-12">

        {/* Left Side */}
        <div className='flex-1 flex items-center justify-center'>
          <form
            className='w-[500px] space-y-4'
            onSubmit={handleSubmit((libData, manualData) => userSubmitClick(libData, manualData))}
          >

            <h1 className='text-4xl'>Contact Us</h1>

            {/* all input elements */}
            <FormInputs register={register} errors={errors} />

            <button type="submit" className='btn w-full p-4 text-2xl'>Send</button>

            {success && (<p className="text-center text-green-400">
              Your message sent successfully. I'll reply you soon... 🙂
            </p>)}

          </form>
        </div>


        {/* Right Side */}
        <div className='flex-1'> <Map /> </div>

      </div>

    </section>
  )
}

export default Contact

// IP8WFT10UhyT5z17e
// ervice_paw991gs
// emplate_631s234t