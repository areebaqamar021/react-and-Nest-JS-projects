import { signIn } from '@src/lib'
import { LoginScreen } from '@src/screens'
import React from 'react'

function LoginPage() {
    return (
        <LoginScreen
            onSignIn={async (v) => {
                "use server"
                await signIn("credentials", { ...v, redirectTo: "/" })
            }}
        />
    )
}

export default LoginPage
