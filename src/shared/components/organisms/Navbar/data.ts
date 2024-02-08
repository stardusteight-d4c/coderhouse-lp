export const courses: Array<INavbarData> = [
  {
    category: "Design UX/UI",
    items: [
      { name: "Design UX/UI Avançado", new: false },
      { name: "Design UX/UI", new: false },
      { name: "Figma", new: false },
    ],
  },
  {
    category: "Marketing Digital",
    items: [
      { name: "Growth Marketing", new: false },
      { name: "Estratégia e Gestão de Social Media", new: false },
    ],
  },
  {
    category: "Programação",
    items: [
      { name: "HTML e CSS", new: true },
      { name: "Javascript", new: false },
      { name: "React JS", new: false },
      { name: "Back End", new: false },
    ],
  },
  {
    category: "Produto",
    items: [
      { name: "Product Management", new: false },
      { name: "Product Management Avançado", new: false },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "Power BI", new: true },
      { name: "Data Analytics", new: false },
      { name: "SQL", new: false },
      { name: "Data Science", new: false },
      { name: "Python", new: false },
      { name: "Excel e Google Sheets", new: false },
    ],
  },
  {
    category: "Inglês",
    items: [
      { name: "Inglês para o mundo digital - Nível Elementary", new: false },
      { name: "Inglês para o mundo digital - Nível Intermediate", new: false },
    ],
  },
  {
    category: "Inteligencia Artificial",
    items: [{ name: "Fundamentos de Inteligência Artificial", new: true }],
  },
]

export const carers: Array<INavbarData> = [
  {
    category: "Design UX/UI",
    items: [
      { name: "Carreira de Desenvolvedor UX/UI", new: false },
      { name: "Carreira de Designer UX/UI", new: false },
      { name: "Carreira de Web Product Manager", new: false },
      { name: "Carreira de Product Designer", new: false },
      { name: "Carreira de Full Stack Designer", new: false },
      { name: "Carreira de Designer UX/UI + Figma", new: false },
    ],
  },
  {
    category: "Programação",
    items: [
      { name: "Carreira de Desenvolvedor Front-End React JS", new: false },
      { name: "Carreira de Desenvolvedor UX/UI", new: false },
      { name: "Carreira de Web Product Manager", new: false },
      { name: "Carreira de Desenvolvedor Full Stack", new: false },
      { name: "Carreira de Desenvolvedor Back End", new: false },
      { name: "Carreira de Full Stack Designer", new: false },
      { name: "Carreira de Desenvolvedor Full Stack Python", new: false },
      { name: "Carreira de Programador Iniciante + Mentorias", new: false },
    ],
  },
  {
    category: "Produto",
    items: [
      { name: "Carreira de Web Product Manager", new: false },
      { name: "Carreira de Product Designer", new: false },
      { name: "Carreira de Product Manager", new: false },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "Carreira de Cientista de dados", new: false },
      { name: "Carreira de Cientista de dados + Python", new: false },
      { name: "Carreira de Introdução a dados", new: false },
      { name: "Carreira de Analista de dados", new: false },
      { name: "Carreira de Analista de dados Python", new: false },
      { name: "Carreira de Desenvolvedor Full Stack Python", new: false },
    ],
  },
]

export const forBusinesses: Array<INavbarData> = [
  {
    category: "",
    items: [
      { name: "Capacitações", new: false },
      { name: "Parcerias", new: false },
    ],
  },
]

export const menuItems: Array<{
  category: string
  items: Array<string> | undefined
}> = [
  {
    category: "Benefícios",
    items: undefined,
  },
  {
    category: "Comunidade",
    items: ["Quem somos", "Imprensa", "Experiências", "Novas parcerias"],
  },
  {
    category: "Empresas certificadoras",
    items: undefined,
  },
]
