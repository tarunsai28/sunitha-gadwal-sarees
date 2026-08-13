import { isAuthenticated } from "@/lib/auth";
import SellerDashboard from "@/components/seller/Dashboard";
import SellerLoginForm from "@/components/seller/LoginForm";

export default async function SellerPage() {
    const authed = await isAuthenticated();
    return authed ? <SellerDashboard /> : <SellerLoginForm />;
}
