import { CustomHeader } from "@/components/custom/CustomHeader"
import { Outlet } from "react-router"

export const MercuryStoreLayout = () => {
    return (
        <div>
            <CustomHeader />
            <Outlet />
        </div>
    )
}
