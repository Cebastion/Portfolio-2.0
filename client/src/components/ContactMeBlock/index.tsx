const ContactMeBlock = () => {
  const ScrollToGmailForm = () => {
    document
      .getElementById("gmail-form")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <button
      className="h-14 w-52 rounded-3xl bg-button-custom-lime rounded-100px flex justify-around items-center"
      onClick={ScrollToGmailForm}
    >
      <span className="font-manrope font-bold text-base uppercase text-black">
        Contact me
      </span>
      <div className="rounded-full w-3 h-3 bg-black"></div>
    </button>
  )
}

export default ContactMeBlock
