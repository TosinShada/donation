import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "theme"
import SEO from "components/seo"
import Layout from "components/layout"
import PageHeader from 'components/header/page-header'
import Status from "sections/status"

export default function Transaction() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO title='Medical Missionaries of Mary' />
                <PageHeader
                    title="Donate to Medical Missionaries of Mary for the Upgrade of its Clinic/PHC"
                    subtitle="Donate"
                    description="Your donations will save many mothers and new born babies and will also save communities."
                />
                <Status />
            </Layout>
        </ThemeProvider>
    )
}