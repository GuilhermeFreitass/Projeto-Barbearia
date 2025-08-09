import { Card, CardContent } from "@/app/_components/ui/card"
import Image from "next/image"

import { SidebarSheet } from "./sidebar-sheet"
import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger } from "./ui/sheet"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image src="/logo.png" alt={"Logo"} height={18} width={70} />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
