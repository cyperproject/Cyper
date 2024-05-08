import UserSidebar from "@/components/DashboardParts/UserSidebar";
import SuccessfulMessage from "@/components/SuccessfulMessage";

export default function page() {
    return (
        <>
            <UserSidebar />
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
                <SignUp />
            </div>
        </>
    )
}
