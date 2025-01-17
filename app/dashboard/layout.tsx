import type { Metadata } from "next";
import "../globals.css";
import './styles.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { DashSidebar } from "@/components/comps_css/sidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-0">
        <div className="content">
          <DashSidebar/>
          {children}
        </div>
    </main >
  )
}

