import Button from "../atoms/button";

export default function Contacts(){
  return (
    <div id="contacts" className="flex flex-col justify-center items-center gap-8 mt-12 pt-20 xl:mt-40 mb-52">
      <span className="text-blue font-sans">What &apos;s next</span>
      <h1 className="text-4xl xl:text-5xl font-bold">Get In Touch</h1>
      <p className="text-gray font-sans text-sm xl:text-base text-center max-w-[70%] leading-relaxed">
      I am currently looking for a remote job or any new opportunities. Whether you have a project to discuss or just want to say hi, my inbox is open for all!
      </p>
      <a href="mailto:hadyanabdulaziz@gmail.com" target="_blank">
        <Button className="mt-12">
          Say Hello!
        </Button>
      </a>
    </div>
  )
}