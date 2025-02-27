"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AddPackDialog } from "@/components/admin/add-pack-dialog"

export function AddPackButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Add Pack
      </Button>
      <AddPackDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  )
}

