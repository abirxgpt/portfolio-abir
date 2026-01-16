import React from "react";
import { FloatingDock } from "./FloatingDock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconCode,
    IconBrandLeetcode,
    IconBrandHackerrank, // Note: Tabler might not have specific Hackerrank/Codechef, using Code fallback
} from "@tabler/icons-react";
import { FaHackerrank } from 'react-icons/fa'; // Fallback to React Icons if needed

export default function SocialDock() {
    const links = [
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/abirxgpt",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://linkedin.com/in/abirxgpt",
        },
        {
            title: "LeetCode",
            icon: (
                <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://leetcode.com/u/abirxgpt/",
        },
        {
            title: "HackerRank",
            icon: (
                <FaHackerrank size={24} />
            ),
            href: "https://hackerrank.com/profile/abirxgpt",
        },
        {
            title: "CodeChef",
            icon: (
                <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.codechef.com/users/abirxgpt",
        },
        {
            title: "Email",
            icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "mailto:abir.guptaaa@gmail.com",
        },
    ];
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '2rem 0' }}>
            <FloatingDock
                items={links}
            />
        </div>
    );
}
