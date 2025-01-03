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
                <Link href='/dashboard/notes'>
                    <div className="link">
                        <Notebook/>
                        <span>Notes</span>
                    </div>
                </Link>
            </div>
            <div className="profile"></div>
        </div>
    )
}