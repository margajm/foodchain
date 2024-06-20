"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { buttonVariants } from "@/components/ui/button";
import { JSX, SVGProps } from "react"

export default function MarketPlaceSection() {

  return (
    <>
    <div className="bg-gradient-to-r from-green-300 via-gree-300 to-blue-300 py-[50px] flex flex-col items-center justify-center text-center px-4 mx-4 rounded-3xl">

    <div className="flex items-center w-full max-w-md bg-white rounded-md shadow-sm border border-gray-200 dark:bg-gray-950 dark:border-gray-800">
      <div className="flex-1">
        <Input
          className="w-full bg-transparent border-0 focus:ring-0 dark:text-gray-50"
          placeholder="Search for products"
          type="search"
        />
      </div>
      <Button className="h-10 w-10 rounded-md" size="icon" variant="ghost">
        <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <span className="sr-only">Search</span>
      </Button>
    </div>

    </div>

<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            
            <div className="border shadow-sm rounded-xl overflow-hidden">
              <div className="flex items-center justify-between bg-gray-200 dark:bg-gray-800 px-4 py-3">
                <h3 className="font-semibold text-base">Glimmer Lamps</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Comprar</DropdownMenuItem>
                    <DropdownMenuItem>Ver Detalle</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/placeholder.png"
                    width="64"
                  />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">In Production</p>
                    <p className="font-medium">500 in stock</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Luminance Creations</p>
                  </div>
                </div>
                <div className="mt-8 mb-2">
                  <Link href="/product-detail" className={buttonVariants({ variant: "outline" })}>Ver Detalle</Link>
                  <Button className="mx-4">Comprar</Button>
                </div>
              </div>
            </div>

            <div className="border shadow-sm rounded-xl overflow-hidden">
              <div className="flex items-center justify-between bg-gray-200 dark:bg-gray-800 px-4 py-3">
                <h3 className="font-semibold text-base">Aqua Filters</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Comprar</DropdownMenuItem>
                    <DropdownMenuItem>Ver Detalle</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/placeholder.png"
                    width="64"
                  />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Available for Order</p>
                    <p className="font-medium">750 in stock</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">HydraClean Solutions</p>
                  </div>
                </div>
                <div className="mt-8 mb-2">
                  <Link href="/product-detail" className={buttonVariants({ variant: "outline" })}>Ver Detalle</Link>
                  <Button className="mx-4">Comprar</Button>
                </div>
              </div>
            </div>

            <div className="border shadow-sm rounded-xl overflow-hidden">
              <div className="flex items-center justify-between bg-gray-200 dark:bg-gray-800 px-4 py-3">
                <h3 className="font-semibold text-base">Eco Planters</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Comprar</DropdownMenuItem>
                    <DropdownMenuItem>Ver Detalle</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/placeholder.png"
                    width="64"
                  />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Backordered</p>
                    <p className="font-medium">300 in stock</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GreenGrowth Designers</p>
                  </div>
                </div>
                <div className="mt-8 mb-2">
                  <Link href="/product-detail" className={buttonVariants({ variant: "outline" })}>Ver Detalle</Link>
                  <Button className="mx-4">Comprar</Button>
                </div>
              </div>
            </div>

            <div className="border shadow-sm rounded-xl overflow-hidden">
              <div className="flex items-center justify-between bg-gray-200 dark:bg-gray-800 px-4 py-3">
                <h3 className="font-semibold text-base">Zest Juicers</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Comprar</DropdownMenuItem>
                    <DropdownMenuItem>Ver Detalle</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/placeholder.png"
                    width="64"
                  />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Newly Launched</p>
                    <p className="font-medium">1000 in stock</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">FreshTech Appliances</p>
                  </div>
                </div>
                <div className="mt-8 mb-2">
                  <Link href="/product-detail" className={buttonVariants({ variant: "outline" })}>Ver Detalle</Link>
                  <Button className="mx-4">Comprar</Button>
                </div>

              </div>
            </div>

            <div className="border shadow-sm rounded-xl overflow-hidden">
              <div className="flex items-center justify-between bg-gray-200 dark:bg-gray-800 px-4 py-3">
                <h3 className="font-semibold text-base">Flexi Wearables</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Comprar</DropdownMenuItem>
                    <DropdownMenuItem>Ver Detalle</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="p-4 bg-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/placeholder.png"
                    width="64"
                  />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Selling Fast</p>
                    <p className="font-medium">200 in stock</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Vitality Gear Co.</p>
                  </div>
                </div>
                <div className="mt-8 mb-2">
                  <Link href="/product-detail" className={buttonVariants({ variant: "outline" })}>Ver Detalle</Link>
                  <Button className="mx-4">Comprar</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        </>
  )
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    )
  }
  
  
  function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
  function LineChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  }
  
  
  function MoveHorizontalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 8 22 12 18 16" />
        <polyline points="6 8 2 12 6 16" />
        <line x1="2" x2="22" y1="12" y2="12" />
      </svg>
    )
  }
  
  
  function Package2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    )
  }
  
  
  function PackageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    )
  }
  
  
  function ShoppingCartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }
  
  
  function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }

  function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
