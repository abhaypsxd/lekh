'use client'

import { Calendar, Home, Search, Settings, Text, Bot, Notebook, HomeIcon, Bookmark, User } from "lucide-react";
import Link from "next/link";
import '../styles/sidebar.css'
import { usePathname } from "next/navigation";
import { link } from "fs";

const SidebarLinks = [
    {id:1, icon: HomeIcon, name: 'Home', path:'/dashboard'},
    {id:2, icon: Notebook, name: 'Notes', path:'/dashboard/notes'},
    {id:3, icon: Search, name: 'Search', path:'/dashboard/search'},
    {id:4, icon: Text, name: 'Zen', path:'/dashboard/zenmode'},
    {id:5, icon: Bot, name: 'LekhAI', path:'/dashboard/notexai'},
    {id:6, icon: Bookmark, name: 'Bookmarks', path:'/dashboard/bookmarks'},
    {id:7, icon: Settings, name: 'Settings', path:'/dashboard/settings'},
];


export function DashSidebar(){
    const pathname = usePathname();
    const isActive = (path:string)=> path===pathname;
    return(
        <div className="sidebar">
            <div className="icon">
                <a href="/">lekh.</a>
            </div>
            <div className="links">
                {SidebarLinks.map((link)=>{
                    return(
                        <div key={link.id} className="link"> 
                            <Link href={link.path} className={isActive(link.path)?'active':'0'}>
                                <link.icon/>
                                <span>{link.name}</span>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}