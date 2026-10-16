const sources = [
  {name:"Normattiva",url:"https://www.normattiva.it/",desc:"Testi normativi vigenti e versioni degli atti."},
  {name:"Gazzetta Ufficiale",url:"https://www.gazzettaufficiale.it/",desc:"Pubblicazione ufficiale di leggi e decreti."},
  {name:"Archivio CCNL CNEL",url:"https://www.cnel.it/archivio-contratti/",desc:"Ricerca del contratto collettivo applicato; confermare il CCNL aziendale."},
  {name:"Ministero del Lavoro",url:"https://www.lavoro.gov.it/",desc:"Normativa, circolari e informazioni istituzionali."},
  {name:"Ispettorato Nazionale del Lavoro",url:"https://www.ispettorato.gov.it/",desc:"Indicazioni e attività ispettive."},
  {name:"FIOM-CGIL nazionale",url:"https://www.fiom-cgil.it/",desc:"Informazioni e materiali sindacali nazionali."},
  {name:"FIOM-CGIL Umbria",url:"https://www.cgilumbria.it/fiom/",desc:"Riferimento territoriale da verificare per contatti e aggiornamenti."},
  {name:"CSI",url:"https://www.centrosiderurgico.com/azienda/",desc:"Informazioni aziendali pubbliche."},
  {name:"Gruppo Arvedi — news",url:"https://www.arvedi.it/mondo-arvedi/news-e-media/archivio-news/",desc:"Comunicazioni pubbliche del gruppo."},
  {name:"ASSISTAL — lavoro",url:"https://www.assistal.it/lavoro/",desc:"Informazioni di parte datoriale; confrontare sempre con fonti ufficiali e CCNL applicabile."}
];
const $ = (s) => document.querySelector(s);
const sourceList = $("#sourceList");
sources.forEach((s) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = s.url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.textContent = s.name;
  const p = document.createElement("p"); p.textContent = s.desc;
  li.append(a,p); sourceList.append(li);
});
document.querySelectorAll(".tab").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b === button));
  document.querySelectorAll("main .panel").forEach((panel) => { panel.hidden = panel.id !== button.dataset.view; });
}));
const question = $("#question");
question.addEventListener("input", () => { $("#charCount").textContent = question.value.length + "/2000"; });
function addBubble(text, type, heading) {
  const bubble = document.createElement("div"); bubble.className = "bubble " + (type === "user" ? "user-bubble" : "assistant-bubble");
  if (heading) { const strong = document.createElement("strong"); strong.textContent = heading; bubble.append(strong); }
  const p = document.createElement("p"); p.textContent = text; bubble.append(p); $("#chat").append(bubble);
  bubble.scrollIntoView({behavior:"smooth",block:"nearest"});
}
const demoReply = "Questa versione non dispone di un modello AI né verifica in tempo reale la normativa. Per procedere in modo affidabile: (1) chiarisci il fatto e le date senza condividere dati personali; (2) individua il CCNL e la versione applicabili; (3) consulta la fonte ufficiale nella sezione Fonti; (4) per termini, contestazioni o questioni controverse, verifica con FIOM-CGIL Perugia o un professionista. Non considero accertato alcun articolo o termine senza fonte verificata.";
function submitPrompt(value) {
  const trimmed = value.trim(); if (!trimmed) return;
  addBubble(trimmed,"user");
  addBubble(demoReply,"assistant","Risposta dimostrativa — non verificata");
}
$("#askForm").addEventListener("submit", (event) => { event.preventDefault(); submitPrompt(question.value); question.value = ""; $("#charCount").textContent = "0/2000"; });
document.querySelectorAll("[data-prompt]").forEach((b) => b.addEventListener("click", () => { question.value = b.dataset.prompt; $("#charCount").textContent = question.value.length + "/2000"; question.focus(); }));
$("#deadlineForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = $("#deadlineTitle").value.trim(), date = $("#deadlineDate").value;
  if (!title || !date) return;
  const li = document.createElement("li");
  const strong = document.createElement("strong"); strong.textContent = title;
  const dateText = document.createElement("span"); dateText.textContent = " — " + date;
  const remove = document.createElement("button"); remove.className = "chip"; remove.textContent = "Rimuovi"; remove.type = "button"; remove.addEventListener("click", () => li.remove());
  li.append(strong,dateText,document.createTextNode(" "),remove); $("#deadlineList").append(li); event.target.reset();
});
let installPrompt;
window.addEventListener("beforeinstallprompt", (event) => { event.preventDefault(); installPrompt = event; $("#installBtn").hidden = false; });
$("#installBtn").addEventListener("click", async () => { if (!installPrompt) return; installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; $("#installBtn").hidden = true; });
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
