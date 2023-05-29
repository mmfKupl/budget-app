export interface EnvelopeItem {
  id: string,
  userId: string,
  name: string,
}

export interface TransactionsItem {
  id: string,
  category: string[],
  userId: string,
  envelop: string[],
  amount: number,
  date: number,
  description: string,
  type: string,
}

export interface CategoryItem {
  id: string,
  userId: string,
  name: string,
}