import { BrowserRouter as Router, Routes, Route } from 'react-router'

import { publicRoutes } from './routes'
import DefaultLayout from './layouts/DefaultLayout'
import { Fragment } from 'react'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component

            let Layout: React.ComponentType<{ children: React.ReactNode }> =
              DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
