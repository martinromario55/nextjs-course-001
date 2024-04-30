import { cookies, headers } from 'next/headers'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const headerList = headers()
  const theme = request.cookies.get('theme')

  // Set cookie using cookies() from next/server
  cookies().set('resultsPerPage', '20')

  console.log('Headers:', requestHeaders.get('Authorization'))
  console.log('Header2:', headerList.get('Authorization'))
  console.log('Theme:', theme)
  console.log('Cookies:', cookies().get('resultsPerPage'))
  return new Response('<h1>Profile API data</h1>', {
    headers: { 'Content-Type': 'text/html', 'Set-Cookie': 'theme=dark' },
  })
}
