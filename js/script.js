// Conteúdo dos painéis: edite os textos abaixo para personalizar o site.
const details = {
  hepatite: {
    kicker: "01 / ANTIVIRAIS",
    title: "Hepatite C",
    summary: "A hepatite C é uma infecção causada pelo vírus HCV. Ela pode provocar inflamação e danos ao fígado, muitas vezes sem sintomas durante anos.",
    treatment: "Antivirais de ação direta atuam em etapas da multiplicação do vírus. Os esquemas atuais costumam durar algumas semanas e curam a maioria das pessoas, mas a escolha depende da avaliação clínica e de fatores como doença hepática e outros medicamentos em uso.",
    note: "Não existe vacina disponível contra a hepatite C. Testagem, diagnóstico e acompanhamento são importantes; após a cura, ainda pode haver risco de reinfecção."
  },
  cancer: {
    kicker: "02 / TERAPIAS ONCOLÓGICAS",
    title: "Câncer",
    summary: "Câncer é o nome dado a um conjunto de doenças em que células passam a crescer de maneira descontrolada. O tipo de câncer e suas características influenciam as decisões de tratamento.",
    treatment: "As opções podem incluir cirurgia, radioterapia, quimioterapia, imunoterapia, terapias-alvo e terapia hormonal. Algumas pessoas recebem uma combinação de métodos; outras, tratamentos diferentes, conforme o diagnóstico.",
    note: "Não há um único tratamento para todos os cânceres. A equipe especializada considera benefícios, riscos, preferências da pessoa e resposta ao tratamento."
  },
  aids: {
    kicker: "03 / ANTIRRETROVIRAIS",
    title: "HIV e AIDS",
    summary: "HIV é o vírus que ataca células do sistema imunológico. AIDS é uma fase avançada da infecção pelo HIV, que pode ser evitada com diagnóstico e tratamento oportunos.",
    treatment: "A terapia antirretroviral combina medicamentos que impedem a multiplicação do HIV. Com adesão e acompanhamento, ela pode reduzir a carga viral a níveis indetectáveis e preservar a saúde do sistema imunológico.",
    note: "O tratamento controla o HIV, mas não é considerado uma cura. Pessoas com carga viral indetectável mantida não transmitem o HIV por via sexual (Indetectável = Intransmissível, I=I)."
  },
  insulina: {
    kicker: "04 / DIABETES",
    title: "Insulina",
    summary: "Insulina é um hormônio produzido pelo pâncreas que ajuda a glicose a entrar nas células. Como medicamento, é essencial para pessoas com diabetes tipo 1 e pode ser necessária em alguns casos de diabetes tipo 2 e outras situações.",
    treatment: "Existem formulações com tempos de ação diferentes, além de canetas aplicadoras, bombas e sistemas de monitoramento. O tipo e a dose precisam ser individualizados por profissionais de saúde.",
    note: "Insulina não é uma doença: é um tratamento. Usá-la de forma inadequada pode causar hipoglicemia. Não ajuste a dose sem orientação da equipe que acompanha o diabetes."
  },
  covid: {
    kicker: "05 / VACINAS E CUIDADOS",
    title: "COVID-19",
    summary: "A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, identificado no fim de 2019. A gravidade varia conforme a pessoa e fatores como idade, vacinação e condições de saúde.",
    treatment: "Vacinas reduzem principalmente o risco de doença grave e morte. Para algumas pessoas com maior risco, antivirais podem ser indicados no início da doença; a escolha depende de avaliação profissional, tempo desde o início dos sintomas e possíveis interações.",
    note: "Manter a vacinação conforme as recomendações locais e procurar orientação cedo quando houver sintomas e fatores de risco são medidas importantes. Antibióticos não tratam o vírus em si."
  }
};

const dialog = document.querySelector("#detail-dialog");
const closeButton = document.querySelector(".dialog-close");

document.querySelectorAll("[data-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = details[button.dataset.open];
    if (!item) return;
    document.querySelector("#detail-kicker").textContent = item.kicker;
    document.querySelector("#detail-title").textContent = item.title;
    document.querySelector("#detail-summary").textContent = item.summary;
    document.querySelector("#detail-treatment").textContent = item.treatment;
    document.querySelector("#detail-note").textContent = item.note;
    dialog.showModal();
  });
});

closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav-principal");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});
