"use client"

import { useState } from "react"
import Image from "next/image"
import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EditPackDialog } from "@/components/admin/edit-pack-dialog"
import type { Pack } from "@/types"

interface PacksListProps {
  packs: Pack[]
}

export function PacksList({ packs }: PacksListProps) {
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const handleEditPack = (pack: Pack) => {
    setSelectedPack(pack)
    setIsEditDialogOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packs.map((pack) => (
          <Card key={pack.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                <span className="truncate">{pack.name}</span>
                <Button variant="ghost" size="icon" onClick={() => handleEditPack(pack)}>
                  <Pencil className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground mb-4">{pack.description}</p>
              <div className="flex gap-2 mb-4">
                {pack.imageUrl1 && (
                  <div className="relative h-24 w-24 rounded-md overflow-hidden">
                    <Image
                      src={pack.imageUrl1 || "/placeholder.svg"}
                      alt={`${pack.name} image 1`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {pack.imageUrl2 && (
                  <div className="relative h-24 w-24 rounded-md overflow-hidden">
                    <Image
                      src={pack.imageUrl2 || "/placeholder.svg"}
                      alt={`${pack.name} image 2`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-sm">
                <span className="font-medium">{pack.prompts.length}</span> prompts
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedPack && (
        <EditPackDialog pack={selectedPack} open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} />
      )}
    </>
  )
}

