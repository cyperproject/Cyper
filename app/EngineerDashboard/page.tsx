import Sidebar from "@/components/DashboardParts/Sidebar";
import Datacollage from "@/components/Datacollage/Datacollage";

export default function page() {
    return (
        <>
            <Sidebar />
            <div style={{
                width: "calc(100% - 240px)",
                height: "100%",
                position: "absolute",
                left: "240px",
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                display:"flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Datacollage />
            </div>
        </>
    )
}
