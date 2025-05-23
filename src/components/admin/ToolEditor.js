"use client"
import { useState, useEffect } from "react"
import {
  Box, Button, Table, Thead, Tbody,
  Tr, Th, Td, IconButton, useToast
} from "@chakra-ui/react"
import {
  collection, getDocs, deleteDoc, doc
} from "firebase/firestore"

import { db } from "@/lib/firebase"
import { FaPlus, FaEdit, FaMinusCircle } from "react-icons/fa"

export default function ToolEditor() {
  const [tools, setTools] = useState([])
  const toast = useToast()

  async function fetchTools() {
    const snap = await getDocs(collection(db, "tools"))
    setTools(snap.docs.map(d => ({ id: d.id, ...d.data() })))
  }

  useEffect(() => {
    fetchTools()
  }, [])

  async function handleDelete(id) {
    if (!confirm("Delete this tool?")) return
    await deleteDoc(doc(db, "tools", id))
    toast({ title: "Tool deleted", status: "success" })
    fetchTools()
  }

  return (
    <Box>
      <Button leftIcon={<FaPlus />} colorScheme="blue" mb={4}>
        New Tool
      </Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Slug</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tools.map(t => (
            <Tr key={t.id}>
              <Td>{t.name}</Td>
              <Td>{t.slug}</Td>
              <Td>
                <IconButton icon={<FaEdit />} size="sm" mr={2} aria-label="Edit" />
                <IconButton
                  icon={<FaMinusCircle />}
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleDelete(t.id)}
                  aria-label="Delete"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}
