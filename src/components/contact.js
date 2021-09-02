import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("xdoyyndd")
  if (state.succeeded) {
    return <p className="thanks">Grácias por conctactar!</p>
  }

  return (
    <>
      <div className="headerForm">
        <h2 className="titleh2">Contacto</h2>
        <h3 className="titleh3">¿Cómo puedo ayudarte?</h3>
        <p className="text1">
          Estoy detrás de la pantalla respondiendo todas tus preguntas, así que
          no dudes en escribirme y te responderé lo antes posible.
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Nombre"
          id="name"
          type="name"
          name="name"
        />
        <input
          className="input"
          placeholder="Email"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          rows={6}
          className="input"
          style={{
            width: "100%",
          }}
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="button" type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </>
    // <>
    //   <div
    //     style={{
    //         margin: "auto",
    //         width: "50%",
    //         textAlign:"center"
    //     }}
    //   >
    //     <h2 className="titleh2">Contacto</h2>
    //     <h3 className="titleh3">¿Cómo puedo ayudarte?</h3>
    //     <p className="text1">
    //       Estoy detrás de la pantalla respondiendo todas tus preguntas, así que
    //       no dudes en escribirme y te responderé lo antes posible.
    //     </p>
    //   </div>
    //   <form
    //   className="form"
    //   onSubmit={handleSubmit}>
    //     <input
    //       className="input"
    //       type="text"
    //       placeholder="Nombre"
    //       id="name"
    //       name="name"
    //       onChange={handleChange}
    //       value={form.name}
    //       required
    //     />
    //     <input
    //       className="input"
    //       type="email"
    //       placeholder="Email"
    //       id="email"
    //       name="email"
    //       value={form.email}
    //       required
    //       onChange={handleChange}
    //     />
    //     <textarea
    //       style={{
    //         width: "100%",
    //       }}
    //       className="input"
    //       placeholder="Cúentame sobre tu proyecto"
    //       id="textarea"
    //       name="textarea"
    //       value={form.textarea}
    //       rows={6}
    //       onChange={handleChange}
    //       required
    //     />
    //     <button className="button">ENVIAR</button>
    //   </form>
    // </>
  )
}

export default Contact
