import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"

interface menuContentInt {
    title: string;
    subtitle: string;
    icon?: any;
}

interface Props {
    triggerElement: any;
    menuContent: menuContentInt[]
}

export const CustomDropdownMenu = ({ triggerElement, menuContent }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="border-transparent">
                {triggerElement}
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                {
                    menuContent.map((content) => (
                        <DropdownMenuItem>
                            {content.icon}
                            {content.title}
                            <DropdownMenuShortcut>
                                {content.subtitle}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


