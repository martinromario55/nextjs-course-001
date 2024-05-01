import { ClientComponentOne } from '@/components/client-component-one'
import { ServerComponentOne } from '@/components/server-component-one'
import React from 'react'

const InterleavingPage = () => {
  return (
    <div>
      <h1>Interleaving Page</h1>
      {/* <ServerComponentOne /> */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  )
}

export default InterleavingPage
