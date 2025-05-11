"use client"; // Important

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <main className="py-24 px-6 max-w-2xl mx-auto space-y-16">

      {/* Accroche */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          On en parle ?
        </h1>
        <p className="text-lg text-gray-600">
          Remplis ce formulaire et je reviens vers toi rapidement.
        </p>
      </section>

      {/* Formulaire */}
      <form
        action="https://formspree.io/f/xrbqbrlo"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Champ anti-spam */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        {/* Nom */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold">Ton prénom</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Prénom"
            className="rounded-md border border-gray-300 p-3 focus:border-primary focus:ring-primary focus:ring-1 outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-semibold">Ton email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="adresse@email.com"
            className="rounded-md border border-gray-300 p-3 focus:border-primary focus:ring-primary focus:ring-1 outline-none"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-semibold">Ton message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Ton projet, ton besoin, ton idée..."
            className="rounded-md border border-gray-300 p-3 focus:border-primary focus:ring-primary focus:ring-1 outline-none resize-none"
          />
        </div>

        {/* Bouton envoyer + Loader */}
        <div className="text-center">
          <button
            type="submit"
            className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-secondary flex items-center justify-center gap-2 mx-auto"
            disabled={status === "loading"}
          >
            {status === "loading" && (
              <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
            )}
            {status === "loading" ? "Envoi..." : "Envoyer le message"}
          </button>
        </div>
      </form>

      {/* Message Success/Error */}
      {status === "success" && (
        <p className="text-green-600 text-center font-semibold">
          Merci pour ton message ! Je reviens vers toi rapidement 🚀
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center font-semibold">
          Oups, une erreur est survenue. Essaie à nouveau ou contacte-moi directement par e-mail.
        </p>
      )}
    </main>
  );
}
