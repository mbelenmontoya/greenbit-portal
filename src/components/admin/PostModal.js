// components/admin/PostModal.js
"use client"
import { useState, useEffect } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react"

// Utility to generate slug from title
function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")     // Remove non-word, non-space, non-hyphen chars
      .replace(/\s+/g, "-")          // Replace spaces with hyphens
  }

  export default function PostModal({ isOpen, onClose, onCreate, initialData = {} }) {
    const [form, setForm] = useState({
        title: initialData.title || "",
        date: initialData.date || "",
        excerpt: initialData.excerpt || "",
        contentHTML: initialData.contentHTML || "",
        coverImageURL: initialData.coverImageURL || "",
      })

      useEffect(() => {
        // Reset to initialData when opened
        if (isOpen) {
          setForm({
            title: initialData.title || "",
            date: initialData.date || "",
            excerpt: initialData.excerpt || "",
            contentHTML: initialData.contentHTML || "",
            coverImageURL: initialData.coverImageURL || "",
          })
        }
      }, [isOpen, initialData])

      const handleChange = (e) => {
        const { name, value } = e.target
        setForm((f) => ({ ...f, [name]: value }))
      }
    
      const handleSubmit = () => {
        const slug = slugify(form.title)
        onCreate({ ...form, slug })
        onClose()
      }

      return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{initialData.id ? "Edit Post" : "New Post"}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <FormControl mb={3}>
                    <FormLabel>Title</FormLabel>
                    <Input name="title" value={form.title} onChange={handleChange} />
                </FormControl>
                <FormControl mb={3}>
                    <FormLabel>Date</FormLabel>
                    <Input name="date" type="date" value={form.date} onChange={handleChange} />
                </FormControl>
                <FormControl mb={3}>
                    <FormLabel>Excerpt</FormLabel>
                    <Textarea name="excerpt" value={form.excerpt} onChange={handleChange} />
                </FormControl>
                <FormControl mb={3}>
                    <FormLabel>Content (HTML)</FormLabel>
                    <Textarea name="contentHTML" value={form.contentHTML} onChange={handleChange} rows={6} />
                </FormControl>
                <FormControl mb={3}>
                    <FormLabel>Cover Image URL</FormLabel>
                    <Input name="coverImageURL" value={form.coverImageURL} onChange={handleChange} />
                </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} mr={3}>Cancel</Button>
                    <Button colorScheme="blue" onClick={handleSubmit}>
                        {initialData.id ? "Update" : "Create"}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
            
      )
  }