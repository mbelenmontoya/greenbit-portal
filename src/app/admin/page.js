"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Box, Heading, FormControl, FormLabel,
  Input, Button, useToast
} from "@chakra-ui/react"
import { auth } from "@/lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export default function AdminLoginPage() {
  const router = useRouter()
  const toast = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.replace("/admin/dashboard")
    } catch (err) {
      toast({
        title: "Login failed",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
      setLoading(false)
    }
  }

  return (
    <Box maxW="md" mx="auto" py={20}>
      <Heading mb={6}>Admin Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          isLoading={loading}
        >
          Sign In
        </Button>
      </form>
    </Box>
  )
}
