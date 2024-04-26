import { TooltipProvider } from "@radix-ui/react-tooltip";

export default function RabbitProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <TooltipProvider>{children}</TooltipProvider>;
}
