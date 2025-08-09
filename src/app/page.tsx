import Header from "./_components/Header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"

const Page = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2>Olá, Fulano</h2>
        <p>Sexta, 10 de fevereiro</p>

        {/* Busca Completa */}
        <div className="mt-6">
          <Search />
        </div>

        {/* Busca Rapida */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.name} asChild>
              <Link href={`/barbershops?service=${option.name}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.name}
                />
                {option.name}
              </Link>
            </Button>
          ))}
        </div>

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Banner"
            src="/Banner-Pizza.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Agendamentos */}
        <BookingItem />

        {/* Recomendados */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        {/* Populares */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
