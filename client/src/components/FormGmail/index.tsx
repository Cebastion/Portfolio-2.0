import { IMailer } from "@/interfaces/Mailer.interface"
import { MailerService } from "@/services/Mailer.service"
import { useState, ChangeEvent } from "react"

const FormGmail = () => {
  const [Form, SetForm] = useState<IMailer>({ name: '', email: '', subject: '', message: '' })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    SetForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const SendEmail = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    MailerService.SendEmail(Form)
    SetForm({ name: '', email: '', subject: '', message: '' })
    alert("Thanks for your email!")
  }

  return (
    <form
      onSubmit={SendEmail}
      id="gmail-form"
      className="flex flex-col gap-6 items-start max-[945px]:mt-5"
    >
      <div className="flex flex-col gap-1 max-[700px]:w-full">
        <label
          htmlFor="Name"
          className="font-manrope font-medium text-base text-white"
        >
          Name
        </label>
        <input
          value={Form.name} onChange={(e) => SetForm({ ...Form, name: e.target.value })}
          name="Name"
          type="text"
          className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
          required
        />
      </div>
      <div className="flex flex-col gap-1 max-[700px]:w-full">
        <label
          htmlFor="Email"
          className="font-manrope font-medium text-base text-white"
        >
          Email
        </label>
        <input
          value={Form.email} onChange={(e) => SetForm({ ...Form, email: e.target.value })}
          name="Email"
          type="email"
          className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
          required
        />
      </div>
      <div className="flex flex-col gap-1 max-[700px]:w-full">
        <label
          htmlFor="Subject"
          className="font-manrope font-medium text-base text-white"
        >
          Subject
        </label>
        <input
          value={Form.subject} onChange={(e) => SetForm({ ...Form, subject: e.target.value })}
          name="Subject"
          type="text"
          className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] font-manrope font-normal text-base text-white max-[700px]:w-full"
          required
        />
      </div>
      <div className="flex flex-col gap-1 max-[700px]:w-full">
        <label
          htmlFor="Message"
          className="font-manrope font-medium text-base text-white"
        >
          Message
        </label>
        <textarea
          value={Form.message} onChange={(e) => SetForm({ ...Form, message: e.target.value })}
          name="Message"
          className="px-4 py-3 w-[600px] h-40 bg-[#1a1a1a] font-manrope font-normal text-base text-white resize-none max-[700px]:w-full"
          required
        />
      </div>
      <button className="w-36 h-14 rounded-[100px] bg-button-custom-lime font-manrope font-bold text-base uppercase text-black">
        Submit
      </button>
    </form>
  )
}

export default FormGmail
