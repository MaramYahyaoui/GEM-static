import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false) // État pour le loader

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true) // démarrer le loader
    setStatus("") // réinitialiser le message

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/myznwvez", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("✅ Merci ! Votre message a été envoyé.")
        form.reset()
      } else {
        setStatus("❌ Oups ! Une erreur est survenue.")
      }
    } catch (error) {
      setStatus("❌ Oups ! Une erreur est survenue.")
    } finally {
      setLoading(false) // arrêter le loader
    }
  }

  return (
    <section className="py-12 px-24 bg-white flex flex-col md:flex-row justify-between items-start gap-8">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Restez en contact avec nous</h2>
        <p className="text-gray-600 mb-4">
          Nous parlons bien sûr de coffrets cadeaux de beauté propre - et nous avons un bouquet de beautés pour vous-même ou pour quelqu’un que vous aimez.
        </p>
        <div className="space-y-2 text-gray-600 flex gap-4">
          <span className="flex flex-col">
            <p className="font-bold text-pramary/40">Adresse </p>
            <p>3248 Abbot Kinney BLVD - PH, Venice, CA 124</p>
          </span>
          <span className="flex flex-col ml-16">
            <p className="font-bold text-pramary/40">Contact</p>
            <p>portable: 048 26589 994</p>
            <p>ligne directe: 1900 2486</p>
            <p>E-mail: helloteespace.com</p>
          </span>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Envoyer un message</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="Prénom"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Nom de famille"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

         

          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 border border-gray-300 rounded"
            
          ></textarea>

          <button
            type="submit"
            className={`bg-primary text-white px-4 py-2 rounded flex items-center justify-center gap-2`}
            disabled={loading} // désactiver le bouton pendant l'envoi
          >
            {loading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
            ) : null}
            {loading ? "Envoi..." : "Soumettre"}
          </button>
        </form>

        {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
      </div>
    </section>
  )
}

export default Contact
