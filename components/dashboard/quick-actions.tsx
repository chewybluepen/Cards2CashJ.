import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, CreditCard, RefreshCw, Send, Bitcoin } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Add Funds",
      icon: <PlusCircle className="h-6 w-6" />,
      href: "/add-funds",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Generate Card",
      icon: <CreditCard className="h-6 w-6" />,
      href: "/generate-card",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Convert",
      icon: <RefreshCw className="h-6 w-6" />,
      href: "/convert",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Send",
      icon: <Send className="h-6 w-6" />,
      href: "/send",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Crypto",
      href: "/crypto",
      icon: <Bitcoin className="h-6 w-6" />,
      color: "from-yellow-400 to-yellow-600",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        <CardTitle className="text-black font-bold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4">
          {actions.map((action) => (
            <Link key={action.title} href={action.href} className="flex flex-col items-center gap-2">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${action.color} text-black transition-transform hover:scale-110`}
              >
                {action.icon}
              </div>
              <span className="text-center text-xs font-bold">{action.title}</span>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
