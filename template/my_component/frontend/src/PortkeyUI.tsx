import React, { useRef } from "react"
import { ConfigProvider } from "@portkey/did-ui-react"
import { SignIn, PortkeyProvider } from "@portkey/did-ui-react"
import "@portkey/did-ui-react/dist/assets/index.css"

ConfigProvider.setGlobalConfig({
  requestDefaults: {
    baseURL: "https://did-portkey-test.portkey.finance",
  },
  graphQLUrl:
    "https://dapp-portkey-test.portkey.finance/Portkey_DID/PortKeyIndexerCASchema/graphql",
})

const PortkeyUI: React.FC = () => {
  const ref = useRef<{ setOpen: (open: boolean) => void }>()

  const onFinish = (result: any) => {
    // Modify the value corresponding to the following fields
    console.log(result)
  }

  return (
    <PortkeyProvider networkType={"TESTNET"}>
      <button onClick={() => ref.current?.setOpen(true)}>sign in</button>
      <SignIn ref={ref} onFinish={onFinish} />
    </PortkeyProvider>
  )
}

export default PortkeyUI
