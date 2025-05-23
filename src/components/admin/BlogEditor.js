"use client"
import { useState, useEffect } from "react"
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  useToast,
  useDisclosure
} from "@chakra-ui/react"
import PostModal from "@/components/admin/PostModal"
import { doc, setDoc, getDocs, deleteDoc, collection } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { FaPlus, FaEdit, FaMinusCircle } from "react-icons/fa"

export default function BlogEditor() {
  const [posts, setPosts] = useState([])
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [initialData, setInitialData] = useState(null)


  async function fetchPosts() {
    const snap = await getDocs(collection(db, "posts"))
    setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })))
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  async function handleDelete(id) {
    if (!confirm("Delete this post?")) return
    await deleteDoc(doc(db, "posts", id))
    toast({ title: "Post deleted", status: "success" })
    fetchPosts()
  }

  return (
    <Box>
      {/* Create button */}
      <Button leftIcon={<FaPlus />} colorScheme="blue" mb={4} onClick={() => {
        setInitialData(null)
        onOpen()
      }}>
        New Post
      </Button>

      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        initialData={initialData || {}}
        onCreate={async (data) => {
          // data.slug has been generated from title
          await setDoc(doc(db, "posts", data.slug), data)
          toast({ title: initialData ? "Post updated" : "Post created", status: "success" })
          fetchPosts()
        }}
      />


      {/* Posts Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts.map(p => (
            <Tr key={p.id}>
              <Td>{p.title}</Td>
              <Td>{p.date}</Td>
              <Td>
                <IconButton 
                  onClick={() => {
                    setInitialData(p)   // p is the post object
                    onOpen()
                  }}
                icon={<FaEdit />} size="sm" mr={2} aria-label="Edit" />
                <IconButton
                  icon={<FaMinusCircle />}
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleDelete(p.id)}
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
