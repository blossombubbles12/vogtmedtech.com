'use client'

import { AuthProvider } from '@saas-ui/auth'
import { SaasProvider } from '@saas-ui/react'
import { ThemeSelectionModal } from '../components/theme-selection-modal'

import { theme } from '#theme'

export function Provider(props: { children: React.ReactNode }) {
  return (
    <SaasProvider theme={theme}>
      <AuthProvider>
        <ThemeSelectionModal />
        {props.children}
      </AuthProvider>
    </SaasProvider>
  )
}
