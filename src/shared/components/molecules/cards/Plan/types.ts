export interface IPlan {
  header?: string
  type: "Design UX/UI" | "Programação" | "Produto" | "Data"
  off?: string
  title: string
  courses?: Array<string>
  standardPlan?: string
  workload: string
  totalPrice: string
  monthlyPrice: string
}
