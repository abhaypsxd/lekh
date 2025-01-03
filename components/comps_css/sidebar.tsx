import { Calendar, Home, Search, Settings, Text, Bot, Notebook } from "lucide-react";
import Link from "next/link";
import '../styles/sidebar.css'
export function DashSidebar(){
    return(
        <div className="sidebar">
            <div className="icon">
                <span>LEKH</span>
            </div>
            <div className="links">
                <div className="link">
                    <Link href='/dashboard/notes'>
                        <Notebook/>
                        <span>Notes</span>
                    </Link>
                </div>
                <div className="link">
                    <Link href='/dashboard/zenmode'>
                        <Text/>
                        <span>Zen Mode</span>
                    </Link>
                </div>
                <div className="link">
                    <Link href='/dashboard/notexai'>
                        <Bot/>
                        <span>Lekh AI</span>
                    </Link>
                </div>
                <div className="link">
                    <Link href='/dashboard/settings'>
                        <Settings/>
                        <span>Settings</span>
                    </Link>
                </div>
            </div>
            <div className="profile"></div>
        </div>
    )
}