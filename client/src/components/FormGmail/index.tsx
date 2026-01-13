import { IMailer } from "@/interfaces/Mailer.interface"
import { MailerService } from "@/services/Mailer.service"
import { useState, ChangeEvent, FormEvent, useCallback } from "react"
import { motion } from "framer-motion"

type Errors = Partial<Record<keyof IMailer, string>>

const inputAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const FormGmail = () => {
  const [form, setForm] = useState<IMailer>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<Errors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }, [])

  const validate = (): boolean => {
    const newErrors: Errors = {}

    if (!form.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty"
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const SendEmail = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) return

    try {
      setIsSubmitting(true)
      await MailerService.SendEmail(form)

      setForm({ name: '', email: '', subject: '', message: '' })
      setErrors({})
      alert("Thanks for your email!")
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }, [form])

  return (
    <motion.form
      onSubmit={SendEmail}
      id="gmail-form"
      className="flex flex-col gap-6 items-start max-[945px]:mt-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ staggerChildren: 0.12 }}
    >
      {/* Name */}
      <motion.div variants={inputAnimation} className="flex flex-col gap-1 w-full">
        <label className="text-white">Name</label>
        <input
          value={form.name}
          onChange={handleInputChange}
          name="name"
          type="text"
          className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] text-white max-[700px]:w-full"
        />
        {errors.name && <span className="text-red-400 text-sm">{errors.name}</span>}
      </motion.div>

      {/* Email */}
      <motion.div variants={inputAnimation} className="flex flex-col gap-1 w-full">
        <label className="text-white">Email</label>
        <input
          value={form.email}
          onChange={handleInputChange}
          name="email"
          type="email"
          className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] text-white max-[700px]:w-full"
        />
        {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
      </motion.div>

      {/* Subject */}
      <motion.div variants={inputAnimation} className="flex flex-col gap-1 w-full">
        <label className="text-white">Subject</label>
        <input
          value={form.subject}
          onChange={handleInputChange}
          name="subject"
          type="text"
          className="px-4 py-3 w-[600px] h-14 bg-[#1a1a1a] text-white max-[700px]:w-full"
        />
        {errors.subject && <span className="text-red-400 text-sm">{errors.subject}</span>}
      </motion.div>

      {/* Message */}
      <motion.div variants={inputAnimation} className="flex flex-col gap-1 w-full">
        <label className="text-white">Message</label>
        <textarea
          value={form.message}
          onChange={handleInputChange}
          name="message"
          className="px-4 py-3 w-[600px] h-40 bg-[#1a1a1a] text-white resize-none max-[700px]:w-full"
        />
        {errors.message && <span className="text-red-400 text-sm">{errors.message}</span>}
      </motion.div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isSubmitting}
        className="w-36 h-14 rounded-[100px] bg-button-custom-lime font-bold uppercase text-black disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </motion.button>
    </motion.form>
  )
}

export default FormGmail

