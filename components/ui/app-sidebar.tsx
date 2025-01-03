import { Calendar, Home, Search, Settings, Text, Bot, Notebook } from "lucide-react";
import { Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./sidebar";
import Link from "next/link";
const items = [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Notes",
      url: "/dashboard/notes",
      icon: Notebook,
    },
    {
      title: "Zen Mode",
      url: "/dashboard/zenmode",
      icon: Text,
    },
    {
      title: "noteX AI",
      url: "/dashboard/notexai",
      icon: Bot,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ]


export function AppSidebar(){
    return(
        <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>noteX</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    )
}