import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "theme"
import SEO from "components/seo"
import Layout from "components/layout"
import PageHeader from 'components/header/page-header'
import Donate from "sections/donate"

export default function DonatePage() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO title='Medical Missionaries of Mary' />
                <PageHeader
                    title="Donate to Medical Missionaries of Mary Abuja PHC Clinic and Maternity"
                    subtitle="Donate"
                    description="Your donations will save many mothers and new born babies and will also save communities."
                />
                <Donate />
            </Layout>
        </ThemeProvider>
    )
}
