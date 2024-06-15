import {ContactImg} from '@/icons/ContactImg';

const Contact = () => {
    return (
        <div className="flex flex-col  w-full md:flex-row">
            <div className="flex md:flex-row flex-col-reverse md:w-screen">
                <div className="md:w-2/3 p-5 md:p-10 leading-7 md:leading-10">
                    <p className="text-4xl md:text-6xl text-[#2e4e82] mb-3">Let&apos;s Connect</p>
                    <p className='text-lg'>We are an open source project, our community of developers is here to help you</p>
                    <div>
                        <input type="text" className="w-full h-[4%] mt-5 p-5 border-2 border-[#2e4e82] rounded-[20px]" placeholder="Email Address" />

                        <div className='flex gap-3'>
                            <input type="text" className="w-full h-[4%] border-2 p-5 rounded-[20px] mt-5 border-[#2e4e82]" placeholder='First Name' />
                            <input type="text" className="w-full h-[4%] border-2 p-5 rounded-[20px] mt-5 border-[#2e4e82]" placeholder='Last Name' />
                        </div>

                        <textarea name="message" id="message" placeholder='What do you want to tabl about...' className='w-full border-2 p-5 rounded-[20px] mt-5 border-[#2e4e82] h-[30%]'></textarea>
                    </div>
                    <div className='flex gap-2'>
                        <button type="submit" className='w-full text-white p-5 rounded-[20px] h-[4%] bg-[#2e4e82] border-2 text-2xl'>
                            Let&apos;s chat
                        </button>
                        <div className='w-full md:p-5 p-2 text-[#2e4e82] h-[4%] text-lg'>
                            Raise an issue on GitHub
                        </div>
                    </div>


                </div>

                <div className="md:w-5/12 pt-10 md:p-0 flex justify-center items-center">
                    <ContactImg className="w-full h-auto"/>
                </div>
            </div>
        </div>
    )
}
export default Contact;