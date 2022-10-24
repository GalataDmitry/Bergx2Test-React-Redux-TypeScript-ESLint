import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import AppContainer from "./components/AppContainer"

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>
)