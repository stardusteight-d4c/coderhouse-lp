export interface IPlan {
  header?: string
  type: Array<string>
  off?: string
  title: string
  courses?: Array<string>
  standardPlan?: string
  workload: string
  totalPrice: string
  monthlyPrice: string
}
