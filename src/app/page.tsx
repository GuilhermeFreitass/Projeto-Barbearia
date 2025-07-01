import { SearchIcon } from "lucide-react"
import Header from "./_components/Header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Page = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2>Olá, Fulano</h2>
        <p>Sexta, 10 de fevereiro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..."></Input>
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Banner"
            src="/Banner-Pizza.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Page
