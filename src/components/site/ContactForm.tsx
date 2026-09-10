import { useState, useMemo } from "react";
import { WHATSAPP_NUMBER } from "@/lib/contact";

const FIELD =
  "w-full border-0 border-b border-border bg-transparent py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-terracotta focus:outline-none transition-colors";

const TIPO_LABEL: Record<string, string> = {
  residencial: "Residencial",
  comercial: "Comercial",
  reforma: "Reforma / ampliação",
  outro: "Outro",
};

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [mensagem, setMensagem] = useState("");

  const whatsappUrl = useMemo(() => {
    const lines = [
      "Olá! Vim pelo site da Roberto Deucher e gostaria de conversar sobre a execução da minha obra.",
      "",
      `Nome: ${nome.trim() || "(não informado)"}`,
      `Tipo de projeto: ${TIPO_LABEL[tipo] || "(não informado)"}`,
    ];
    if (mensagem.trim()) {
      lines.push("", `Mensagem: ${mensagem.trim()}`);
    }
    const text = lines.join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [nome, tipo, mensagem]);

  const canSend = nome.trim() && tipo && mensagem.trim();

  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="nome" className="label-xs text-navy/60">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome completo"
          className={FIELD}
        />
      </div>
      <div>
        <label htmlFor="tipo" className="label-xs text-navy/60">
          Tipo de projeto
        </label>
        <select
          id="tipo"
          name="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className={FIELD}
          required
        >
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
          required
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Conte um pouco sobre a sua obra"
          className={`${FIELD} resize-none`}
        />
      </div>

      <a
        href={canSend ? whatsappUrl : undefined}
        target="_blank"
        rel="noreferrer"
        aria-disabled={!canSend}
        className={`label-xs inline-flex w-full items-center justify-center border px-8 py-4 transition-colors sm:w-auto ${
          canSend
            ? "border-navy bg-navy text-offwhite hover:border-terracotta hover:bg-terracotta"
            : "cursor-not-allowed border-navy/25 bg-transparent text-navy/40"
        }`}
      >
        Chamar no WhatsApp
      </a>
    </form>
  );
}
