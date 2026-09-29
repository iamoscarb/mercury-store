import { CustomHeader } from "@/components/custom/CustomHeader"
import { Outlet } from "react-router"

export const MercuryStoreLayout = () => {
    return (
        <div className="bg-amber-300">
            <CustomHeader />
            <p>MercuryStoreLayout</p>
            <Outlet />
        </div>
    )
}
