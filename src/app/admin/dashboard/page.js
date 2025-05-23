"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/lib/firebase"
import {
  Box, Heading, Tabs, TabList, TabPanels,
  Tab, TabPanel, Spinner, Center
} from "@chakra-ui/react"
import BlogEditor from "@/components/admin/BlogEditor"
import ToolEditor from "@/components/admin/ToolEditor"

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/admin/login")
      } else {
        setLoading(false)
      }
    })
    return unsub
  }, [router])

  if (loading) {
    return (
      <Center py={20}>
        <Spinner size="xl" />
      </Center>
    )
  }

  return (
    <Box maxW="6xl" mx="auto" py={12} px={4}>
      <Heading mb={8}>Admin Dashboard</Heading>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Blog Editor</Tab>
          <Tab>Tool Editor</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <BlogEditor />
          </TabPanel>
          <TabPanel p={0}>
            <ToolEditor />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
