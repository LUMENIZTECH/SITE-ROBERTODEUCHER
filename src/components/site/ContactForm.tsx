import { useState, useMemo } from "react";
import { WHATSAPP_NUMBER } from "@/lib/contact";

const FIELD =
  "w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-sm text-ink placeholder:text-muted-foreground focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10 transition-colors";

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
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="nome" className="label-xs text-ink/55">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome completo"
          className={`mt-2 ${FIELD}`}
        />
      </div>
      <div>
        <label htmlFor="tipo" className="label-xs text-ink/55">
          Tipo de projeto
        </label>
        <select
          id="tipo"
          name="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className={`mt-2 ${FIELD}`}
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
        <label htmlFor="mensagem" className="label-xs text-ink/55">
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
          className={`mt-2 resize-none ${FIELD}`}
        />
      </div>

      <a
        href={canSend ? whatsappUrl : undefined}
        target="_blank"
        rel="noreferrer"
        aria-disabled={!canSend}
        className={`inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-sm font-medium transition-colors sm:w-auto ${
          canSend
            ? "bg-ink text-primary-foreground hover:bg-terracotta"
            : "cursor-not-allowed bg-ink/10 text-ink/40"
        }`}
      >
        Chamar no WhatsApp
      </a>
    </form>
  );
}
