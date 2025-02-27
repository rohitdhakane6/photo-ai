import type { Pack } from "@/types"

// Hardcoded data for packs
const packsData: Pack[] = [
  {
    id: "1",
    name: "Nature Photography",
    description: "Prompts for capturing stunning nature scenes",
    imageUrl1: "/placeholder.svg?height=200&width=200",
    imageUrl2: "/placeholder.svg?height=200&width=200",
    prompts: [
      {
        id: "101",
        prompt: "Capture a sunset over mountains with reflections in a lake",
        imageUrl: "/placeholder.svg?height=150&width=150",
      },
      {
        id: "102",
        prompt: "Macro photography of dew drops on spider webs",
        imageUrl: "/placeholder.svg?height=150&width=150",
      },
      {
        id: "103",
        prompt: "Forest path with sunlight filtering through trees",
        imageUrl: "/placeholder.svg?height=150&width=150",
      },
    ],
  },
  {
    id: "2",
    name: "Portrait Ideas",
    description: "Creative prompts for portrait photography",
    imageUrl1: "/placeholder.svg?height=200&width=200",
    imageUrl2: "",
    prompts: [
      {
        id: "201",
        prompt: "Low-key portrait with single light source from the side",
        imageUrl: "/placeholder.svg?height=150&width=150",
      },
      {
        id: "202",
        prompt: "Portrait through objects (glass, prism, etc.) for creative effects",
        imageUrl: "/placeholder.svg?height=150&width=150",
      },
    ],
  },
  {
    id: "3",
    name: "Urban Exploration",
    description: "Prompts for city and street photography",
    imageUrl1: "/placeholder.svg?height=200&width=200",
    imageUrl2: "/placeholder.svg?height=200&width=200",
    prompts: [
      {
        id: "301",
        prompt: "Long exposure of car lights on a busy street at night",
        imageUrl: "/placeholder.svg?height=150&width=150",
      },
      {
        id: "302",
        prompt: "Reflections in puddles after rain in urban settings",
        imageUrl: "/placeholder.svg?height=150&width=150",
      },
      {
        id: "303",
        prompt: "Symmetry in architecture from unique perspectives",
        imageUrl: "/placeholder.svg?height=150&width=150",
      },
      {
        id: "304",
        prompt: "Street vendors and food stalls with vibrant colors",
        imageUrl: "/placeholder.svg?height=150&width=150",
      },
    ],
  },
]

export function getPacks(): Pack[] {
  return packsData
}

export function getPackById(id: string): Pack | undefined {
  return packsData.find((pack) => pack.id === id)
}

