export async function signUpWithMetadata(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  barangay: string,
  userType: 'resident' | 'official' | 'volunteer'
) {
  await new Promise((resolve) => setTimeout(resolve, 400))

  // Static mode stub: returns success without backend persistence.
  return {
    data: {
      user: {
        email,
        user_metadata: {
          first_name: firstName,
          last_name: lastName,
          barangay,
          user_type: userType,
        },
      },
      session: null,
    },
    error: null,
  }
}

export async function signInWithEmail(email: string, password: string) {
  await new Promise((resolve) => setTimeout(resolve, 300))

  return {
    data: {
      user: {
        email,
      },
      session: null,
    },
    error: null,
  }
}

export async function signOut() {
  return { error: null }
}

export async function getCurrentUser() {
  return {
    email: 'resident@example.com',
  }
}
