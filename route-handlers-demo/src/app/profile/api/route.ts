import { headers } from 'next/headers'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const headerList = headers()
  console.log('Headers:', requestHeaders.get('Authorization'))
  console.log('Header2:', headerList.get('Authorization'))
  return new Response('<h1>Profile API data</h1>', {
    headers: { 'Content-Type': 'text/html' },
  })
}
