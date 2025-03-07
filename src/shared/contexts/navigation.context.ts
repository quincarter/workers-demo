import { createContext } from "@lit/context";
import { NavItem } from "../interfaces/navigation.interface";

export const NavigationContext = createContext<NavItem[]>('navContext');
