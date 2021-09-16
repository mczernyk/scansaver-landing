import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { RiQrCodeLine } from 'react-icons/ri';


const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>There is nothing here, please double check your request.</p>
  </Layout>
)

export default NotFoundPage
