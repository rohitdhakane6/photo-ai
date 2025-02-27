import { PacksList } from "@/components/admin/packs-list"
import { AddPackButton } from "@/components/admin/add-pack-button"
import { getPacks } from "@/data"

export default function AdminPacksPage() {
  const packs = getPacks()

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Packs Management</h1>
        <AddPackButton />
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Total Packs: {packs.length}</h2>
          <PacksList packs={packs} />
        </div>
      </div>
    </div>
  )
}

