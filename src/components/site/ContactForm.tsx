import { useState, type FormEvent } from "react";

const FIELD =
  "w-full border-0 border-b border-border bg-transparent py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-terracotta focus:outline-none transition-colors";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div>
        <label htmlFor="nome" className="label-xs text-navy/60">
          Nome
        </label>
        <input id="nome" name="nome" required placeholder="Seu nome completo" className={FIELD} />
      </div>
      <div>
        <label htmlFor="whatsapp" className="label-xs text-navy/60">
          WhatsApp
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          required
          placeholder="(00) 00000-0000"
          className={FIELD}
        />
      </div>
      <div>
        <label htmlFor="tipo" className="label-xs text-navy/60">
          Tipo de projeto
        </label>
        <select id="tipo" name="tipo" defaultValue="" className={FIELD} required>
          <option value="" disabled>
            Selecione
          </option>
          <option value="residencial">Residencial</option>
          <option value="comercial">Comercial</option>
          <option value="reforma">Reforma / ampliação</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensagem" className="label-xs text-navy/60">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Conte um pouco sobre a sua obra"
          className={`${FIELD} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="label-xs w-full border border-navy bg-navy px-8 py-4 text-offwhite transition-colors hover:border-terracotta hover:bg-terracotta sm:w-auto"
      >
        {sent ? "Recebido — retornaremos em breve" : "Agendar reunião"}
      </button>
    </form>
  );
}
