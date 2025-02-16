// utils
import { getAllEvaluations } from './get'
import { createEvaluation } from './post'

export async function POST(req: Request) {
  const body = await req.json()
  return createEvaluation(body)
}

export async function GET() {
  return getAllEvaluations()
}
